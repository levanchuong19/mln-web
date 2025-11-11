"use client"

import { Target } from "lucide-react"
import { motion } from "framer-motion"

interface IconProps {
  className?: string
  size?: number
}

export function TargetIcon({ className = "", size = 24 }: IconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Target size={size} className="text-[var(--color-accent)]" />
    </motion.div>
  )
}

