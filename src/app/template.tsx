"use client"
import { easeInOut, motion } from "framer-motion"

export default function Transition({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      {children}
    </motion.div>
  )
}