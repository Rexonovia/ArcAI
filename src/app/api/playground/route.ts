import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

/**
 * GET /api/playground — List user's saved playground states
 */
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const states = await db.playgroundState.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      name: true,
      trafficVolume: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return Response.json(states);
}

/**
 * POST /api/playground — Save current playground state
 */
const SaveStateSchema = z.object({
  name: z.string().min(1).max(100).default("Untitled"),
  nodesJson: z.any(),
  connectionsJson: z.any(),
  trafficVolume: z.number().min(0).max(100).default(50),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = SaveStateSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const state = await db.playgroundState.create({
    data: {
      userId: session.user.id,
      name: parsed.data.name,
      nodesJson: parsed.data.nodesJson,
      connectionsJson: parsed.data.connectionsJson,
      trafficVolume: parsed.data.trafficVolume,
    },
  });

  return Response.json(state, { status: 201 });
}
