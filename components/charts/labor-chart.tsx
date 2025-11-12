"use client"

import { Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { motion } from "framer-motion"

export function LaborChart() {
  const data2019 = [
    { name: "Nông nghiệp", value: 34.7, fill: "#10b981" },
    { name: "Công nghiệp", value: 29.4, fill: "#3b82f6" },
    { name: "Dịch vụ", value: 35.9, fill: "#f59e0b" },
  ]

  const data2024 = [
    { name: "Nông nghiệp", value: 26.5, fill: "#10b981" },
    { name: "Công nghiệp", value: 33.4, fill: "#3b82f6" },
    { name: "Dịch vụ", value: 40.1, fill: "#f59e0b" },
  ]

  const comparisonData = [
    { sector: "Nông nghiệp", "2019": 34.7, "2024": 26.5 },
    { sector: "Công nghiệp", "2019": 29.4, "2024": 33.4 },
    { sector: "Dịch vụ", "2019": 35.9, "2024": 40.1 },
  ]

  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      className="space-y-8"
      variants={chartVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 md:p-8"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-bold text-(--color-text) mb-6">
          👥 Sự Chuyển Dịch Cơ Cấu Lao Động (2019-2024)
        </h3>
        <p className="text-(--color-text-muted) mb-8">
          Chỉ trong 5 năm, tỷ trọng lao động Nông nghiệp giảm mạnh (34.7% → 26.5%), trong khi Công nghiệp và Dịch vụ
          tăng. Hàng triệu người di chuyển từ đồng ruộng vào các nhà máy và khu đô thị - đây là sự thay đổi về lực lượng
          sản xuất trong thực tiễn.
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="sector" stroke="var(--color-text-dimmed)" />
            <YAxis stroke="var(--color-text-dimmed)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface-light)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                color: "var(--color-text)",
              }}
            />
            <Legend wrapperStyle={{ color: "var(--color-text)" }} />
            <Bar dataKey="2019" fill="var(--color-accent)" />
            <Bar dataKey="2024" fill="var(--color-warmth)" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}
