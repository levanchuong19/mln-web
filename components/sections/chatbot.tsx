"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- GỢI Ý CÂU HỎI MẪU ---
  const sampleQuestions = [
    "Kinh tế thị trường định hướng XHCN là gì?",
    "GDP được tính như thế nào?",
    "Vai trò của quy luật giá trị trong kinh tế?",
    "Hàng hóa là gì trong kinh tế Mác?",
  ];

  const sendQuestion = async (question: string) => {
    const userMsg = { id: Date.now(), role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      const assistantMsg = {
        id: Date.now() + 1,
        role: "assistant",
        text: data.answer,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, role: "assistant", text: "Lỗi kết nối server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    await sendQuestion(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-xl bg-gray-900/90 text-white border border-gray-700 hover:bg-gray-800 transition-all z-50"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot size={26} />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0f0f10]/90 backdrop-blur-xl border border-gray-800 rounded-3xl w-[95%] max-w-lg h-[75vh] flex flex-col shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500 text-white shadow">
                    <Bot size={20} />
                  </div>
                  <h2 className="font-semibold text-lg text-white">
                    AI Chatbot - Thành viên ảo của nhóm 3
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-400 py-10">
                    <Bot size={38} className="mx-auto mb-3 text-blue-500" />
                    <p className="font-medium text-base">Xin chào 👋</p>
                    <p className="text-sm text-gray-500">
                      Tôi có thể giải thích kinh tế Mác–Lênin, thị trường, GDP...
                    </p>

                    {/* Gợi ý câu hỏi */}
                    <div className="mt-6 space-y-2">
                      {sampleQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => sendQuestion(q)}
                          className="block w-full text-left px-4 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-xl hover:bg-gray-700 transition text-sm"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-end gap-2 ${
                      msg.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <Bot className="text-blue-400" size={18} />
                    )}

                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed
                      ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-none shadow"
                          : "bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.role === "user" && (
                      <User className="text-blue-400" size={18} />
                    )}
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Loader2 className="animate-spin" size={16} />🤖 Cho tôi suy nghĩ tí nhé ...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={onSubmit}
                className="border-t border-gray-800 bg-black/40 backdrop-blur-md p-4 flex gap-2"
              >
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1 px-3 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-xl placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                  disabled={isLoading}
                />

                <motion.button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <Send size={18} />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
