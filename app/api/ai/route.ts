export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const response = await fetch("https://mln222.ftes.cloud/api/ai/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    return Response.json({ answer: data.answer });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ answer: "Lỗi kết nối tới AI server." });
  }
}