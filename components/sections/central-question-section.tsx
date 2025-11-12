"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function CentralQuestionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="cauhoi" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Question */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-linear-to-r from-(--color-accent) via-(--color-accent-light) to-(--color-accent) bg-clip-text text-transparent">
              Câu Hỏi Trung Tâm
            </span>
          </h2>
          <div className="bg-surface/50 border border-(--color-border) rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-(--color-text) font-semibold italic text-balance">
              "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam — là sự lựa chọn tất yếu của lịch sử hay là
              chiến lược thích ứng trong hội nhập toàn cầu?"
            </p>
          </div>
          <p className="mt-6 text-lg text-(--color-text-muted)">
            Mô hình này bắt đầu từ một sự lựa chọn tất yếu của lịch sử và đã phát triển thành công thông qua một chiến
            lược thích ứng liên tục.
          </p>
        </motion.div>

        {/* Two Main Perspectives */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Historical Inevitability */}
          <motion.div
            variants={itemVariants}
            className="bg-surface/50 border border-(--color-border) rounded-lg p-8 hover:border-(--color-accent) transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-(--color-accent) mb-6">Tất Yếu của Lịch Sử</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent)" />
                  Sự Sụp Đổ của Mô Hình Cũ
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Trước năm 1986, nền kinh tế kế hoạch hóa tập trung, quan liêu, bao cấp lâm vào khủng hoảng kinh tế -
                  xã hội nghiêm trọng. GDP bình quân đầu người chỉ đạt khoảng 100 USD.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent)" />
                  Áp Lực từ Thực Tiễn
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Các phong trào "phá rào" từ cấp địa phương diễn ra công khai, được một số lãnh đạo địa phương ủng hộ,
                  cho thấy mô hình cũ không còn phù hợp.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent)" />
                  Kết Luận
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Việc từ bỏ mô hình kế hoạch hóa tập trung và lựa chọn con đường mới là tất yếu lịch sử để giải quyết
                  khủng hoảng và tồn tại.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Adaptive Strategy */}
          <motion.div
            variants={itemVariants}
            className="bg-surface/50 border border-(--color-border) rounded-lg p-8 hover:border-(--color-accent-light) transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-(--color-accent-light) mb-6">Chiến Lược Thích Ứng</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent-light)" />
                  Chủ Nghĩa Thực Dụng
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Việt Nam áp dụng mô hình này không dựa trên cam kết lý luận mà dựa trên cân nhắc thực dụng về điều gì
                  sẽ hoạt động tốt nhất.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent-light)" />
                  Sáng Tạo trong Vận Dụng Lý Luận
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Coi KTTT là "sản phẩm của văn minh nhân loại", công cụ hiệu quả để đạt mục tiêu XHCN - mô hình hoàn
                  toàn mới, chưa có tiền lệ.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-(--color-text) mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-(--color-accent-light)" />
                  Tiếp Tục Thích Ứng
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Mô hình liên tục thích ứng với CMCN 4.0 bằng chuyển đổi số, AI, kinh tế sáng tạo với lực lượng tiên
                  phong là thế hệ trẻ.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-(--color-accent) mb-4">Kết Luận Chính</h3>
          <p className="text-lg text-(--color-text) leading-relaxed text-balance">
            Mô hình kinh tế thị trường định hướng XHCN của Việt Nam không phải là một công thức cố định, mà là một{" "}
            <span className="font-semibold">"mô hình mở"</span>, sáng tạo và liên tục vận động. Nó được sinh ra từ một{" "}
            <span className="font-semibold">sự tất yếu của lịch sử</span> để giải quyết khủng hoảng, nhưng phát triển và
            thành công được nhờ một <span className="font-semibold">chiến lược thích ứng</span> đầy thực dụng và sáng
            tạo trong hội nhập toàn cầu.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
