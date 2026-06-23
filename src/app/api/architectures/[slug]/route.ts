import { db } from "@/lib/db";

/**
 * GET /api/architectures/[slug] — Get full architecture with nodes & connections
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const architecture = await db.architecture.findUnique({
    where: { slug },
    include: {
      nodes: true,
      connections: true,
    },
  });

  if (!architecture) {
    return Response.json(
      { error: "Architecture not found" },
      { status: 404 }
    );
  }

  return Response.json(architecture);
}
