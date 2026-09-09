"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, GraduationCap, Network, Globe2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"

const solutions = [
  {
    id: "k-12",
    name: "K-12 Schools",
    description: "Manage admissions, attendance, fees, exams, and parent communication from one unified platform. Built for primary and secondary schools.",
    icon: Building2,
    href: "/solutions/k-12",
  },
  {
    id: "higher-ed",
    name: "Higher Education",
    description: "Manage students, faculty, finance and exams across departments from one unified platform. Eliminate silos in colleges.",
    icon: GraduationCap,
    href: "/solutions/higher-ed",
  },
  {
    id: "multi-campus",
    name: "Multi-Campus",
    description: "Centralised ERP for school groups with 5 to 500+ campuses. Gain real-time visibility and enforce consistent policies.",
    icon: Network,
    href: "/solutions/multi-campus",
  },
  {
    id: "international",
    name: "International Schools",
    description: "Multi-currency, multi-language, and compliant. Native support for IB PYP, MYP, DP and IGCSE grading.",
    icon: Globe2,
    href: "/solutions/international",
  },
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
    <section className="py-24 bg-surface overflow-hidden relative border-t border-border">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-xs font-bold leading-7 text-brand-600 uppercase tracking-widest">Purpose-Built</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solutions by Institution Type
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Smart School AI adapts to the unique operational workflows of your specific educational institution.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <div 
            className="lg:col-span-5 flex flex-col gap-4"
            role="tablist"
            aria-orientation="vertical"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
              <button
                key={solution.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`panel-${solution.id}`}
                id={`tab-${solution.id}`}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`text-start p-6 rounded-2xl transition-all duration-300 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                  activeIndex === index
                    ? "bg-background border-brand-500 shadow-xl scale-[1.02] z-10"
                    : "bg-transparent border-transparent hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeIndex === index ? "bg-brand-100 text-brand-700 shadow-sm" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                    {solution.name}
                  </h3>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{solution.description}</p>
                      <Link href={solution.href} className="text-brand-600 font-bold hover:text-brand-800 flex items-center text-sm group" tabIndex={-1}>
                        Explore Solution <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )})}
          </div>

          <div className="lg:col-span-7 mt-12 lg:mt-0 relative w-full perspective-[1000px]">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                role="tabpanel"
                id={`panel-${solution.id}`}
                aria-labelledby={`tab-${solution.id}`}
                hidden={activeIndex !== index}
                className="w-full h-full focus:outline-none"
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
      initial={{ opacity: 0, x: 40, rotateY: -5 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 w-full"
    >
      <DashboardPreview title={`${solution.name} Operating View`} className="min-h-[450px] shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center py-12 px-6 h-full space-y-6">
          <div className="p-4 rounded-2xl bg-brand-50 text-brand-600 shadow-sm border border-brand-100">
            <Icon className="h-12 w-12" />
          </div>
          <div className="space-y-2 max-w-md">
            <h3 className="text-2xl font-bold text-foreground">{solution.name} Portal</h3>
            <p className="text-muted-foreground text-sm">
              A dedicated operating view tailored specifically for {solution.name.toLowerCase()} workflows and requirements.
            </p>
          </div>
          <div className="pt-4 w-full max-w-xs space-y-3 relative z-20">
            <MetricCard title="System Readiness" value="Optimised" trend="Configured for you" trendUp={true} delay={0.1} />
            <Button className="w-full shadow-md" asChild>
              <Link href={solution.href} tabIndex={0}>View {solution.name} Capabilities</Link>
            </Button>
          </div>
          <div className="absolute bottom-4 text-center w-full start-0 z-10 pointer-events-none">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Conceptual Representation</span>
          </div>
        </div>
      </DashboardPreview>
      {/* Decorative background glows */}
      <div className="absolute -z-10 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-brand-400/20 blur-[100px] rounded-full pointer-events-none"></div>
    </motion.div>
  )
}
