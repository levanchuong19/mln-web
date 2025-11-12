"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Zap, Lightbulb, Users, ChartLineIcon, Maximize, Paperclip } from "lucide-react"

export function YouthPerspectiveSection() {
  const [flipped, setFlipped] = useState<number | null>(null)

  const roles = [
    {
      icon: Users,
      title: "Người Tiêu Dùng (Consumer)",
      front:
        " ",
      back:
        "Một người thụ hưởng thành quả của hội nhập, sử dụng các sản phẩm công nghệ toàn cầu và dịch vụ đám mây, tham gia vào thị trường lao động do các FDI tạo ra.",
      color: "from-blue-500 to-cyan-400",
      accent: "text-blue-400",
    },
    {
      icon: Lightbulb,
      title: "Người Sáng Tạo (Creator)",
      front:
        "",
      back:
        "Một người chủ động tham gia vào hệ sinh thái khởi nghiệp, sử dụng các công cụ (AI, Data) để tạo ra sản phẩm, dịch vụ và mô hình kinh doanh mới.",
      color: "from-amber-500 to-yellow-400",
      accent: "text-amber-400",
    },
    {
      icon: Zap,
      title: "Người Kiến Tạo Tương Lai (Architect)",
      front:
        "",
      back:
        "Một người nhận lãnh vai trò 'xung kích', không chỉ tạo ra sản phẩm mà còn xây dựng nền tảng, đào tạo nhân lực và dẫn dắt chuyển đổi của Việt Nam.",
      color: "from-purple-500 to-pink-400",
      accent: "text-purple-400",
    },
    {
      icon: ChartLineIcon,
      title: "Lực Lượng Tiên Phong",
      front: "",
      back:
        "TThế hệ trẻ là lực lượng nòng cốt trong kinh tế số, khởi nghiệp sáng tạo, AI – Data – Green Economy.",
      color: "from-emerald-500 to-green-400",
      accent: "text-emerald-400",
    },
    {
      icon: Maximize,
      title: "5 Lĩnh Vực Then Chốt",
      front: "",
      back:
        "Nâng cao nhận thức số, Xây dựng thể chế số, Phát triển hạ tầng số, Phát triển hạ tầng số, Đổi mới sáng tạo & khởi nghiệp.",
      color: "from-rose-500 to-pink-400",
      accent: "text-rose-400",
    },
    {
      icon: Paperclip,
      title: "Hệ Sinh Thái Hỗ Trợ",
      front:
        "",
      back:
        "Các quỹ vay, trung tâm hỗ trợ, và sự kết nối giữa viện, trường, doanh nghiệp đang được xây dựng và mở rộng.",
      color: "from-indigo-500 to-blue-400",
      accent: "text-indigo-400",
    },
  ]

  return (
    <section id="gocnhin" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-linear-to-r from-(--color-accent) via-amber-400 to-(--color-accent-light) bg-clip-text text-transparent">
            Góc Nhìn Giới Trẻ
          </span>
        </h2>
        <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
          Thế hệ trẻ là lực lượng tiên phong trong kinh tế số, khởi nghiệp sáng tạo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(240px,300px))] justify-center gap-4 perspective-distant">
  {roles.map((role, i) => {
    const Icon = role.icon
    const isFlipped = flipped === i
    return (
      <motion.div
        key={i}
        className="relative h-[280px] w-full max-w-[300px] cursor-pointer select-none"
        onClick={() => setFlipped(isFlipped ? null : i)}
        initial={false}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <motion.div
          className="absolute inset-0 transform-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.1, 0.2, 1] }}
        >
          {/* FRONT */}
          <motion.div
            className="absolute inset-0 backface-hidden bg-(--color-surface) border border-(--color-border) rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-(--color-accent) shadow-sm transition-all duration-300"
            initial={{ opacity: 1 }}
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center mb-3">
              <Icon className={`${role.accent} mb-2`} size={36} />
              <h3 className="text-base font-semibold text-(--color-text)">
                {role.title}
              </h3>
            </div>
            <p className="text-(--color-text-muted) text-sm leading-relaxed px-3">
              {role.front}
            </p>
          </motion.div>

          {/* BACK */}
          <motion.div
            className="absolute inset-0 backface-hidden rotate-y-180 bg-linear-to-br from-(--color-surface) to-(--color-surface-light) border border-(--color-border) rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.4, delay: isFlipped ? 0.2 : 0 }}
          >
            <motion.p
              className="text-(--color-text-muted) text-sm mb-3 px-3"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {role.back}
            </motion.p>
            <motion.span
              className={`text-xs font-semibold ${role.accent}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              (Click để lật lại)
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    )
  })}
      </div>

    </section>
  )
}
