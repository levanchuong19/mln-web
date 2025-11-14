"use client"

import { useState } from "react"
import GameBoard from "./game-board"
import GameResults from "./game-results"

export interface GameState {
  year: number
  gdp: number
  population: number
  resources: number
  satisfaction: number
  industrialization: number
  technology: number
  foreign_investment: number
  corruption: number
  decision_count: number
}

export default function GameContainer({ onClose }: { onClose: () => void }) {
  const [gameState, setGameState] = useState<GameState>({
    year: 2000,   // ⭐ Bắt đầu từ năm 2000
    gdp: 100,
    population: 60,
    resources: 50,
    satisfaction: 40,
    industrialization: 20,
    technology: 10,
    foreign_investment: 0,
    corruption: 50,
    decision_count: 0,
  })

  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const makeDecision = (decisionType: string) => {
    const newState = { ...gameState }

    switch (decisionType) {
      case "market_reform":
        newState.gdp += 20
        newState.industrialization += 15
        newState.satisfaction -= 10
        newState.corruption += 5
        break

      case "foreign_trade":
        newState.gdp += 15
        newState.foreign_investment += 20
        newState.technology += 10
        newState.resources -= 10
        break

      case "tech_investment":
        newState.technology += 25
        newState.gdp += 10
        newState.resources -= 15
        newState.industrialization += 10
        break

      case "social_welfare":
        newState.satisfaction += 20
        newState.gdp -= 5
        newState.resources -= 10
        newState.corruption -= 10
        break

      case "anti_corruption":
        newState.corruption -= 20
        newState.gdp -= 8
        newState.satisfaction += 10
        break

      case "education":
        newState.technology += 15
        newState.satisfaction += 15
        newState.gdp += 5
        newState.resources -= 12
        break
    }

    newState.year += 1
    newState.decision_count += 1

    // Clamp 0–100
    Object.keys(newState).forEach((key) => {
      if (key !== "year" && key !== "decision_count") {
        newState[key as keyof typeof newState] = Math.max(
          0,
          Math.min(100, newState[key as keyof typeof newState])
        )
      }
    })

    setGameState(newState)

    // ⭐ Kết thúc khi vượt quá năm 2024 → dừng tại năm 2025
    if (newState.year > 2024) {
      calculateScore(newState)
      setGameOver(true)
    }
  }

  const calculateScore = (finalState: GameState) => {
    const weights = {
      gdp: 0.3,
      technology: 0.2,
      industrialization: 0.2,
      satisfaction: 0.15,
      corruption: -0.1,
      foreign_investment: 0.05,
    }

    let totalScore = 0
    totalScore += finalState.gdp * weights.gdp
    totalScore += finalState.technology * weights.technology
    totalScore += finalState.industrialization * weights.industrialization
    totalScore += finalState.satisfaction * weights.satisfaction
    totalScore += (100 - finalState.corruption) * weights.corruption
    totalScore += finalState.foreign_investment * weights.foreign_investment

    setScore(Math.round(totalScore))
  }

  return (
    <div className="space-y-6">
      {!gameOver ? (
        <GameBoard gameState={gameState} onDecision={makeDecision} />
      ) : (
        <GameResults gameState={gameState} score={score} onClose={onClose} />
      )}
    </div>
  )
}
