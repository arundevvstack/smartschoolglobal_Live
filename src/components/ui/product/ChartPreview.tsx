"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function ChartPreview() {
  const heights = [40, 60, 30, 80, 50, 90, 70];
  
  return (
    <div className="w-full h-32 flex items-end justify-between gap-2 pt-4">
      {heights.map((h, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          className="flex-1 bg-brand-200 hover:bg-brand-400 rounded-t-sm transition-colors relative group"
        >
          <div className="absolute -top-8 start-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {h * 10}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
