"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, GraduationCap, Network, Globe2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"
import { StatusBadge } from "@/components/ui/product/StatusBadge"

const solutions = [
  {
    id: "independent",
    name: "Independent Schools",
    description: "Manage admissions, attendance, fees, exams, and parent communication from one unified platform. Built for independent institutions.",
    icon: Building2,
    href: "/solutions/independent",
    metricValue: "Optimised",
    metricLabel: "System Readiness"
  },
  {
    id: "international",
    name: "International Schools",
    description: "Multi-currency, multi-language, and compliant. Native support for IB PYP, MYP, DP and IGCSE grading.",
    icon: Globe2,
    href: "/solutions/international",
    metricValue: "Curriculum",
    metricLabel: "Native Support"
  },
  {
    id: "group",
    name: "Group of Schools",
    description: "Centralised ERP for school groups with 5 to 500+ campuses. Gain real-time visibility and enforce consistent policies.",
    icon: Network,
    href: "/solutions/group",
    metricValue: "Multi-Node",
    metricLabel: "Global Visibility"
  }
]

export function SolutionsTabs() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      newIndex = (index + 1) % solutions.length
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      newIndex = (index - 1 + solutions.length) % solutions.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      newIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      newIndex = solutions.length - 1
    }

    if (newIndex !== index) {
      setActiveIndex(newIndex)
      tabRefs.current[newIndex]?.focus()
    }
  }

  return (
    <section className="relative py-16 lg:py-24 bg-slate-950 overflow-hidden min-h-[100svh] flex flex-col justify-center">
      
      {/* Immersive Background Glows */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="mx-auto max-w-3xl lg:text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-bold leading-7 text-blue-400 uppercase tracking-widest">Purpose-Built</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Solutions by Institution Type
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400">
            Smart School AI adapts to the unique operational workflows of your specific educational institution.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* LEFT: Compact Interactive Navigation */}
          <div 
            className="lg:col-span-4 flex flex-col gap-3 w-full mb-8 lg:mb-0"
            role="tablist"
            aria-orientation="vertical"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isActive = activeIndex === index;
              return (
              <button
                key={solution.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${solution.id}`}
                id={`tab-${solution.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`flex items-center gap-4 text-start p-4 rounded-xl transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full ${
                  isActive
                    ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                    : "bg-transparent border-transparent hover:bg-slate-900"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-base sm:text-lg font-bold transition-colors ${isActive ? "text-white" : "text-slate-400"}`}>
                  {solution.name}
                </h3>
              </button>
            )})}
            
            {/* Mobile inline description (Desktop handles this inside the product visual or below it) */}
            <div className="block lg:hidden mt-4 bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {solutions[activeIndex].description}
              </p>
              <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
                <Link href={solutions[activeIndex].href}>Explore Solution</Link>
              </Button>
            </div>

          </div>

          {/* RIGHT: Large Dark Product Environment */}
          <div className="lg:col-span-8 relative w-full overflow-hidden sm:overflow-visible">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                role="tabpanel"
                id={`panel-${solution.id}`}
                aria-labelledby={`tab-${solution.id}`}
                hidden={activeIndex !== index}
                className="w-full focus:outline-none"
                tabIndex={0}
              >
                {activeIndex === index && (
                  <AnimateSolutionVisual solution={solution} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimateSolutionVisual({ solution }: { solution: any }) {
  const Icon = solution.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-10 w-full"
    >
      <DashboardPreview title={`${solution.name} Operating View`} className="min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] shadow-2xl bg-[#0b1120] border-slate-800">
        <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 px-4 sm:px-6 h-full space-y-6">
          <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-400 shadow-sm border border-blue-500/20">
            <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          
          <div className="space-y-2 max-w-lg hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{solution.name} Experience</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed px-4">
              {solution.description}
            </p>
          </div>

          <div className="pt-2 w-full max-w-[280px] space-y-3 relative z-20">
            <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-3 sm:p-4 mb-4">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-slate-400 font-medium">{solution.metricLabel}</span>
                 <StatusBadge status="success" label="Online" />
               </div>
               <div className="text-lg font-bold text-white text-left">{solution.metricValue}</div>
            </div>
            
            <Button className="w-full shadow-lg shadow-blue-900/20 bg-blue-600 hover:bg-blue-500 text-white hidden lg:flex" asChild>
              <Link href={solution.href} tabIndex={0}>View {solution.name} Features</Link>
            </Button>
          </div>

          <div className="absolute bottom-4 text-center w-full start-0 z-10 pointer-events-none">
            <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">Platform Adaptation</span>
          </div>
        </div>
      </DashboardPreview>
    </motion.div>
  )
}
