import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Demo User ──────────────────────────────────
  const hashedPassword = await bcrypt.hash("demo1234", 10);
  const user = await prisma.user.upsert({
    where: { email: "demo@arcai.dev" },
    update: {},
    create: {
      email: "demo@arcai.dev",
      name: "Demo User",
      hashedPassword,
      role: "free",
      xp: 12450,
      streak: 14,
    },
  });
  console.log(`  ✓ User: ${user.email}`);

  // ── Courses ────────────────────────────────────
  const coursesData = [
    {
      slug: "fundamentals",
      title: "Fundamentals",
      description:
        "Learn the core principles of system design, scalability, and distributed systems architecture.",
      icon: "account_tree",
      level: "Beginner",
      color: "primary",
      sortOrder: 1,
      conceptCount: 24,
      durationMinutes: 180,
    },
    {
      slug: "pm-track",
      title: "PM Track",
      description:
        "Master technical product management, translating business needs into architectural decisions.",
      icon: "dashboard",
      level: "Intermediate",
      color: "secondary",
      sortOrder: 2,
      conceptCount: 18,
      durationMinutes: 240,
    },
    {
      slug: "startup-founder",
      title: "Startup Founder",
      description:
        "Design pragmatic, cost-effective architectures for early-stage products that scale as you grow.",
      icon: "rocket_launch",
      level: "Advanced",
      color: "tertiary",
      sortOrder: 3,
      conceptCount: 22,
      durationMinutes: 300,
    },
    {
      slug: "interview-prep",
      title: "Interview Prep",
      description:
        "Crack the system design interview with mock sessions, patterns, and framework strategies.",
      icon: "psychology",
      level: "All Levels",
      color: "primary",
      sortOrder: 4,
      conceptCount: 30,
      durationMinutes: 360,
    },
  ];

  for (const data of coursesData) {
    const course = await prisma.course.upsert({
      where: { slug: data.slug },
      update: data,
      create: data,
    });
    console.log(`  ✓ Course: ${course.title}`);

    // Create sample modules for each course
    const moduleNames = getModulesForCourse(data.slug);
    for (let i = 0; i < moduleNames.length; i++) {
      await prisma.module.upsert({
        where: {
          courseId_slug: { courseId: course.id, slug: moduleNames[i].slug },
        },
        update: {},
        create: {
          courseId: course.id,
          slug: moduleNames[i].slug,
          title: moduleNames[i].title,
          description: moduleNames[i].description,
          sortOrder: i,
          durationMinutes: moduleNames[i].duration,
          conceptCount: moduleNames[i].concepts,
        },
      });
    }
  }

  // ── Create demo progress ───────────────────────
  const fundamentalsCourse = await prisma.course.findUnique({
    where: { slug: "fundamentals" },
  });
  const pmCourse = await prisma.course.findUnique({
    where: { slug: "pm-track" },
  });
  const startupCourse = await prisma.course.findUnique({
    where: { slug: "startup-founder" },
  });

  if (fundamentalsCourse) {
    await prisma.userCourseProgress.upsert({
      where: {
        userId_courseId: { userId: user.id, courseId: fundamentalsCourse.id },
      },
      update: { progressPercent: 100 },
      create: {
        userId: user.id,
        courseId: fundamentalsCourse.id,
        progressPercent: 100,
        completedAt: new Date(),
      },
    });
  }
  if (pmCourse) {
    await prisma.userCourseProgress.upsert({
      where: {
        userId_courseId: { userId: user.id, courseId: pmCourse.id },
      },
      update: { progressPercent: 45 },
      create: {
        userId: user.id,
        courseId: pmCourse.id,
        progressPercent: 45,
      },
    });
  }
  if (startupCourse) {
    await prisma.userCourseProgress.upsert({
      where: {
        userId_courseId: { userId: user.id, courseId: startupCourse.id },
      },
      update: { progressPercent: 12 },
      create: {
        userId: user.id,
        courseId: startupCourse.id,
        progressPercent: 12,
      },
    });
  }

  // ── Architectures ──────────────────────────────
  const architecturesData = [
    {
      slug: "netflix-cdn",
      name: "Netflix Open Connect",
      description:
        "Global content delivery network architecture optimized for streaming video at scale.",
      pattern: "CDN / Edge Computing",
      icon: "dns",
      technologies: ["FreeBSD", "NGINX", "BGP"],
      nodes: [
        {
          type: "gateway",
          label: "Edge Server",
          icon: "dns",
          positionX: 80,
          positionY: 100,
        },
        {
          type: "service",
          label: "Steering Service",
          icon: "deployed_code",
          positionX: 350,
          positionY: 100,
        },
        {
          type: "cache",
          label: "CDN Cache",
          icon: "memory",
          positionX: 350,
          positionY: 280,
        },
        {
          type: "database",
          label: "Origin Storage",
          icon: "database",
          positionX: 620,
          positionY: 180,
        },
      ],
      connections: [
        { sourceIdx: 0, targetIdx: 1, animated: true },
        { sourceIdx: 1, targetIdx: 2, animated: true },
        { sourceIdx: 2, targetIdx: 3, animated: true },
      ],
    },
    {
      slug: "twitter-snowflake",
      name: "Twitter Snowflake",
      description:
        "Highly available, distributed unique ID generation service.",
      pattern: "Distributed Systems",
      icon: "ac_unit",
      technologies: ["Scala", "ZooKeeper", "Thrift"],
      nodes: [
        {
          type: "gateway",
          label: "API Gateway",
          icon: "router",
          positionX: 80,
          positionY: 150,
        },
        {
          type: "service",
          label: "ID Generator",
          icon: "deployed_code",
          positionX: 350,
          positionY: 100,
        },
        {
          type: "service",
          label: "ZK Coordinator",
          icon: "deployed_code",
          positionX: 350,
          positionY: 280,
        },
        {
          type: "database",
          label: "Worker Registry",
          icon: "database",
          positionX: 620,
          positionY: 180,
        },
      ],
      connections: [
        { sourceIdx: 0, targetIdx: 1, animated: true },
        { sourceIdx: 1, targetIdx: 2, animated: true },
        { sourceIdx: 2, targetIdx: 3, animated: true },
      ],
    },
    {
      slug: "uber-dispatch",
      name: "Uber Dispatch",
      description:
        "Real-time dispatch system matching drivers with riders using geospatial querying.",
      pattern: "Real-time / Geospatial",
      icon: "local_taxi",
      technologies: ["Go", "Node.js", "Redis", "Cassandra"],
      nodes: [
        {
          type: "gateway",
          label: "Mobile Gateway",
          icon: "router",
          positionX: 80,
          positionY: 150,
        },
        {
          type: "service",
          label: "Dispatch Engine",
          icon: "deployed_code",
          positionX: 350,
          positionY: 100,
        },
        {
          type: "cache",
          label: "Geospatial Index",
          icon: "memory",
          positionX: 350,
          positionY: 280,
        },
        {
          type: "database",
          label: "Trip Store",
          icon: "database",
          positionX: 620,
          positionY: 100,
        },
        {
          type: "queue",
          label: "Event Stream",
          icon: "queue",
          positionX: 620,
          positionY: 280,
        },
      ],
      connections: [
        { sourceIdx: 0, targetIdx: 1, animated: true },
        { sourceIdx: 1, targetIdx: 2, animated: true },
        { sourceIdx: 1, targetIdx: 3, animated: true },
        { sourceIdx: 1, targetIdx: 4, animated: true },
      ],
    },
    {
      slug: "whatsapp-messaging",
      name: "WhatsApp Messaging",
      description:
        "High-throughput, low-latency messaging architecture handling billions of messages.",
      pattern: "Message Broker",
      icon: "chat",
      technologies: ["Erlang", "FreeBSD", "Mnesia"],
      nodes: [
        {
          type: "gateway",
          label: "Connection Handler",
          icon: "router",
          positionX: 80,
          positionY: 150,
        },
        {
          type: "service",
          label: "Message Router",
          icon: "deployed_code",
          positionX: 350,
          positionY: 100,
        },
        {
          type: "queue",
          label: "Offline Queue",
          icon: "queue",
          positionX: 350,
          positionY: 280,
        },
        {
          type: "database",
          label: "Mnesia Store",
          icon: "database",
          positionX: 620,
          positionY: 180,
        },
      ],
      connections: [
        { sourceIdx: 0, targetIdx: 1, animated: true },
        { sourceIdx: 1, targetIdx: 2, animated: true },
        { sourceIdx: 1, targetIdx: 3, animated: true },
        { sourceIdx: 2, targetIdx: 3, animated: true },
      ],
    },
  ];

  for (const archData of architecturesData) {
    const arch = await prisma.architecture.upsert({
      where: { slug: archData.slug },
      update: {
        name: archData.name,
        description: archData.description,
        pattern: archData.pattern,
        icon: archData.icon,
        technologies: archData.technologies,
      },
      create: {
        slug: archData.slug,
        name: archData.name,
        description: archData.description,
        pattern: archData.pattern,
        icon: archData.icon,
        technologies: archData.technologies,
      },
    });

    // Delete old nodes & connections then recreate
    await prisma.architectureConnection.deleteMany({
      where: { architectureId: arch.id },
    });
    await prisma.architectureNode.deleteMany({
      where: { architectureId: arch.id },
    });

    const createdNodes = [];
    for (const node of archData.nodes) {
      const n = await prisma.architectureNode.create({
        data: {
          architectureId: arch.id,
          type: node.type,
          label: node.label,
          icon: node.icon,
          positionX: node.positionX,
          positionY: node.positionY,
        },
      });
      createdNodes.push(n);
    }

    for (const conn of archData.connections) {
      await prisma.architectureConnection.create({
        data: {
          architectureId: arch.id,
          sourceNodeId: createdNodes[conn.sourceIdx].id,
          targetNodeId: createdNodes[conn.targetIdx].id,
          animated: conn.animated,
        },
      });
    }

    console.log(`  ✓ Architecture: ${arch.name}`);
  }

  console.log("\n✅ Seed complete!");
}

// ── Module definitions per course ────────────────
function getModulesForCourse(
  slug: string
): {
  slug: string;
  title: string;
  description: string;
  duration: number;
  concepts: number;
}[] {
  const modules: Record<
    string,
    {
      slug: string;
      title: string;
      description: string;
      duration: number;
      concepts: number;
    }[]
  > = {
    fundamentals: [
      {
        slug: "client-server",
        title: "Client-Server Model",
        description: "Understand the basics of how clients talk to servers.",
        duration: 15,
        concepts: 3,
      },
      {
        slug: "networking",
        title: "Networking Basics",
        description: "DNS, TCP/IP, HTTP, and how data travels the internet.",
        duration: 20,
        concepts: 4,
      },
      {
        slug: "databases-intro",
        title: "Database Fundamentals",
        description: "SQL vs NoSQL, ACID properties, and when to use what.",
        duration: 25,
        concepts: 5,
      },
      {
        slug: "caching",
        title: "Caching Strategies",
        description:
          "Read-through, write-through, TTL, and cache invalidation.",
        duration: 20,
        concepts: 4,
      },
      {
        slug: "load-balancing",
        title: "Load Balancing",
        description:
          "Round-robin, consistent hashing, and health checks.",
        duration: 20,
        concepts: 4,
      },
      {
        slug: "scaling",
        title: "Horizontal vs Vertical Scaling",
        description:
          "When to scale up vs scale out, and the trade-offs of each.",
        duration: 15,
        concepts: 4,
      },
    ],
    "pm-track": [
      {
        slug: "tech-requirements",
        title: "Translating Business to Tech",
        description:
          "How to write technical requirements that engineers love.",
        duration: 30,
        concepts: 3,
      },
      {
        slug: "capacity-planning",
        title: "Capacity Planning",
        description:
          "Estimating traffic, storage, and compute needs for a product.",
        duration: 25,
        concepts: 3,
      },
      {
        slug: "trade-off-analysis",
        title: "Trade-off Analysis",
        description:
          "Consistency vs availability, latency vs cost, build vs buy.",
        duration: 30,
        concepts: 4,
      },
      {
        slug: "api-design",
        title: "API Design for PMs",
        description:
          "REST, GraphQL, and how API design impacts product velocity.",
        duration: 25,
        concepts: 4,
      },
      {
        slug: "observability",
        title: "Monitoring & Observability",
        description:
          "SLIs, SLOs, SLAs — what PMs need to know about system health.",
        duration: 20,
        concepts: 4,
      },
    ],
    "startup-founder": [
      {
        slug: "mvp-architecture",
        title: "MVP Architecture",
        description:
          "The simplest architecture that can work — monolith first.",
        duration: 25,
        concepts: 4,
      },
      {
        slug: "cost-optimization",
        title: "Cost Optimization",
        description:
          "Serverless, managed services, and keeping your AWS bill sane.",
        duration: 30,
        concepts: 5,
      },
      {
        slug: "scaling-signals",
        title: "When to Scale",
        description:
          "Recognizing bottlenecks before they become outages.",
        duration: 25,
        concepts: 4,
      },
      {
        slug: "breaking-monolith",
        title: "Breaking the Monolith",
        description:
          "When and how to extract microservices from your monolith.",
        duration: 35,
        concepts: 5,
      },
      {
        slug: "data-pipeline",
        title: "Data Pipelines",
        description:
          "Event-driven architecture, streaming, and analytics at scale.",
        duration: 30,
        concepts: 4,
      },
    ],
    "interview-prep": [
      {
        slug: "framework",
        title: "The RESHADED Framework",
        description:
          "A systematic approach to system design interview questions.",
        duration: 20,
        concepts: 5,
      },
      {
        slug: "url-shortener",
        title: "Design: URL Shortener",
        description:
          "A classic warm-up problem covering hashing and databases.",
        duration: 30,
        concepts: 4,
      },
      {
        slug: "chat-system",
        title: "Design: Chat System",
        description:
          "WebSockets, presence, message ordering, and delivery guarantees.",
        duration: 40,
        concepts: 6,
      },
      {
        slug: "news-feed",
        title: "Design: News Feed",
        description:
          "Fan-out, ranking algorithms, and content delivery.",
        duration: 35,
        concepts: 5,
      },
      {
        slug: "rate-limiter",
        title: "Design: Rate Limiter",
        description:
          "Token bucket, sliding window, and distributed rate limiting.",
        duration: 30,
        concepts: 5,
      },
      {
        slug: "mock-interview",
        title: "Mock Interview Session",
        description:
          "Practice with AI-powered mock interviews and feedback.",
        duration: 45,
        concepts: 5,
      },
    ],
  };

  return modules[slug] || [];
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
