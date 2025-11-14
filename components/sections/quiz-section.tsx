"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { quizSets, type QuizSet } from "@/lib/quiz-data"
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Trophy, BookOpen } from "lucide-react"

export function QuizSection() {
  const [selectedSet, setSelectedSet] = useState<QuizSet | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelectSet = (set: QuizSet) => {
    setSelectedSet(set)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
  }

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    if (showResults) return
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNext = () => {
    if (selectedSet && currentQuestionIndex < selectedSet.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    if (!selectedSet) return { correct: 0, total: 0, percentage: 0 }
    let correct = 0
    selectedSet.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    const total = selectedSet.questions.length
    const percentage = Math.round((correct / total) * 100)
    return { correct, total, percentage }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "dễ":
        return "from-green-500 to-emerald-400"
      case "trung bình":
        return "from-blue-500 to-cyan-400"
      case "khó":
        return "from-orange-500 to-amber-400"
      case "rất khó":
        return "from-red-500 to-rose-400"
      case "cực khó":
        return "from-purple-500 to-pink-400"
      case "chuyên sâu":
        return "from-indigo-600 to-purple-600"
      default:
        return "from-gray-500 to-gray-400"
    }
  }

  return (
    <section
      id="quiz"
      className="relative py-20 px-4"
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-[url('/marx.jpg')] bg-cover bg-center bg-no-repeat
        "
      ></div>

      {/* Light overlay + blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* If no set selected → show list */}
        {!selectedSet && (
          <>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-(--color-accent) via-(--color-warmth) to-(--color-accent-light) bg-clip-text text-transparent">
                  Câu Hỏi Trắc Nghiệm
                </span>
              </h2>
              <p className="text-(--color-text-muted) text-lg">
                Kiểm tra kiến thức của bạn về Kinh Tế Chính Trị Mác-Lênin
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizSets.map((set, index) => (
                <motion.div
                  key={set.id}
                  className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 hover:border-(--color-accent) transition-all cursor-pointer group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => handleSelectSet(set)}
                >
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${getDifficultyColor(set.difficulty)} flex items-center justify-center mb-4`}>
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-(--color-text) mb-2">{set.title}</h3>
                  <p className="text-sm text-(--color-text-muted) mb-4">
                    Mức độ: <span className="font-semibold text-(--color-accent)">{set.difficulty}</span>
                  </p>
                  <p className="text-sm text-(--color-text-dimmed) mb-4">
                    {set.questions.length} câu hỏi
                  </p>
                  <div className="flex items-center text-(--color-accent) group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-semibold">Bắt đầu làm bài</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* If a set is selected → quiz UI */}
        {selectedSet && <QuizContent
          selectedSet={selectedSet}
          currentQuestionIndex={currentQuestionIndex}
          setSelectedSet={setSelectedSet}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
          handleAnswerSelect={handleAnswerSelect}
          showResults={showResults}
          selectedAnswers={selectedAnswers}
          calculateScore={calculateScore}
        />}
      </div>
    </section>
  )
}

function QuizContent({
  selectedSet,
  currentQuestionIndex,
  setSelectedSet,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
  handlePrevious,
  handleNext,
  handleSubmit,
  calculateScore
}: any) {
  
  const currentQuestion = selectedSet.questions[currentQuestionIndex]
  const isAnswered = selectedAnswers[currentQuestion.id] !== undefined
  const isCorrect = selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
  const score = calculateScore()

  return (
    <div className="max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => setSelectedSet(null)}
          className="text-(--color-accent) hover:text-(--color-accent-light) mb-4 flex items-center gap-2 mx-auto"
        >
          <ChevronLeft size={20} />
          <span>Quay lại danh sách</span>
        </button>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedSet.title}</h2>
        <p className="text-(--color-text-muted)">
          Câu {currentQuestionIndex + 1} / {selectedSet.questions.length}
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-2 bg-(--color-surface-light) rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-(--color-accent) to-(--color-warmth)"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / selectedSet.questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 md:p-8 mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-(--color-text) mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option: string, index: number) => {
              const isSelected = selectedAnswers[currentQuestion.id] === index
              const showCorrect = showResults && index === currentQuestion.correctAnswer
              const showIncorrect = showResults && isSelected && index !== currentQuestion.correctAnswer

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                  disabled={showResults}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                      ? "border-red-500 bg-red-500/10"
                      : isSelected
                      ? "border-(--color-accent) bg-accent/10"
                      : "border-(--color-border) hover:border-accent/50"
                  } ${showResults ? "cursor-default" : "cursor-pointer"}`}
                  whileHover={!showResults ? { scale: 1.02 } : {}}
                  whileTap={!showResults ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showCorrect
                          ? "border-green-500 bg-green-500"
                          : showIncorrect
                          ? "border-red-500 bg-red-500"
                          : isSelected
                          ? "border-(--color-accent) bg-(--color-accent)"
                          : "border-(--color-border)"
                      }`}
                    >
                      {showCorrect && <CheckCircle2 size={16} className="text-white" />}
                      {showIncorrect && <XCircle size={16} className="text-white" />}
                      {!showResults && isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-(--color-text) flex-1">{option}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          {showResults && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-4 bg-(--color-surface-light) border border-(--color-border) rounded-lg"
            >
              <p className="text-(--color-text-muted) text-sm">
                <span className="font-semibold text-(--color-accent)">Giải thích:</span>{" "}
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        <motion.button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 bg-(--color-surface) border border-(--color-border) rounded-lg text-(--color-text) disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          <span>Câu trước</span>
        </motion.button>

        {currentQuestionIndex === selectedSet.questions.length - 1 ? (
          <motion.button
            onClick={handleSubmit}
            disabled={!isAnswered || showResults}
            className="px-6 py-3 bg-linear-to-r from-(--color-accent) to-(--color-warmth) text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy size={20} />
            <span>Nộp bài</span>
          </motion.button>
        ) : (
          <motion.button
            onClick={handleNext}
            disabled={!isAnswered}
            className="px-6 py-3 bg-(--color-accent) text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Câu sau</span>
            <ChevronRight size={20} />
          </motion.button>
        )}
      </div>

      {/* Results */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-linear-to-br from-(--color-surface) to-(--color-surface-light) border border-(--color-border) rounded-xl p-8 text-center backdrop-blur-sm"
        >
          <Trophy className="mx-auto mb-4 text-(--color-warmth)" size={48} />
          <h3 className="text-2xl font-bold text-(--color-text) mb-4">Kết Quả</h3>
          <div className="text-4xl font-bold mb-2">
            <span className="bg-linear-to-r from-(--color-accent) to-(--color-warmth) bg-clip-text text-transparent">
              {score.percentage}%
            </span>
          </div>
          <p className="text-(--color-text-muted) mb-6">
            Bạn đã trả lời đúng {score.correct} / {score.total} câu hỏi
          </p>
          <motion.button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-(--color-accent) text-white rounded-lg font-semibold hover:bg-(--color-accent-light)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Làm lại bài khác
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
