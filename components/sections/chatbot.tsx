"use client"

import { useChat } from "@ai-sdk/react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2, BotIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Chatbot() {
  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",
  })

  const [inputValue, setInputValue] = useState("")
  const [open, setOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    await sendMessage({ text: inputValue })
    setInputValue("")
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-(--color-accent) text-white p-4 rounded-full shadow-lg hover:bg-(--color-accent-light) transition-all z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <BotIcon size={26} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-(--color-surface) border border-(--color-border) rounded-2xl w-[95%] max-w-lg h-[80vh] flex flex-col shadow-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-(--color-border) bg-(--color-surface-light)">
                <div className="flex items-center gap-2">
                  <Bot className="text-(--color-accent)" />
                  <h2 className="font-bold text-lg text-(--color-text)">AI Chatbot</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-(--color-text-muted) hover:text-(--color-accent) text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-(--color-surface)">
                {messages.length === 0 && (
                  <div className="text-center text-(--color-text-muted) py-12">
                    <Bot size={40} className="mx-auto mb-4 text-(--color-accent)" />
                    <p className="text-base font-semibold mb-1">Xin chào 👋</p>
                    <p className="text-sm text-(--color-text-dimmed)">
                      Hãy đặt câu hỏi về Kinh tế chính trị Mác-Lênin, Đổi mới, GDP, v.v.
                    </p>
                  </div>
                )}

                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {message.role === "assistant" && (
                      <Bot className="text-(--color-accent) mt-1" size={18} />
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg p-3 text-sm ${
                        message.role === "user"
                          ? "bg-(--color-accent) text-white"
                          : "bg-(--color-surface-light) text-(--color-text) border border-(--color-border)"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <User className="text-(--color-accent) mt-1" size={18} />
                    )}
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-(--color-accent) text-sm">
                    <Loader2 className="animate-spin" size={16} /> Đang suy nghĩ...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={onSubmit}
                className="border-t border-(--color-border) p-4 flex gap-2 bg-(--color-surface-light)"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1 px-3 py-2 bg-(--color-surface) border border-(--color-border) rounded-lg text-(--color-text) placeholder-(--color-text-dimmed) focus:outline-none focus:border-(--color-accent) text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-2 bg-(--color-accent) text-white rounded-lg flex items-center justify-center hover:bg-(--color-accent-light) transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
