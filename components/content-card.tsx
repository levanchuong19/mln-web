"use client"

import { motion } from "framer-motion"
import type { ReactNode, ComponentType } from "react"

interface ContentCardProps {
  title: string
  content: ReactNode
  icon?: ComponentType<{ className?: string; size?: number }> | string
  index?: number
  image?: string
}

export function ContentCard({ title, content, icon, index = 0, image }: ContentCardProps) {
  const IconComponent = icon && typeof icon !== "string" ? icon : null
  const iconString = icon && typeof icon === "string" ? icon : null

  return (
    <motion.div
      className="bg-(--color-surface) border border-(--color-border) rounded-xl overflow-hidden hover:border-(--color-accent) transition-all duration-300 group backdrop-blur-sm flex flex-col"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "var(--color-accent)", scale: 1.02 }}
    >
      {image && (
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}

      {/* Nội dung */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Tiêu đề + icon cùng hàng */}
        <div className="flex items-center gap-3 mb-4">
          {IconComponent && (
            <IconComponent
              className="text-(--color-accent) group-hover:scale-110 transition-transform duration-300"
              size={28}
            />
          )}
          {iconString && (
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {iconString}
            </span>
          )}
          <h3 className="text-xl font-bold text-(--color-text)">{title}</h3>
        </div>

        <div className="text-(--color-text-muted) leading-relaxed flex-1">{content}</div>
      </div>
    </motion.div>
  )
}
