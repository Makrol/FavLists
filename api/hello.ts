
export async function GET() {
  return Response.json({
    message: "Hello from FavLists API!",
    status: "OK",
    timestamp: new Date().toISOString()
  });
}