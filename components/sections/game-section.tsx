"use client"

import { useState } from "react"
import GameContainer from "./minigame/game-container"

export default function GameSection() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <section id="minigame" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-linear-to-r from-(--color-accent) via-amber-400 to-(--color-accent-light) bg-clip-text text-transparent">
              Nhà Hoạch Định Kinh Tế Trẻ
            </span>
          </h2>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            Ra quyết định phát triển kinh tế và học được quy luật vận động biện chứng của nền kinh tế
          </p>
        </div>

        {!gameStarted ? (
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-xl border border-(--color-border) bg-surface/80 backdrop-blur-md shadow-md space-y-6 transition-colors">
              <p className="text-center text-(--color-text) leading-relaxed">
                Bạn là một nhà hoạch định kinh tế trẻ tại Việt Nam năm 1986. Bạn cần ra quyết định chiến lược để phát
                triển nền kinh tế quốc gia từ tình trạng khủng hoảng.
              </p>

              <div className="space-y-3 text-sm text-(--color-text-muted)">
                <div className="flex gap-3 items-start">
                  <span className="text-(--color-accent)">✓</span>
                  <span>Quản lý tài nguyên giới hạn một cách hiệu quả</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400">✓</span>
                  <span>Cân bằng giữa tăng trưởng nhanh và phát triển bền vững</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400">✓</span>
                  <span>Thích ứng linh hoạt với thay đổi thị trường quốc tế</span>
                </div>
              </div>

              <button
                onClick={() => setGameStarted(true)}
                className="w-full bg-(--color-accent) hover:bg-(--color-accent-light) text-white font-semibold py-3 rounded-lg shadow transition-all hover:scale-[1.02]"
              >
                Bắt Đầu Trò Chơi
              </button>
            </div>
          </div>
        ) : (
          <GameContainer onClose={() => setGameStarted(false)} />
        )}
      </div>
    </section>
  )
}
