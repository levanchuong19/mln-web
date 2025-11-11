"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"
import { ChartUpIcon } from "../icons"

export function GDPChart() {
  const data = [
    { year: "1986", gdp: 12, growth: 2.8 },
    { year: "1995", gdp: 20.74, growth: 9.5 },
    { year: "2000", gdp: 31.17, growth: 6.8 },
    { year: "2007", gdp: 77.41, growth: 7.1 },
    { year: "2015", gdp: 193.24, growth: 6.7 },
    { year: "2020", gdp: 346.61, growth: 2.9 },
    { year: "2023", gdp: 433.7, growth: 5.05 },
    { year: "2024", gdp: 476.39, growth: 7.1 },
  ]

  return (
    <motion.div
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent)] transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ChartUpIcon size={28} />
        Hành Trình GDP Việt Nam (1986-2024)
      </motion.h3>
      <p className="text-[var(--color-text-muted)] mb-6">
        Từ ~12 tỷ USD (1986) lên 476.39 tỷ USD (2024) - tăng hơn 30 lần trong 38 năm. Đường dốc gần như thẳng đứng từ
        cuối những năm 1990 là minh chứng rõ ràng của tác động Đổi Mới.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="year" stroke="var(--color-text-dimmed)" />
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
          <Line
            type="monotone"
            dataKey="gdp"
            stroke="var(--color-accent)"
            strokeWidth={3}
            dot={{ fill: "var(--color-accent)", r: 5 }}
            activeDot={{ r: 7 }}
            name="GDP (Tỷ USD)"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
