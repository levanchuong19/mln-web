"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartUpIcon } from "../icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function GDPChart() {
  const [viewMode, setViewMode] = useState<"gdp" | "growth">("gdp")

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

  const isGDP = viewMode === "gdp"
  const dataKey = isGDP ? "gdp" : "growth"
  const yLabel = isGDP ? "GDP (Tỷ USD)" : "Tăng trưởng GDP (%)"
  const color = isGDP ? "var(--color-accent)" : "var(--color-warmth)"

  return (
    <motion.div
      className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 md:p-8 hover:border-(--color-accent) transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Header with dropdown */}
      <div className="flex items-center justify-between mb-6">
        <motion.h3
          className="text-2xl font-bold text-(--color-text) flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ChartUpIcon size={28} />
          Hành Trình GDP Việt Nam (1986–2024)
        </motion.h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="border border-(--color-border) bg-(--color-surface-light) text-(--color-text-dimmed) hover:text-(--color-text) hover:border-(--color-accent) transition-colors rounded-lg"
            >
              {isGDP ? "Hiển thị: GDP (Tỷ USD)" : "Hiển thị: Tăng trưởng GDP (%)"}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="mt-2 w-48 bg-(--color-surface) border border-(--color-border) rounded-xl shadow-lg backdrop-blur-sm p-1"
          >
            <DropdownMenuItem
              onClick={() => setViewMode("gdp")}
              className={`px-3 py-2 rounded-md text-(--color-text-muted) hover:text-(--color-text) hover:bg-(--color-surface-light) cursor-pointer transition-colors ${
                isGDP ? "bg-(--color-surface-light) text-(--color-accent)" : ""
              }`}
            >
              GDP (Tỷ USD)
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setViewMode("growth")}
              className={`px-3 py-2 rounded-md text-(--color-text-muted) hover:text-(--color-text) hover:bg-(--color-surface-light) cursor-pointer transition-colors ${
                !isGDP ? "bg-(--color-surface-light) text-(--color-accent)" : ""
              }`}
            >
              Tăng trưởng GDP (%)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <motion.p
        className="text-(--color-text-muted) mb-6"
        key={viewMode}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isGDP
          ? "Từ ~12 tỷ USD (1986) lên 476.39 tỷ USD (2024) – tăng hơn 30 lần trong 38 năm, thể hiện tác động mạnh mẽ của Đổi Mới."
          : "Tốc độ tăng trưởng GDP của Việt Nam biến động theo chu kỳ phát triển, đạt đỉnh 9.5% năm 1995 và duy trì ổn định quanh 6–7% gần đây."}
      </motion.p>

      <motion.div
        key={viewMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="year" stroke="var(--color-text-dimmed)" />
            <YAxis
              stroke="var(--color-text-dimmed)"
              label={{
                value: yLabel,
                angle: -90,
                position: "insideLeft",
                style: { fill: "var(--color-text-dimmed)", fontSize: 12 },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface-light)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                color: "var(--color-text)",
              }}
              formatter={(value: any) => {
                const num = parseFloat(value)
                if (isGDP) return `${num.toFixed(2)} tỷ USD`
                else return `${num.toFixed(2)} %`
              }}
            />
            <Legend wrapperStyle={{ color: "var(--color-text)" }} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, r: 5 }}
              activeDot={{ r: 7 }}
              name={yLabel}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}
