"use client"

import { RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

interface IconProps {
  className?: string
  size?: number
}

export function RefreshIcon({ className = "", size = 24 }: IconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1, rotate: 180 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <RefreshCw size={size} className="text-[var(--color-accent)]" />
    </motion.div>
  )
}

