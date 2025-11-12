"use client"

import { motion } from "framer-motion"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: "Tìm Hiểu", href: "#timhieu" },
    { label: "Phân Tích", href: "#phantich" },
    { label: "Dữ Liệu", href: "#dulieu" },
    { label: "Câu Hỏi", href: "#cauhoi" },
    { label: "Góc Nhìn Trẻ", href: "#goicnhinh" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <footer className="bg-(--color-primary) border-t border-(-color-border)">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pb-2 md:pt-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Branding */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h3 className="text-xl font-bold bg-linear-to-r from-(--color-accent) to-(--color-accent-light) bg-clip-text text-transparent mb-4">
              Kinh Tế Chính Trị
            </h3>
            <p className="text-(--color-text-muted) text-sm">
              Khám phá kiến thức sâu sắc về kinh tế Việt Nam qua lăng kính triết học Mác-Lê Nin.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h4 className="text-sm font-semibold text-(--color-text) mb-4">Nội Dung</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-(--color-text-muted) hover:text-(--color-accent) transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h4 className="text-sm font-semibold text-(--color-text) mb-4">Tài Nguyên</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-(--color-text-muted) hover:text-(--color-accent) transition-colors text-sm"
                >
                  Lý Thuyết Mác-Lê Nin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-text-muted) hover:text-(--color-accent) transition-colors text-sm"
                >
                  Dữ Liệu & Thống Kê
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-text-muted) hover:text-(--color-accent) transition-colors text-sm"
                >
                  Tài Liệu Tham Khảo
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-(--color-text-muted)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Nhóm 3 - Half2_SE1720. Tất cả quyền được bảo vệ.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-(--color-accent) transition-colors">
              Điều Khoản
            </a>
            <a href="#" className="hover:text-(--color-accent) transition-colors">
              Chính Sách
            </a>
            <a href="#" className="hover:text-(--color-accent) transition-colors">
              Liên Hệ
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
