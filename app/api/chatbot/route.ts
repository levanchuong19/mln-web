// /app/api/chatbot/route.ts
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  return streamText({
    model: "gpt-4.1-mini",
    messages,
  })
}
