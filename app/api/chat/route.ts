import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { trainingData } from '@/lib/training-data'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    // Kiểm tra API key
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: 'OPENAI_API_KEY chưa được cấu hình. Vui lòng thêm vào file .env.local' 
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const { messages } = await req.json()

    // Tạo system prompt với training data
    const systemPrompt = `Bạn là một trợ lý AI chuyên về Kinh Tế Chính Trị Mác-Lênin, đặc biệt về mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam.

Nhiệm vụ của bạn:
- Trả lời các câu hỏi về kinh tế chính trị Việt Nam dựa trên kiến thức đã được cung cấp
- Giải thích các khái niệm triết học Mác-Lênin (LLSX, QHSX) một cách dễ hiểu
- Cung cấp dữ liệu và số liệu chính xác về GDP, FDI, xuất nhập khẩu
- Phân tích các giai đoạn phát triển kinh tế Việt Nam từ 1986 đến nay
- Thảo luận về vai trò của thế hệ trẻ trong chuyển đổi số

Kiến thức cơ sở:
${trainingData}

Hướng dẫn trả lời:
- Luôn trả lời bằng tiếng Việt
- Sử dụng ngôn ngữ chuyên môn nhưng dễ hiểu
- Cung cấp số liệu cụ thể khi có thể
- Giải thích rõ ràng các khái niệm triết học
- Nếu không chắc chắn, hãy nói rõ và đề xuất tìm hiểu thêm
- Giữ thái độ tôn trọng và khách quan`

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: messages,
      temperature: 0.7,
      maxTokens: 2000,
    })

    return result.toDataStreamResponse()
  } catch (error: any) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Đã xảy ra lỗi khi xử lý yêu cầu' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

