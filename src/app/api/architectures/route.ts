import { db } from "@/lib/db";
import { type NextRequest } from "next/server";

/**
 * GET /api/architectures — List architectures with optional search & filter
 * Query params: ?search=netflix&pattern=CDN
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");
  const pattern = searchParams.get("pattern");

  const where: Record<string, unknown> = { isPublished: true };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { technologies: { hasSome: [search] } },
    ];
  }

  if (pattern) {
    where.pattern = { contains: pattern, mode: "insensitive" };
  }

  const architectures = await db.architecture.findMany({
    where,
    orderBy: { name: "asc" },
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      pattern: true,
      icon: true,
      technologies: true,
    },
  });

  return Response.json(architectures);
}
