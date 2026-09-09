"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bell, Users, BookOpen, CreditCard } from "lucide-react"
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
    id: "platform",
    eyebrow: "Intelligent School Management Platform",
    title: (
      <>
        Building Smarter Schools, <br className="hidden sm:block" />
        <span className="text-blue-400">With AI.</span>
      </>
    ),
    description: "Automate administration, predict student outcomes, optimise fee collection, and empower your teachers on one unified platform used by 300+ institutions.",
    primaryCta: "Book a Demo",
    primaryHref: "/book-demo",
    secondaryCta: "Explore Platform",
    dashboardTab: "overview",
    rotation: { x: 12, y: -8, z: 0, scale: 0.95 },
  },
  {
    id: "academics",
    eyebrow: "Academic Management",
    title: (
      <>
        Predict Outcomes, <br className="hidden sm:block" />
        <span className="text-blue-400">Drive Success.</span>
      </>
    ),
    description: "Empower teachers with live insights. Track academic performance and receive early warnings for students requiring support before they fall behind.",
    primaryCta: "Learn More",
    primaryHref: "/features/academics",
    dashboardTab: "academics",
    rotation: { x: 5, y: -15, z: 0, scale: 0.98 },
  },
  {
    id: "attendance",
    eyebrow: "Live Roster Syncing",
    title: (
      <>
        Automated <br className="hidden sm:block" />
        <span className="text-blue-400">Attendance.</span>
      </>
    ),
    description: "Eliminate manual roll calls. Our system securely logs student presence, instantly syncing data to parent portals and academic dashboards in real-time.",
    primaryCta: "Explore Features",
    primaryHref: "/features/attendance",
    dashboardTab: "attendance",
    rotation: { x: -5, y: -5, z: 0, scale: 1.0 },
  },
  {
    id: "fees",
    eyebrow: "Financial Operations",
    title: (
      <>
        Optimise <br className="hidden sm:block" />
        <span className="text-blue-400">Fee Collection.</span>
      </>
    ),
    description: "Achieve up to 94% on-time fee collection. Automate payment reminders, manage invoices, and provide parents with a seamless digital payment experience.",
    primaryCta: "View Solutions",
    primaryHref: "/solutions/finance",
    dashboardTab: "fees",
    rotation: { x: 8, y: 10, z: 0, scale: 0.98 },
  },
  {
    id: "connect",
    eyebrow: "Enterprise EdTech",
    title: (
      <>
        Ready to Transform <br className="hidden sm:block" />
        <span className="text-blue-400">Your School?</span>
      </>
    ),
    description: "Join the growing network of forward-thinking institutions leveraging Smart School AI to reduce administrative workload by up to 68%.",
    primaryCta: "Book a Demo",
    primaryHref: "/book-demo",
    secondaryCta: "Contact Sales",
    dashboardTab: "overview",
    rotation: { x: 0, y: 0, z: 0, scale: 1.05 },
  }
]

// --------------------------------------------------------
// 2. SCROLL STORY CONTENT COMPONENT
// --------------------------------------------------------
function ScrollStoryContent({ activeChapter }: { activeChapter: number }) {
  const chapter = CHAPTERS[activeChapter]

  return (
    <div className="relative min-h-[400px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={chapter.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full relative z-20"
        >
          <Badge variant="default" className="mb-6 py-1.5 px-4 text-sm bg-blue-500/10 text-white hover:bg-blue-500/20 border border-blue-500/20 shadow-sm backdrop-blur-md">
            {chapter.eyebrow}
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {chapter.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 font-medium mb-10 max-w-2xl lg:mx-0">
            {chapter.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-6 sm:px-8 text-base w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20" asChild>
              <Link href={chapter.primaryHref}>
                {chapter.primaryCta}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
            {chapter.secondaryCta && (
              <Button size="lg" variant="outline" className="h-14 px-6 sm:px-8 text-base bg-white/5 text-white border-white/20 hover:bg-white/10 w-full sm:w-auto shadow-sm transition-colors" asChild>
                <Link href="/features">
                  {chapter.secondaryCta}
                </Link>
              </Button>
            )}
          </div>
          
          {/* Trust Signals (only on first and last chapter) */}
          {(activeChapter === 0 || activeChapter === 4) && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mt-10 flex items-center gap-x-6 text-sm text-white/70 font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">✓</span>
                ISO 27001 Certified
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">✓</span>
                99.9% Uptime SLA
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// --------------------------------------------------------
// 3. SCROLL STORY PRODUCT COMPONENT
// --------------------------------------------------------
function ScrollStoryProduct({ activeChapter, mouseX, mouseY }: { activeChapter: number, mouseX: any, mouseY: any }) {
  const prefersReducedMotion = useReducedMotion()
  const chapter = CHAPTERS[activeChapter]
  
  // 3D Target values based on current chapter
  const targetRotation = chapter.rotation

  return (
    <div className="relative w-full perspective-[1500px]">
      
      {/* 3D Scene Wrapper */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          rotateX: targetRotation.x,
          rotateY: targetRotation.y,
          scale: targetRotation.scale,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Mouse parallax wrapper */}
        <motion.div
          style={prefersReducedMotion ? {} : { rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
          className="relative w-full"
        >
          {/* Floating Modules */}
          <motion.div 
            animate={{ 
              opacity: chapter.dashboardTab === "academics" ? 1 : 0.4,
              scale: chapter.dashboardTab === "academics" ? 1.05 : 1,
              translateZ: chapter.dashboardTab === "academics" ? 80 : 50
            }}
            className={`absolute -start-10 top-10 hidden xl:flex items-center gap-3 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl z-30 transition-colors duration-500 ${chapter.dashboardTab === "academics" ? 'bg-blue-600/30 border-blue-400/50' : 'bg-slate-900/80'}`}
          >
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex flex-col pe-2">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Module</span>
              <span className="text-sm font-semibold text-white">Academics</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              opacity: chapter.dashboardTab === "fees" ? 1 : 0.4,
              scale: chapter.dashboardTab === "fees" ? 1.05 : 1,
              translateZ: chapter.dashboardTab === "fees" ? 80 : 50
            }}
            className={`absolute -end-8 top-1/2 hidden xl:flex items-center gap-3 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl z-30 transition-colors duration-500 ${chapter.dashboardTab === "fees" ? 'bg-emerald-600/30 border-emerald-400/50' : 'bg-slate-900/80'}`}
          >
            <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="flex flex-col pe-2">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Status</span>
              <span className="text-sm font-semibold text-white">Fee Collected</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              opacity: chapter.dashboardTab === "attendance" ? 1 : 0.4,
              scale: chapter.dashboardTab === "attendance" ? 1.05 : 1,
              translateZ: chapter.dashboardTab === "attendance" ? 80 : 50
            }}
            className={`absolute start-12 -bottom-6 hidden xl:flex items-center gap-3 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl z-30 transition-colors duration-500 ${chapter.dashboardTab === "attendance" ? 'bg-purple-600/30 border-purple-400/50' : 'bg-slate-900/80'}`}
          >
            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-purple-400" />
            </div>
            <div className="flex flex-col pe-2">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Sync</span>
              <span className="text-sm font-semibold text-white">Live Roster</span>
            </div>
          </motion.div>

          {/* Dashboard Core */}
          <DashboardPreview className="w-full min-h-[420px] shadow-2xl shadow-black/50 border-white/10 bg-[#0f172a] transform translate-z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.dashboardTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* OVERVIEW UI */}
                {chapter.dashboardTab === "overview" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Morning Briefing</h3>
                        <p className="text-sm text-muted-foreground">Live Insights</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Bell className="h-5 w-5 text-blue-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <MetricCard title="System Status" value="Online" trend="All modules active" trendUp={true} delay={0.1} icon={<BookOpen className="h-5 w-5" />} />
                      <MetricCard title="Workload Efficiency" value="68%" trend="Admin time saved" trendUp={true} delay={0.2} icon={<Users className="h-5 w-5" />} />
                    </div>
                    <div className="bg-background rounded-lg border border-white/5 p-4">
                      <h4 className="text-sm font-medium mb-3 text-foreground">Active Subsystems</h4>
                      <DataTableRow delay={0.3} columns={[<span key="1">Academic Sync</span>, <StatusBadge key="2" status="success" label="Healthy" />]} />
                      <DataTableRow delay={0.4} columns={[<span key="1">Payment Gateway</span>, <StatusBadge key="2" status="success" label="Connected" />]} />
                    </div>
                  </>
                )}

                {/* ACADEMICS UI */}
                {chapter.dashboardTab === "academics" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Academic Monitoring</h3>
                        <p className="text-sm text-muted-foreground">Early Warning System</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-blue-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <MetricCard title="Class Assessments" value="Logged" trend="Real-time syncing" trendUp={true} delay={0.1} />
                      <MetricCard title="At-Risk Alerts" value="2" trend="Review suggested" trendUp={false} delay={0.2} />
                    </div>
                    <div className="bg-background rounded-lg border border-white/5 p-4">
                      <h4 className="text-sm font-medium mb-3 text-foreground">Student Insight</h4>
                      <DataTableRow delay={0.3} columns={[<span key="1">Student A (Math)</span>, <StatusBadge key="2" status="warning" label="Support Needed" />]} />
                      <DataTableRow delay={0.4} columns={[<span key="1">Student B (Science)</span>, <StatusBadge key="2" status="success" label="On Track" />]} />
                    </div>
                  </>
                )}

                {/* ATTENDANCE UI */}
                {chapter.dashboardTab === "attendance" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Attendance Sync</h3>
                        <p className="text-sm text-muted-foreground">Log Processing</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                    <MetricCard title="Total Present" value="Tracking" trend="Live Updating" trendUp={true} delay={0.1} />
                    <div className="mt-4 border border-white/5 rounded-lg overflow-hidden bg-background">
                      <div className="bg-white/5 px-4 py-2 text-xs font-medium text-muted-foreground flex justify-between">
                        <span>Student Roster</span>
                        <span>Status</span>
                      </div>
                      <DataTableRow delay={0.2} columns={[<span key="1" className="font-mono">Student A</span>, <StatusBadge key="2" status="success" label="Present" />]} />
                      <DataTableRow delay={0.3} columns={[<span key="1" className="font-mono">Student B</span>, <StatusBadge key="2" status="danger" label="Absent" />]} />
                      <DataTableRow delay={0.4} columns={[<span key="1" className="font-mono">Student C</span>, <StatusBadge key="2" status="warning" label="Late" />]} />
                    </div>
                  </>
                )}

                {/* FEES UI */}
                {chapter.dashboardTab === "fees" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Financial Operations</h3>
                        <p className="text-sm text-muted-foreground">Automated Reminders</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-emerald-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <MetricCard title="Collection Rate" value="94%" trend="Target Reached" trendUp={true} delay={0.1} />
                      <MetricCard title="Auto-Reminders" value="Active" delay={0.2} />
                    </div>
                    <ChartPreview />
                  </>
                )}

              </motion.div>
            </AnimatePresence>
          </DashboardPreview>
        </motion.div>
      </motion.div>

      {/* Base Glowing Platform */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/20 blur-2xl rounded-full scale-y-50 pointer-events-none z-0"></div>

      <div className="mt-6 text-center relative z-20">
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Illustrative Product View</span>
      </div>

      {/* Atmospheric Decorative elements */}
      <div className="absolute -z-20 -top-10 -end-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px] pointer-events-none transition-all duration-1000"></div>
      <div className="absolute -z-20 -bottom-10 -start-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none transition-all duration-1000"></div>
    </div>
  )
}

// --------------------------------------------------------
// 4. SCROLL STORY PROGRESS COMPONENT
// --------------------------------------------------------
function ScrollStoryProgress({ activeChapter, onDotClick }: { activeChapter: number, onDotClick: (idx: number) => void }) {
  return (
    <div className="hidden lg:flex flex-col gap-4 absolute left-4 top-1/2 -translate-y-1/2 z-50">
      {CHAPTERS.map((chap, idx) => (
        <button 
          key={chap.id}
          onClick={() => onDotClick(idx)}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label={`Skip to ${chap.eyebrow}`}
        >
          <div className="relative flex items-center justify-center h-6 w-6">
            <div className={`absolute w-full h-full rounded-full border-2 transition-all duration-300 ${activeChapter === idx ? 'border-blue-400 scale-100' : 'border-transparent scale-50 group-hover:border-white/20'}`} />
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeChapter === idx ? 'bg-blue-400' : 'bg-white/30 group-hover:bg-white/60'}`} />
          </div>
          <span className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeChapter === idx ? 'text-white translate-x-0 opacity-100' : 'text-white/30 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
            0{idx + 1}
          </span>
        </button>
      ))}
    </div>
  )
}

// --------------------------------------------------------
// 5. MAIN HERO COMPONENT
// --------------------------------------------------------
export function Hero() {
  const [activeChapter, setActiveChapter] = React.useState(0)
  const prefersReducedMotion = useReducedMotion()

  // Scroll Container setup
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Calculate Active Chapter based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We have 5 chapters. Divide progress evenly.
    // 0.0 - 0.2: Ch 0
    // 0.2 - 0.4: Ch 1
    // 0.4 - 0.6: Ch 2
    // 0.6 - 0.8: Ch 3
    // 0.8 - 1.0: Ch 4
    let chapter = Math.floor(latest * CHAPTERS.length)
    if (chapter >= CHAPTERS.length) chapter = CHAPTERS.length - 1
    if (chapter !== activeChapter) {
      setActiveChapter(chapter)
    }
  })

  // Smooth scroll indicator fade
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0])

  // Desktop Pointer tracking
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 6) // Max 3deg tilt
    mouseY.set(y * -6)
  }

  const handleDotClick = (idx: number) => {
    if (!containerRef.current) return
    // Scroll window to specific chapter
    const vh = window.innerHeight
    const targetScroll = containerRef.current.offsetTop + (vh * idx)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    // 500vh container creates the scroll distance
    <div ref={containerRef} className="relative h-[500vh] bg-[#0A192F]">
      
      {/* Sticky viewport locks content while scrolling down the 500vh container */}
      <div 
        className="sticky top-0 h-[100svh] overflow-hidden flex flex-col justify-center pt-16"
        onMouseMove={handleMouseMove}
      >
        
        {/* Deep Royal Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-[#020617] opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-y-0 end-0 w-full lg:w-1/2 bg-gradient-to-l from-blue-500/15 to-transparent opacity-60"></div>
        
        <ScrollStoryProgress activeChapter={activeChapter} onDotClick={handleDotClick} />

        {/* Main Content Grid */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pl-8 lg:pl-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Story Content */}
            <div className="lg:col-span-6 w-full text-center lg:text-start mb-8 lg:mb-0">
              <ScrollStoryContent activeChapter={activeChapter} />
            </div>

            {/* RIGHT SIDE: 3D Product Visualization */}
            <div className="lg:col-span-6 w-full hidden sm:block">
              <ScrollStoryProduct activeChapter={activeChapter} mouseX={mouseX} mouseY={mouseY} />
            </div>

          </div>
        </div>

        {/* Mobile Product Fallback (No 3D, static underneath) */}
        <div className="block sm:hidden relative z-10 w-full px-4 mt-8 pb-12">
          <ScrollStoryProduct activeChapter={activeChapter} mouseX={0} mouseY={0} />
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: prefersReducedMotion ? 0 : scrollIndicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-blue-400 rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
