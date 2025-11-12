"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

export function TradeChart() {
  const data = [
    { category: "Xuất khẩu", value: 405.5 },
    { category: "Nhập khẩu", value: 380.8 },
  ]

  const stats = [
    { label: "Thặng dư thương mại", value: "+24.7 tỷ USD" },
    { label: "Tỷ suất thặng dư", value: "6.5%" },
  ]

  return (
    <motion.div
      className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 md:p-8 hover:border-(--color-accent) transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-2xl font-bold text-(--color-text) mb-6">🌍 Cán Cân Thương Mại Việt Nam (2024)</h3>
      <p className="text-(--color-text-muted) mb-8">
        Tổng kim ngạch xuất khẩu 405.5 tỷ USD, nhập khẩu 380.8 tỷ USD. Việt Nam duy trì thặng dư thương mại ở mức cao,
        phản ánh vị thế mạnh mẽ trong chuỗi giá trị toàn cầu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="category" stroke="var(--color-text-dimmed)" />
              <YAxis stroke="var(--color-text-dimmed)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-surface-light)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  color: "var(--color-text)",
                }}
                formatter={(value: any) => {
                  const num =
                    typeof value === "number"
                      ? value
                      : typeof value === "string"
                      ? parseFloat(value)
                      : NaN;
                  return Number.isFinite(num) ? `${num.toFixed(1)} tỷ USD` : String(value);
                }}
              />
              <Bar dataKey="value" fill="var(--color-accent-light)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-(--color-surface-light) rounded-lg p-4 border border-(--color-border)"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-(--color-text-muted) text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-(--color-accent)">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
