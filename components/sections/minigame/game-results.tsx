"use client"

import type { GameState } from "./game-container"

export default function GameResults({
  gameState,
  score,
  onClose,
}: {
  gameState: GameState
  score: number
  onClose: () => void
}) {
  const getGrade = (score: number) => {
    if (score >= 80) return { grade: "A+", title: "Kinh Tế Gia Vô Danh", color: "text-green-400" }
    if (score >= 70) return { grade: "A", title: "Kinh Tế Gia Xuất Sắc", color: "text-green-400" }
    if (score >= 60) return { grade: "B", title: "Kinh Tế Gia Tốt", color: "text-blue-400" }
    if (score >= 50) return { grade: "C", title: "Kinh Tế Gia Trung Bình", color: "text-yellow-400" }
    return { grade: "D", title: "Cần Cải Thiện", color: "text-red-400" }
  }

  const result = getGrade(score)

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="p-8 rounded-xl border border-border bg-surface/80 backdrop-blur-md shadow-md text-center space-y-6">
        <h3 className="text-3xl font-bold">🎉 Trò Chơi Kết Thúc</h3>

        <div className={`text-6xl font-bold ${result.color}`}>{result.grade}</div>

        <div>
          <p className="text-2xl font-bold text-blue-400 mb-2">{result.title}</p>
          <p className="text-4xl font-bold text-teal-500">{score} điểm</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-border">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">GDP</p>
            <p className="text-lg font-bold text-(--color-text)">{gameState.gdp}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Công Nghệ</p>
            <p className="text-lg font-bold text-(--color-text)">{gameState.technology}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Công Nghiệp</p>
            <p className="text-lg font-bold text-(--color-text)">{gameState.industrialization}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Hài Lòng</p>
            <p className="text-lg font-bold text-(--color-text)">{gameState.satisfaction}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Đầu Tư QN</p>
            <p className="text-lg font-bold text-(--color-text)">{gameState.foreign_investment}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Tham Nhũng</p>
            <p className="text-lg font-bold text-(--color-text)">{100 - gameState.corruption}%</p>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-3 pt-6 border-t border-border text-left">
          <p className="font-bold text-(--color-text)">💡 Bài Học:</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex gap-2">
              <span>•</span>
              <span className="text-(--color-text-muted)">Cân bằng giữa tăng trưởng kinh tế và bền vững xã hội là kỳ khó</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span className="text-(--color-text-muted)">Đầu tư công nghệ có tác động dài hạn mạnh mẽ</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span className="text-(--color-text-muted)">Chống tham nhũng cần chi phí nhưng lợi ích dài hạn lớn</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors"
          >
            Chơi Lại
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-card border border-primary text-primary font-bold py-3 rounded-lg transition-colors"
          >
            Về Trang Chủ
          </button>
        </div>
      </div>

      {/* Dialectical Learning */}
      <div className="p-6 rounded-xl border bg-surface/80 backdrop-blur-md shadow-md space-y-4">
        <h4 className="font-bold text-accent">🎓 Quy Luật Vận Động Biện Chứng</h4>
        <div className="space-y-3 text-sm text-(--color-text-muted)">
          <p>
            <span className="font-semibold text-(--color-text)">Mâu Thuẫn Tích Lũy:</span> <span className="text-gray-400">Các quyết định kinh tế tạo ra mâu
            thuẫn giữa phát triển và ổn định, lợi ích cá nhân và tập thể.</span>
          </p>
          <p>
            <span className="font-semibold text-(--color-text)">Chất Lượng Chuyển Biến:</span> <span className="text-gray-400">Khi một yếu tố (GDP, công
            nghệ) vượt ngưỡng, nó tạo ra sự biến đổi định tính trong nền kinh tế.</span>
          </p>
          <p>
            <span className="font-semibold text-(--color-text)">Phủ Định Phủ Định:</span> <span className="text-gray-400">Các cải cách tạo ra những vấn đề
            mới, cần những giải pháp ở cấp độ cao hơn.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
