"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ContentCardProps {
  title: string
  content: ReactNode
  icon?: string
  index?: number
}

export function ContentCard({ title, content, icon, index = 0 }: ContentCardProps) {
  return (
    <motion.div
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent)] transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "var(--color-accent)" }}
    >
      {icon && <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>}
      <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">{title}</h3>
      <div className="text-[var(--color-text-muted)] leading-relaxed">{content}</div>
    </motion.div>
  )
}
