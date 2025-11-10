"use client"

import { motion } from "framer-motion"
import { GDPChart } from "../charts/gdp-chart"
import { LaborChart } from "../charts/labor-chart"
import { TradeChart } from "../charts/trade-chart"
import { FDIChart } from "../charts/fdi-chart"

export function DataSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="dulieu" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warmth)] bg-clip-text text-transparent">
              Phần 3: Dữ Liệu & Biểu Đồ
            </span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Minh chứng thực tế về hành trình phát triển kinh tế Việt Nam
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* GDP Chart */}
          <motion.div variants={itemVariants}>
            <GDPChart />
          </motion.div>

          {/* Labor Structure */}
          <motion.div variants={itemVariants}>
            <LaborChart />
          </motion.div>

          {/* Trade Data */}
          <motion.div variants={itemVariants}>
            <TradeChart />
          </motion.div>

          {/* FDI Chart */}
          <motion.div variants={itemVariants}>
            <FDIChart />
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-light)] border border-[var(--color-border)] rounded-xl p-8 md:p-12"
            variants={itemVariants}
            whileHover={{ borderColor: "var(--color-accent)" }}
          >
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-8">📊 Thành Tựu & Hạn Chế</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-accent)] mb-4">✅ Thành Tựu</h4>
                <ul className="space-y-3 text-[var(--color-text-muted)]">
                  <li className="flex items-start">
                    <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                    <span>Chuyển từ nước nghèo nhất thành thu nhập trung bình thấp trong 1 thế hệ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                    <span>Tiếp cận điện tăng từ 14% (1993) lên gần 100% (2019)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-accent)] mr-3 mt-1">•</span>
                    <span>Chỉ số vốn nhân lực cao nhất trong nhóm nước thu nhập trung bình thấp</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-warmth)] mb-4">⚠️ Hạn Chế</h4>
                <ul className="space-y-3 text-[var(--color-text-muted)]">
                  <li className="flex items-start">
                    <span className="text-[var(--color-warmth)] mr-3 mt-1">•</span>
                    <span>Phụ thuộc vào dịch vụ đám mây nước ngoài, rủi ro an ninh mạng</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-warmth)] mr-3 mt-1">•</span>
                    <span>Nền kinh tế phụ thuộc lớn vào các doanh nghiệp FDI công nghệ cao</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--color-warmth)] mr-3 mt-1">•</span>
                    <span>Chênh lệch phát triển vùng miền, FDI tập trung vào các đô thị lớn</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
