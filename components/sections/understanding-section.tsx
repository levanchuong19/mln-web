"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BrainIcon, ChartDownIcon, ComputerIcon, GlobeIcon, RefreshIcon } from "../icons"

export function UnderstandingSection() {
  const periods = [
    {
      id: "1",
      title: "Bối Cảnh Khủng Hoảng (Trước 1986)",
      content:
        'Nền kinh tế kế hoạch hóa tập trung bộc lộ sự lạc hậu. GDP bình quân đầu người chỉ đạt ~100 USD. Các phong trào "phá rào" tự phát phản ánh đòi hỏi thay đổi không thể đảo ngược.',
      icon: <ChartDownIcon size={28} />,
    },
    {
      id: "2",
      title: "Bước Ngoặt Đổi Mới (1986)",
      content:
        'Đại hội Đảng VI khởi xướng công cuộc Đổi Mới. Quyết định thực dụng thừa nhận kinh tế thị trường và kinh tế nhiều thành phần. Ưu tiên "điều gì sẽ hoạt động tốt nhất".',
      icon: <RefreshIcon size={28} />,
    },
    {
      id: "3",
      title: "Giai Đoạn Hội Nhập (1995-2020)",
      content:
        "Hội nhập quốc tế thúc đẩy mạnh mẽ phát triển. FDI và xuất khẩu trở thành hai trụ cột tăng trưởng. Việt Nam chuyển mình từ nước nghèo nhất thành thu nhập trung bình thấp.",
      icon: <GlobeIcon size={28} />,
    },
    {
      id: "4",
      title: "Chuyển Đổi Số (2020-Nay)",
      content:
        "Tập trung vào chuyển đổi số và đổi mới sáng tạo. Chuyển dịch từ trung tâm sản xuất truyền thống sang hệ sinh thái công nghệ cao, AI, bán dẫn.",
      icon: <ComputerIcon size={28} />,
    },
  ]

  return (
    <section id="timhieu" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> <span className="bg-linear-to-r  from-(--color-accent) via-amber-400 to-(--color-accent-light) bg-clip-text text-transparent"> Phần 1: Tìm Hiểu </span> </h2>
          <p className="text-[--color-text-muted] text-lg">
            Tiến trình hình thành và phát triển mô hình kinh tế Việt Nam
          </p>
        </motion.div>

        {/* Accordion section */}
        <Accordion type="single" collapsible className="space-y-4">
          {periods.map((period) => (
            <AccordionItem
              key={period.id}
              value={period.id}
              className="border border-[--color-border] rounded-xl bg-[--color-surface] overflow-hidden transition-all"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-[--color-surface]/80 flex items-center justify-between hover:no-underline">
              <div className="flex items-center gap-4">
                <span className="text-[--color-accent]">{period.icon}</span>
                <span className="font-semibold text-lg text-[--color-text]">{period.title}</span>
              </div>
            </AccordionTrigger>

              <AccordionContent className="px-6 pb-5 text-[--color-text-muted] leading-relaxed bg-[--color-surface]/60 backdrop-blur-sm transition-all duration-300">
                {period.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Philosophy Section */}
        <motion.div
          className="mt-16 bg-[--color-surface] border border-[--color-border] rounded-xl p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "var(--color-accent)", scale: 1.01 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[--color-text] mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BrainIcon size={32} />
            Bản Chất Triết Học
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[--color-accent] mb-4">
                Lực Lượng Sản Xuất & Công Nghiệp Hóa
              </h4>
              <p className="text-[--color-text-muted] leading-relaxed">
                Công nghiệp hóa là quá trình tất yếu phát triển lực lượng sản xuất. Trong Cách mạng Công nghiệp 4.0,
                tri thức và thông tin trở thành yếu tố sản xuất quyết định. Robot và tự động hóa thay thế lao động phổ
                thông, vì vậy cần phát triển nguồn nhân lực chất lượng cao.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[--color-accent] mb-4">Quan Hệ Sản Xuất & Hội Nhập</h4>
              <p className="text-[--color-text-muted] leading-relaxed">
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
