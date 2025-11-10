"use client"

import { motion } from "framer-motion"
import { ContentCard } from "../content-card"

export function AnalysisSection() {
  const opportunities = [
    {
      title: "Động Lực Tăng Trưởng",
      content:
        'Toàn cầu hóa là nền tảng cho mô hình tăng trưởng dựa trên FDI và xuất khẩu. Cách mạng công nghiệp 4.0 là "nhân tố quyết định" để cơ cấu lại nền kinh tế và phát triển kinh tế số.',
      icon: "📈",
    },
    {
      title: "Nâng Cấp Chuỗi Giá Trị",
      content:
        "AI thúc đẩy Việt Nam chuyển dịch từ sản xuất truyền thống sang hệ sinh thái đổi mới sáng tạo và công nghệ cao, bao gồm nhà máy thông minh và công nghiệp bán dẫn.",
      icon: "🚀",
    },
  ]

  const challenges = [
    {
      title: "Phụ Thuộc Công Nghệ",
      content:
        "Ứng dụng mạnh mẽ AI và điện toán đám mây dẫn đến phụ thuộc vào các dịch vụ đám mây nước ngoài, kéo theo rủi ro về an ninh mạng và an toàn dữ liệu.",
      icon: "⚠️",
    },
    {
      title: "Xói Mòn Lợi Thế Cũ",
      content:
        "Robot và tự động hóa đe dọa lợi thế cạnh tranh dựa trên lao động giá rẻ - vốn là nền tảng của các ngành lắp ráp và dệt may.",
      icon: "🔴",
    },
    {
      title: "Khoảng Trống Kỹ Năng",
      content:
        "91.4% lao động nông thôn không có chuyên môn kỹ thuật. Giáo dục đại học bị đánh giá là không đồng đều và không phù hợp với nhu cầu thị trường lao động.",
      icon: "📚",
    },
  ]

  const youth = [
    {
      title: "Vai Trò Tiên Phong",
      content: 'Thanh niên là "lực lượng nòng cốt" và "lực lượng xung kích" trong quá trình chuyển đổi số.',
      icon: "👥",
    },
    {
      title: "5 Lĩnh Vực Chiến Lược",
      content:
        "Nâng cao nhận thức số, xây dựng thể chế số, phát triển hạ tầng số, đào tạo nhân lực số, đổi mới sáng tạo và khởi nghiệp.",
      icon: "🎯",
    },
  ]

  return (
    <section id="phantich" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--color-warmth)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Phần 2: Phân Tích
            </span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Tác động của toàn cầu hóa và những cơ hội cho thế hệ trẻ
          </p>
        </motion.div>

        {/* Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-8">✅ Cơ Hội & Tác Động Tích Cực</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {opportunities.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--color-warmth)] mb-8">❌ Thách Thức & Tác Động Tiêu Cực</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {challenges.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Youth Opportunities */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--color-accent-light)] mb-8">🌟 Cơ Hội Cho Thế Hệ Trẻ</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {youth.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
