import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

/**
 * GET /api/playground/[id] — Load a specific saved state
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const state = await db.playgroundState.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!state) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(state);
}

/**
 * PUT /api/playground/[id] — Update a saved state
 */
const UpdateStateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  nodesJson: z.any().optional(),
  connectionsJson: z.any().optional(),
  trafficVolume: z.number().min(0).max(100).optional(),
});

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  // Verify ownership
  const existing = await db.playgroundState.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const body = await request.json();
  const parsed = UpdateStateSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const updated = await db.playgroundState.update({
    where: { id },
    data: parsed.data,
  });

  return Response.json(updated);
}

/**
 * DELETE /api/playground/[id] — Delete a saved state
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  // Verify ownership
  const existing = await db.playgroundState.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  await db.playgroundState.delete({ where: { id } });

  return Response.json({ success: true });
}
