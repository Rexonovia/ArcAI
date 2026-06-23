import { streamText } from "ai";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getModel, buildSystemPrompt } from "@/lib/ai";
import { z } from "zod";

const ChatRequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
  mode: z.enum(["Beginner", "Technical", "PM"]).default("Technical"),
  conversationId: z.string().nullish(),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = ChatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { messages, mode, conversationId } = parsed.data;

  // Create or get conversation
  let convId = conversationId;
  if (!convId) {
    // Generate a title from the first user message
    const firstUserMsg = messages.find((m) => m.role === "user");
    const title = firstUserMsg
      ? firstUserMsg.content.slice(0, 80)
      : "New Chat";

    const conversation = await db.chatConversation.create({
      data: {
        userId: session.user.id,
        title,
        mode,
      },
    });
    convId = conversation.id;
  }

  // Save the latest user message
  const lastMessage = messages[messages.length - 1];
  if (lastMessage?.role === "user") {
    await db.chatMessage.create({
      data: {
        conversationId: convId,
        role: "user",
        content: lastMessage.content,
      },
    });
  }

  // Build system prompt
  const systemPrompt = buildSystemPrompt(mode);

  // Stream AI response
  const result = streamText({
    model: getModel(),
    system: systemPrompt,
    messages,
    onFinish: async ({ text }) => {
      // Persist assistant response
      await db.chatMessage.create({
        data: {
          conversationId: convId!,
          role: "assistant",
          content: text,
        },
      });

      // Update conversation timestamp
      await db.chatConversation.update({
        where: { id: convId! },
        data: { updatedAt: new Date() },
      });

      // Update user activity for streak tracking
      await db.user.update({
        where: { id: session.user.id },
        data: { lastActiveAt: new Date() },
      });
    },
  });

  return result.toTextStreamResponse({
    headers: {
      "X-Conversation-Id": convId,
    },
  });
}
