"use client"

import { motion } from "framer-motion"
import { ContentCard } from "../content-card"

export function UnderstandingSection() {
  const periods = [
    {
      title: "Bối Cảnh Khủng Hoảng (Trước 1986)",
      content:
        'Nền kinh tế kế hoạch hóa tập trung bộc lộ sự lạc hậu. GDP bình quân đầu người chỉ đạt ~100 USD. Các phong trào "phá rào" tự phát phản ánh đòi hỏi thay đổi không thể đảo ngược.',
      icon: "📉",
    },
    {
      title: "Bước Ngoặt Đổi Mới (1986)",
      content:
        'Đại hội Đảng VI khởi xướng công cuộc Đổi Mới. Quyết định thực dụng thừa nhận kinh tế thị trường và kinh tế nhiều thành phần. Ưu tiên "điều gì sẽ hoạt động tốt nhất".',
      icon: "🔄",
    },
    {
      title: "Giai Đoạn Hội Nhập (1995-2020)",
      content:
        "Hội nhập quốc tế thúc đẩy mạnh mẽ phát triển. FDI và xuất khẩu trở thành hai trụ cột tăng trưởng. Việt Nam chuyển mình từ nước nghèo nhất thành thu nhập trung bình thấp.",
      icon: "🌐",
    },
    {
      title: "Chuyển Đổi Số (2020-Nay)",
      content:
        "Tập trung vào chuyển đổi số và đổi mới sáng tạo. Chuyển dịch từ trung tâm sản xuất truyền thống sang hệ sinh thái công nghệ cao, AI, bán dẫn.",
      icon: "💻",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section id="timhieu" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
              Phần 1: Tìm Hiểu
            </span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Tiến trình hình thành và phát triển mô hình kinh tế Việt Nam
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {periods.map((period, index) => (
            <ContentCard key={index} title={period.title} content={period.content} icon={period.icon} index={index} />
          ))}
        </motion.div>

        {/* Philosophy section */}
        <motion.div
          className="mt-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">🧠 Bản Chất Triết Học</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[var(--color-accent)] mb-4">
                Lực Lượng Sản Xuất & Công Nghiệp Hóa
              </h4>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Công nghiệp hóa là quá trình tất yếu phát triển lực lượng sản xuất. Trong Cách mạng Công nghiệp 4.0, lực
                lượng sản xuất thay đổi căn bản: tri thức và thông tin trở thành yếu tố sản xuất quyết định. Robot và tự
                động hóa sẽ thay thế lao động phổ thông, vì vậy cần phát triển nguồn nhân lực chất lượng cao.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[var(--color-accent)] mb-4">Quan Hệ Sản Xuất & Hội Nhập</h4>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất. Khi lực lượng sản xuất
                phát triển toàn cầu, quan hệ sản xuất không thể bị giới hạn trong biên giới quốc gia. Hội nhập kinh tế
                quốc tế là giải pháp mở rộng quan hệ sản xuất.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
