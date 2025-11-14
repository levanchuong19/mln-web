"use client"

import type { GameState } from "./game-container"

interface Decision {
  id: string
  title: string
  description: string
  icon: string
}

const decisions: Decision[] = [
  {
    id: "market_reform",
    title: "Cải Cách Thị Trường",
    description: "Chuyển sang nền kinh tế thị trường. GDP tăng nhưng hài lòng giảm.",
    icon: "📊",
  },
  {
    id: "foreign_trade",
    title: "Mở Cửa Thương Mại",
    description: "Tăng cường xuất nhập khẩu và thu hút đầu tư nước ngoài.",
    icon: "🚢",
  },
  {
    id: "tech_investment",
    title: "Đầu Tư Công Nghệ",
    description: "Phát triển ngành công nghệ cao và nâng cao năng suất.",
    icon: "💻",
  },
  {
    id: "social_welfare",
    title: "Hỗ Trợ Xã Hội",
    description: "Cải thiện chương trình phúc lợi và bảo vệ người lao động.",
    icon: "🤝",
  },
  {
    id: "anti_corruption",
    title: "Chống Tham Nhũng",
    description: "Tăng cường kiểm soát và minh bạch hành chính.",
    icon: "⚖️",
  },
  {
    id: "education",
    title: "Phát Triển Giáo Dục",
    description: "Nâng cao mức độ giáo dục và đào tạo nhân lực.",
    icon: "📚",
  },
]

export default function GameBoard({
  gameState,
  onDecision,
}: {
  gameState: GameState
  onDecision: (decisionType: string) => void
}) {
  const getColor = (value: number) => {
    if (value < 30) return "text-red-400"
    if (value < 60) return "text-yellow-400"
    return "text-green-400"
  }

  const progress = (value: number) => {
    if (value < 30) return "bg-red-500"
    if (value < 60) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="space-y-8">
      {/* Year and Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface/80 backdrop-blur-md shadow-md border border-border">
          <p className="text-sm text-(--color-text)">Năm</p>
          <p className="text-2xl font-bold text-accent">{gameState.year}</p>
        </div>
        <div className="p-4 rounded-lg bg-surface/80 backdrop-blur-md shadow-md border border-border">
          <p className="text-sm text-(--color-text)">Quyết Định</p>
          <p className="text-2xl font-bold text-accent">{gameState.decision_count}/25</p>
        </div>
        <div className="p-4 rounded-lg bg-surface/80 backdrop-blur-md shadow-md border border-border">
          <p className="text-sm text-(--color-text)">Tiến Độ</p>
          <p className="text-2xl font-bold text-accent">{Math.round((gameState.decision_count / 25) * 100)}%</p>
        </div>
        <div className="p-4 rounded-lg bg-surface/80 backdrop-blur-md shadow-md border border-border">
          <p className="text-sm text-(--color-text)">Trạng Thái</p>
          <p className="text-lg font-bold text-accent">Đang Chơi</p>
        </div>
      </div>



      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "GDP", value: gameState.gdp, icon: "💰" },
          { label: "Công Nghệ", value: gameState.technology, icon: "🔬" },
          { label: "Công Nghiệp Hóa", value: gameState.industrialization, icon: "🏭" },
          { label: "Hài Lòng", value: gameState.satisfaction, icon: "😊" },
          { label: "Đầu Tư Nước Ngoài", value: gameState.foreign_investment, icon: "🌍" },
          { label: "Tham Nhũng", value: 100 - gameState.corruption, icon: "🛡️" },
        ].map((metric) => (
          <div key={metric.label} className="p-4 rounded-lg bg-surface/80 backdrop-blur-md shadow-md border border-border space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-(--color-text)">
                {metric.icon} {metric.label}
              </p>
              <p className={`font-bold ${getColor(metric.value)}`}>{metric.value}%</p>
            </div>
            <div className="w-full bg-background rounded-full h-2 overflow-hidden">
              <div
                className={`h-full ${progress(metric.value)} transition-all`}
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Decisions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Chọn Quyết Định</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {decisions.map((decision) => (
            <button
              key={decision.id}
              onClick={() => onDecision(decision.id)}
              className="p-4 rounded-lg border border-border bg-surface/80 backdrop-blur-md shadow-md text-left hover:shadow-lg transition-shadow group"
            >
              <p className="text-2xl mb-2">{decision.icon}</p>
              <h4 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">{decision.title}</h4>
              <p className="text-xs text-(--color-text-muted)">{decision.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
