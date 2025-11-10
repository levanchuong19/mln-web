"use client"

import { motion } from "framer-motion"
import { Zap, Lightbulb, Users } from "lucide-react"

export function YouthPerspectiveSection() {
  const roles = [
    {
      icon: Users,
      title: "Người Tiêu Dùng (Consumer)",
      description:
        "Một người thụ hưởng thành quả của hội nhập, sử dụng các sản phẩm công nghệ toàn cầu và dịch vụ đám mây, tham gia vào thị trường lao động do các FDI tạo ra.",
      color: "from-blue-500 to-cyan-400",
      accent: "text-blue-400",
    },
    {
      icon: Lightbulb,
      title: "Người Sáng Tạo (Creator)",
      description:
        "Một người chủ động tham gia vào hệ sinh thái khởi nghiệp, sử dụng các công cụ (AI, Data) để tạo ra sản phẩm, dịch vụ và mô hình kinh doanh mới.",
      color: "from-amber-500 to-yellow-400",
      accent: "text-amber-400",
    },
    {
      icon: Zap,
      title: "Người Kiến Tạo Tương Lai (Architect)",
      description:
        "Một người nhận lãnh vai trò 'xung kích', không chỉ tạo ra sản phẩm mà còn xây dựng nền tảng, đào tạo nhân lực và dẫn dắt chuyển đổi của Việt Nam.",
      color: "from-purple-500 to-pink-400",
      accent: "text-purple-400",
    },
  ]

  const keyPoints = [
    {
      title: "Lực Lượng Tiên Phong",
      description:
        "Thế hệ trẻ là lực lượng nòng cốt trong kinh tế số, khởi nghiệp sáng tạo, AI – Data – Green Economy.",
    },
    {
      title: "5 Lĩnh Vực Then Chốt",
      items: [
        "Nâng cao nhận thức số",
        "Xây dựng thể chế số",
        "Phát triển hạ tầng số",
        "Đào tạo nguồn nhân lực số",
        "Đổi mới sáng tạo & khởi nghiệp",
      ],
    },
    {
      title: "Hệ Sinh Thái Hỗ Trợ",
      description:
        "Các quỹ vay, trung tâm hỗ trợ, và sự kết nối giữa viện, trường, doanh nghiệp đang được xây dựng và mở rộng.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="goicnhinh" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-amber-400 to-[var(--color-accent-light)] bg-clip-text text-transparent">
              Góc Nhìn Giới Trẻ
            </span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Thế hệ trẻ là lực lượng tiên phong trong kinh tế số, khởi nghiệp sáng tạo, AI – Data – Green Economy.
          </p>
        </motion.div>

        {/* Central Question */}
        <motion.div
          className="bg-[var(--color-surface)]/70 border border-[var(--color-accent)]/30 rounded-lg p-8 mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-[var(--color-accent)] mb-3">Bạn là ai trong nền kinh tế mở?</p>
          <p className="text-[var(--color-text-muted)]">
            Bạn là người tiêu dùng, người sáng tạo hay người kiến tạo tương lai?
          </p>
        </motion.div>

        {/* Three Roles */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={role.title}
                variants={itemVariants}
                className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-8 hover:border-[var(--color-accent)] transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <Icon className={`${role.accent} mb-4`} size={40} />
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{role.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{role.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Points */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-border)] rounded-lg p-8"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-bold text-[var(--color-accent)] mb-4">{point.title}</h4>
              {point.items ? (
                <ul className="space-y-3">
                  {point.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] font-bold mt-1">✓</span>
                      <span className="text-[var(--color-text-muted)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[var(--color-text-muted)] text-sm">{point.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[var(--color-text)] font-semibold mb-4">
            Hành động bây giờ để trở thành lực lượng dẫn dắt sự thay đổi của Việt Nam.
          </p>
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-lg text-[var(--color-bg)] font-bold hover:shadow-lg transition-shadow">
            Khám Phá Hệ Sinh Thái
          </div>
        </motion.div>
      </div>
    </section>
  )
}
