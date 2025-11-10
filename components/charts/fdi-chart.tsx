"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

export function FDIChart() {
  const data = [
    { year: "2023", fdi: 23.18 },
    { year: "2024", fdi: 25.35 },
  ]

  const highlights = [
    { title: "Samsung", industry: "Điện tử" },
    { title: "LG", industry: "Điện tử" },
    { title: "Intel", industry: "Bán dẫn" },
  ]

  return (
    <motion.div
      className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-light)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent-glow)] transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "var(--color-accent-glow)" }}
    >
      <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">💼 Đầu Tư Trực Tiếp Nước Ngoài (FDI)</h3>
      <p className="text-[var(--color-text-muted)] mb-8">
        Vốn FDI giải ngân liên tục tăng - 23.18 tỷ USD (2023) lên 25.35 tỷ USD (2024). FDI là động cơ chính thúc đẩy
        tăng trưởng, công nghiệp hóa và xuất khẩu của Việt Nam.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorFdi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
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
                formatter={(value) => `${value.toFixed(2)} tỷ USD`}
              />
              <Area
                type="monotone"
                dataKey="fdi"
                stroke="var(--color-accent)"
                fillOpacity={1}
                fill="url(#colorFdi)"
                name="FDI (tỷ USD)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--color-accent)] mb-4">Nhà đầu tư hàng đầu</h4>
          <div className="space-y-3">
            {highlights.map((company, index) => (
              <motion.div
                key={index}
                className="bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-border)]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <p className="font-semibold text-[var(--color-text)]">{company.title}</p>
                <p className="text-sm text-[var(--color-text-dimmed)]">{company.industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
