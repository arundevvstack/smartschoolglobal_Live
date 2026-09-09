import * as React from "react"

interface StatusBadgeProps {
  status: "success" | "warning" | "danger" | "neutral" | "info";
  label: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = {
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    danger: "bg-red-500/10 text-red-400 border-red-500/20",
    neutral: "bg-white/5 text-white/70 border-white/10",
    info: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${styles[status]}`}>
      {label}
    </span>
  )
}
