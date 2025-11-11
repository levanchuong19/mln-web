"use client"

import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

interface IconProps {
  className?: string
  size?: number
}

export function AlertCircleIcon({ className = "", size = 24 }: IconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AlertCircle size={size} className="text-[var(--color-warmth)]" />
    </motion.div>
  )
}

