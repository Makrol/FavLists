import { neon } from "@neondatabase/serverless";

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return Response.json(
      { error: "Database is not configured" },
      { status: 500 }
    );
  }

  try {
    const sql = neon(databaseUrl);
    const result = await sql`SELECT NOW() AS server_time`;

    return Response.json({
      message: "Database connection works!",
      serverTime: result[0].server_time
    });
  } catch {
    return Response.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}