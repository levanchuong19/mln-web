"use client"

import { motion } from "framer-motion"
import type { ReactNode, ComponentType } from "react"

interface ContentCardProps {
  title: string
  content: ReactNode
  icon?: ComponentType<{ className?: string; size?: number }> | string
  index?: number
}

export function ContentCard({ title, content, icon, index = 0 }: ContentCardProps) {
  const IconComponent = icon && typeof icon !== "string" ? icon : null
  const iconString = icon && typeof icon === "string" ? icon : null

  return (
    <motion.div
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent)] transition-all duration-300 group backdrop-blur-sm bg-[var(--color-surface)]/80"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "var(--color-accent)", scale: 1.02 }}
    >
      {IconComponent && (
        <motion.div 
          className="mb-4 gpu-accelerated"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
        >
          <IconComponent className="group-hover:scale-110 transition-transform duration-300" size={32} />
        </motion.div>
      )}
      {iconString && (
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{iconString}</div>
      )}
      <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">{title}</h3>
      <div className="text-[var(--color-text-muted)] leading-relaxed">{content}</div>
    </motion.div>
  )
}
