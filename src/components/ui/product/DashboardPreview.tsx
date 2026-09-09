import * as React from "react"

interface DashboardPreviewProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function DashboardPreview({ title = "Smart School AI", children, className = "" }: DashboardPreviewProps) {
  return (
    <div className={`dark-product-theme rounded-xl overflow-hidden bg-background border shadow-2xl shadow-brand-900/20 flex flex-col text-foreground ${className}`}>
      {/* Top Bar */}
      <div className="h-12 bg-surface border-b flex items-center px-4 justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1.5 me-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{title}</span>
        </div>
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-full bg-muted" />
          <div className="w-4 h-4 rounded-full bg-muted" />
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 bg-background p-4 sm:p-6 overflow-hidden relative">
        {children}
      </div>
    </div>
  )
}
