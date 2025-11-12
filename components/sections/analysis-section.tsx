"use client"

import { motion } from "framer-motion"
import { ContentCard } from "../content-card"
import { 
  ChartUpIcon, 
  RocketIcon, 
  WarningIcon, 
  AlertCircleIcon, 
  BookIcon, 
  UsersIcon, 
  TargetIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon
} from "../icons"

export function AnalysisSection() {
  const opportunities = [
    {
      title: "Động Lực Tăng Trưởng",
      content:
        'Toàn cầu hóa là nền tảng cho mô hình tăng trưởng dựa trên FDI và xuất khẩu. Cách mạng công nghiệp 4.0 là "nhân tố quyết định" để cơ cấu lại nền kinh tế và phát triển kinh tế số.',
      icon: ChartUpIcon,
      image: "/dong-luc-tang-truong.jpg",
    },
    {
      title: "Nâng Cấp Chuỗi Giá Trị",
      content:
        "AI thúc đẩy Việt Nam chuyển dịch từ sản xuất truyền thống sang hệ sinh thái đổi mới sáng tạo và công nghệ cao, bao gồm nhà máy thông minh và công nghiệp bán dẫn.",
      icon: RocketIcon,
      image: "/nang-cap-chuoi-gia-tri.jpg",
    },
  ]

  const challenges = [
    {
      title: "Phụ Thuộc Công Nghệ",
      content:
        "Ứng dụng mạnh mẽ AI và điện toán đám mây dẫn đến phụ thuộc vào các dịch vụ đám mây nước ngoài, kéo theo rủi ro về an ninh mạng và an toàn dữ liệu.",
      icon: WarningIcon,
      image: "/an-toan-du-lieu.jpg",
    },
    {
      title: "Xói Mòn Lợi Thế Cũ",
      content:
        "Robot và tự động hóa đe dọa lợi thế cạnh tranh dựa trên lao động giá rẻ - vốn là nền tảng của các ngành lắp ráp và dệt may.",
      icon: AlertCircleIcon,
      image: "/robot-lam-viec.jpg",
    },
    {
      title: "Khoảng Trống Kỹ Năng",
      content:
        "Hầu hết lao động nông thôn không có chuyên môn kỹ thuật. Giáo dục đại học bị đánh giá là không đồng đều và không phù hợp với nhu cầu thị trường lao động.",
      icon: BookIcon,
      image: "/khoang-trong-ky-nang.jpg",
    },
  ]

  const youth = [
    {
      title: "Vai Trò Tiên Phong",
      content: 'Thanh niên là "lực lượng nòng cốt" và "lực lượng xung kích" trong quá trình chuyển đổi số.',
      icon: UsersIcon,
      image: "/vai-tro-tien-phong.jpg",
    },
    {
      title: "5 Lĩnh Vực Chiến Lược",
      content:
        "Nâng cao nhận thức số, xây dựng thể chế số, phát triển hạ tầng số, đào tạo nhân lực số, đổi mới sáng tạo và khởi nghiệp.",
      icon: TargetIcon,
      image: "/linh-vuc-chien-luoc.jpg",
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
            <span className="bg-linear-to-r from-(--color-warmth) to-(--color-accent) bg-clip-text text-transparent">
              Phần 2: Phân Tích
            </span>
          </h2>
          <p className="text-(--color-text-muted) text-lg">
            Tác động của toàn cầu hóa và những cơ hội cho thế hệ trẻ
          </p>
        </motion.div>

        {/* Opportunities */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-(--color-accent) mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CheckCircleIcon size={28} />
            Cơ Hội & Tác Động Tích Cực
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {opportunities.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} image={item.image} />
            ))}
          </motion.div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-(--color-warmth) mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <XCircleIcon size={28} />
            Thách Thức & Tác Động Tiêu Cực
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {challenges.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} image={item.image} />
            ))}
          </motion.div>
        </div>

        {/* Youth Opportunities */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-(--color-accent-light) mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StarIcon size={28} />
            Cơ Hội Cho Thế Hệ Trẻ
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {youth.map((item, index) => (
              <ContentCard key={index} title={item.title} content={item.content} icon={item.icon} index={index} image={item.image} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
