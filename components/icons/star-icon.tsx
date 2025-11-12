"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface IconProps {
  className?: string
  size?: number
}

export function StarIcon({ className = "", size = 24 }: IconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1, rotate: 15 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Star size={size} className="text-(--color-warmth) fill-(--color-warmth)" />
    </motion.div>
  )
}

