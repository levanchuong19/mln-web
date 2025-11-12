"use client"

import { AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface IconProps {
  className?: string
  size?: number
}

export function WarningIcon({ className = "", size = 24 }: IconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AlertTriangle size={size} className="text-(--color-warmth)" />
    </motion.div>
  )
}

