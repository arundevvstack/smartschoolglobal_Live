"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { ArrowRight, LayoutDashboard, CheckCircle2, Clock, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"
import { DataTableRow } from "@/components/ui/product/DataTableRow"
import { ChartPreview } from "@/components/ui/product/ChartPreview"
import { StatusBadge } from "@/components/ui/product/StatusBadge"

// --------------------------------------------------------
// 1. VERIFIED CHAPTER DATA
// --------------------------------------------------------
const CHAPTERS = [
  {
    id: "admin-overload",
    number: "01",
    title: (
      <>
        Administrative <br className="hidden lg:block" />
        <span className="text-blue-400">Overload</span>
      </>
    ),
    description: "School staff lose hours every day on manual attendance, fee follow-ups, reports, and scheduling — leaving little room for education.",
    scatteredElements: ["Manual Reports", "Paper Attendance", "Scheduling Conflicts", "Approval Delays"],
    outcomeMetric: "68% reduction in admin workload",
    outcomeSubtext: "3.5 hrs saved per teacher/wk",
  },
  {
    id: "fee-collection",
    number: "02",
    title: (
      <>
        Fee Collection <br className="hidden lg:block" />
        <span className="text-blue-400">Inefficiency</span>
      </>
    ),
    description: "Manual follow-ups on late payments consume valuable staff time and create unpredictable cash flow for school leadership.",
    scatteredElements: ["Late Payments", "Missing Invoices", "Manual Follow-ups", "Cash Flow Gaps"],
    outcomeMetric: "94% average fee collection rate",
    outcomeSubtext: "Automated digital financial operations",
  }
]

// --------------------------------------------------------
// 2. SCATTERED-TO-ORGANIZED TRANSFORMATION UI
// --------------------------------------------------------
function ProductTransformation({ activeChapter }: { activeChapter: number }) {
  const chapter = CHAPTERS[activeChapter]
  // We use a small state machine: "scattered" -> "organizing" -> "dashboard"
  const [phase, setPhase] = React.useState<"scattered" | "dashboard">("scattered")

  React.useEffect(() => {
    setPhase("scattered")
    const timer = setTimeout(() => {
      setPhase("dashboard")
    }, 800) // Elements stay scattered for 800ms before organizing
    return () => clearTimeout(timer)
  }, [activeChapter])

  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center">
      
      {/* PHASE 1: Scattered Problem Elements */}
      <AnimatePresence>
        {phase === "scattered" && (
          <motion.div 
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
          >
            {chapter.scatteredElements.map((el, i) => {
              // Distribute pseudo-randomly around the center
              const angle = (i * (Math.PI * 2)) / chapter.scatteredElements.length
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <motion.div
                  key={el}
                  initial={{ opacity: 0, x: x * 1.5, y: y * 1.5, rotate: Math.random() * 20 - 10 }}
                  animate={{ opacity: 1, x, y, rotate: Math.random() * 10 - 5 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="absolute px-4 py-2 bg-slate-800/80 backdrop-blur-md border border-red-500/30 text-red-200 text-xs font-bold rounded-lg shadow-xl"
                >
                  {el}
                </motion.div>
              )
            })}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
               <div className="h-16 w-16 rounded-full border border-dashed border-white/20 animate-spin-slow flex items-center justify-center"></div>
               <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Analyzing Workflow</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2: Organized Dashboard UI */}
      <AnimatePresence>
        {phase === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full absolute inset-0"
          >
            <DashboardPreview className="w-full h-full rounded-2xl shadow-2xl shadow-blue-900/40 bg-[#0f172a] border-blue-500/20">
              
              {/* Product UI Header Context */}
              <div className="bg-[#0b1120] text-white rounded-t-2xl px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold tracking-wide">Smart School AI Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Live Sync</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {activeChapter === 0 ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">Staff Efficiency Status</h3>
                        <p className="text-xs text-slate-400">Administrative workloads optimized</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <MetricCard title="Time Saved" value="3.5 hrs" trend="Per teacher/wk" trendUp={true} delay={0.1} />
                      <MetricCard title="System" value="Active" trend="Logs & reports" trendUp={true} delay={0.2} />
                    </div>
                    <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-3">
                      <h4 className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-3">Automated Background Tasks</h4>
                      <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs text-slate-300">Attendance Syncing</span>, <StatusBadge key="2" status="success" label="Synced" />]} />
                      <DataTableRow delay={0.4} columns={[<span key="1" className="text-xs text-slate-300">Parent Notifications</span>, <StatusBadge key="2" status="success" label="Sent" />]} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">Financial Operations</h3>
                        <p className="text-xs text-slate-400">Digital collection workflow</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <MetricCard title="Collection Rate" value="94%" trend="Target Reached" trendUp={true} delay={0.1} />
                      <MetricCard title="Pending" value="Auto" trend="Reminders active" trendUp={true} delay={0.2} />
                    </div>
                    <div className="mt-3">
                      <ChartPreview />
                    </div>
                    <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-3 mt-3">
                      <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs font-mono text-slate-300">INV-2024-101</span>, <StatusBadge key="2" status="success" label="Paid" />]} />
                      <DataTableRow delay={0.4} columns={[<span key="1" className="text-xs font-mono text-slate-300">INV-2024-102</span>, <StatusBadge key="2" status="warning" label="Pending" />]} />
                    </div>
                  </>
                )}
              </div>

            </DashboardPreview>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

// --------------------------------------------------------
// 3. MAIN SCROLL COMPONENT
// --------------------------------------------------------
export function ProblemsSolutions() {
  const prefersReducedMotion = useReducedMotion()
  const [activeChapter, setActiveChapter] = React.useState(0)

  // Scroll Container setup
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Calculate Active Chapter based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 0.0 - 0.5: Ch 0
    // 0.5 - 1.0: Ch 1
    let chapter = latest < 0.5 ? 0 : 1
    if (chapter !== activeChapter) {
      setActiveChapter(chapter)
    }
  })

  // 3D Perspective mapped to scroll
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [10, 0, -5])
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-15, 0, 10])
  const translateZ = useTransform(smoothProgress, [0, 0.5, 1], [-50, 0, 50])
  
  // Desktop Pointer tracking
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 6) // Max 3deg pointer tilt
    mouseY.set(y * -6)
  }

  const handleDotClick = (idx: number) => {
    if (!containerRef.current) return
    const vh = window.innerHeight
    const scrollableDistance = vh * 0.5 // 150vh total - 100vh viewport = 50vh scrollable
    // Jump to the exact start of the requested chapter segment
    const targetScroll = containerRef.current.offsetTop + (scrollableDistance * (idx / CHAPTERS.length)) + (vh * 0.05)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    // 150vh container creates a snappier scroll distance
    <section ref={containerRef} className="relative h-[150vh] bg-[#0A192F]">
      
      {/* Sticky viewport locks content while scrolling down the 150vh container */}
      <div 
        className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-center pt-20"
        onMouseMove={handleMouseMove}
      >
        
        {/* Atmospheric Background (Deep Blue to Dark Navy gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#020617] pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Section Editorial Header */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-50">
          <Badge variant="outline" className="border-white/20 bg-white/5 text-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Real Problems. AI Solutions.
          </Badge>
        </div>

        {/* Chapter Navigation Dots (Desktop) */}
        <div className="hidden lg:flex flex-col gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-50">
          {CHAPTERS.map((chap, idx) => (
            <button 
              key={chap.id}
              onClick={() => handleDotClick(idx)}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label={`Skip to ${chap.title}`}
            >
              <div className="relative flex items-center justify-center h-6 w-6">
                <div className={`absolute w-full h-full rounded-full border-2 transition-all duration-300 ${activeChapter === idx ? 'border-blue-400 scale-100' : 'border-transparent scale-50 group-hover:border-white/20'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeChapter === idx ? 'bg-blue-400' : 'bg-white/30 group-hover:bg-white/60'}`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeChapter === idx ? 'text-white translate-x-0 opacity-100' : 'text-white/30 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                {chap.number}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pl-8 lg:pl-32">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Morphing Story Content */}
            <div className="lg:col-span-5 w-full text-center lg:text-left mb-12 lg:mb-0 min-h-[350px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">
                    Problem {CHAPTERS[activeChapter].number}
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                    {CHAPTERS[activeChapter].title}
                  </h2>
                  
                  <p className="text-lg text-white/70 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    {CHAPTERS[activeChapter].description}
                  </p>
                  
                  {/* Verified Outcome Reveal */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg inline-flex flex-col items-start text-left"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest">Verified Outcome</span>
                    </div>
                    <span className="font-bold text-xl text-white">
                      {CHAPTERS[activeChapter].outcomeMetric}
                    </span>
                    <span className="text-sm text-white/50 mt-1">
                      {CHAPTERS[activeChapter].outcomeSubtext}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: 3D Product Stage (Desktop) */}
            <div className="lg:col-span-7 w-full hidden lg:block perspective-[2000px]">
              <motion.div
                style={prefersReducedMotion ? {} : {
                  rotateX: rotateX,
                  rotateY: rotateY,
                  z: translateZ,
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full"
              >
                {/* Pointer Parallax Inner Wrapper */}
                <motion.div
                  style={prefersReducedMotion ? {} : { rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
                  className="relative w-full"
                >
                  <ProductTransformation activeChapter={activeChapter} />
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Mobile Product Fallback (No 3D, static layout underneath) */}
        <div className="block lg:hidden relative z-10 w-full px-4 mt-4 pb-12">
          <ProductTransformation activeChapter={activeChapter} />
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-50"
          initial={{ opacity: 1 }}
        >
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Keep Scrolling</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-blue-400 rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
