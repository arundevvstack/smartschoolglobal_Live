"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
  delay?: number;
}

export function MetricCard({ title, value, trend, trendUp = true, icon, delay = 0 }: MetricCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-lg p-4 border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        {icon && <div className="text-brand-500">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-accent-600' : 'text-destructive'}`}>
            {trendUp ? '↑' : '↓'} {trend}
          </span>
        )}
      </div>
    </motion.div>
  )
}
