"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface DataTableRowProps {
  columns: React.ReactNode[];
  delay?: number;
}

export function DataTableRow({ columns, delay = 0 }: DataTableRowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center justify-between py-3 px-4 border-b last:border-0 hover:bg-muted/50 transition-colors group"
    >
      {columns.map((col, i) => (
        <div key={i} className={`text-sm ${i === 0 ? 'font-medium text-foreground flex-1' : 'text-muted-foreground flex-1 text-end'}`}>
          {col}
        </div>
      ))}
    </motion.div>
  )
}
