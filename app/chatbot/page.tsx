"use client"

import { useChat } from "@ai-sdk/react"
import { motion } from "framer-motion"
import { Send, Bot, User, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"

export default function ChatbotPage() {
  const { messages, input = "", handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsTyping(true)
    await handleSubmit(e)
    setTimeout(() => setIsTyping(false), 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-secondary)]">
      <Navbar />
      <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-warmth)] bg-clip-text text-transparent">
              AI Chatbot
            </span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg">
            Trợ lý AI chuyên về Kinh Tế Chính Trị Mác-Lênin
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 backdrop-blur-sm glass h-[600px] flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
            {messages.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Bot className="mx-auto mb-4 text-[var(--color-accent)]" size={48} />
                <p className="text-[var(--color-text-muted)] text-lg mb-2">
                  Chào mừng bạn đến với AI Chatbot!
                </p>
                <p className="text-[var(--color-text-dimmed)] text-sm">
                  Hãy đặt câu hỏi về Kinh Tế Chính Trị Mác-Lênin, mô hình kinh tế Việt Nam,
                  <br />
                  hoặc bất kỳ chủ đề nào liên quan.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-[var(--color-text-muted)] text-sm font-semibold mb-3">
                    Câu hỏi gợi ý:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "Đổi Mới 1986 là gì?",
                      "LLSX và QHSX là gì?",
                      "GDP Việt Nam 2024?",
                      "Vai trò của thế hệ trẻ?",
                    ].map((suggestion, idx) => (
                      <motion.button
                        key={idx}
                        className="px-4 py-2 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
                        onClick={() => {
                          handleInputChange({
                            target: { value: suggestion },
                          } as any)
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <Bot size={18} className="text-[var(--color-accent)]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === "user"
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-text)]"
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
                {message.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <User size={18} className="text-[var(--color-accent)]" />
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                className="flex gap-3 justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                  <Bot size={18} className="text-[var(--color-accent)]" />
                </div>
                <div className="bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin text-[var(--color-accent)]" size={16} />
                    <span className="text-[var(--color-text-muted)] text-sm">
                      Đang suy nghĩ...
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={onSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 px-4 py-3 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder-[var(--color-text-dimmed)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
              disabled={isLoading}
            />
            <motion.button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent-light)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Info Footer */}
        <motion.div
          className="mt-6 text-center text-sm text-[var(--color-text-dimmed)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Chatbot được xây dựng với OpenAI GPT-4o-mini
            <br />
            Dữ liệu training dựa trên nội dung Kinh Tế Chính Trị Mác-Lênin
          </p>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

