"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, BookA, Calculator, Calendar, GraduationCap, Users, Library, ArrowRight, Search, Bell, Layers } from "lucide-react"
import Link from "next/link"

import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"
import { DataTableRow } from "@/components/ui/product/DataTableRow"
import { ChartPreview } from "@/components/ui/product/ChartPreview"
import { StatusBadge } from "@/components/ui/product/StatusBadge"

// --------------------------------------------------------
// 1. VERIFIED FEATURE DATA
// --------------------------------------------------------
const FEATURES = [
  {
    name: "AI Dashboard",
    description: "Get real-time insights and predictive analytics across your entire institution.",
    icon: BarChart3,
    href: "/features/ai-dashboard"
  },
  {
    name: "Student Management",
    description: "Manage admissions, attendance, and student profiles from a single unified database.",
    icon: Users,
    href: "/features/student-management"
  },
  {
    name: "Attendance",
    description: "Track student presence securely and sync data instantly to parent portals.",
    icon: Calendar,
    href: "/features/attendance"
  },
  {
    name: "Exams & Results",
    description: "Manage grading, report cards, and final evaluations with native curricula support.",
    icon: GraduationCap,
    href: "/features/exams"
  },
  {
    name: "Fee Collection",
    description: "Achieve up to 94% on-time fee collection. Integrates with Stripe, PayPal, and local bank gateways.",
    icon: Calculator,
    href: "/features/fees"
  },
  {
    name: "Timetable",
    description: "Coordinate scheduling across all departments and campuses to eliminate conflicts.",
    icon: Calendar,
    href: "/features/timetable"
  },
  {
    name: "Grade Book",
    description: "Maintain comprehensive academic records, track progress, and generate detailed reports.",
    icon: BookA,
    href: "/features/grade-book"
  },
  {
    name: "Parent/Teacher/Student App",
    description: "Keep every stakeholder informed with secure, real-time access through dedicated mobile apps.",
    icon: Users,
    href: "/features/mobile-apps"
  }
]

// --------------------------------------------------------
// 2. MAIN COMPONENT
// --------------------------------------------------------
export function FeatureGrid() {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const activeFeature = FEATURES[activeIdx]

  return (
    <section className="relative bg-slate-950 w-full overflow-hidden border-t border-slate-900">
      
      {/* Abstract Dark Backgrounds */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-6 backdrop-blur-sm">
            <Layers className="w-4 h-4 text-blue-400" /> 
            Unified Ecosystem
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Everything your school needs,<br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> in one platform.</span>
          </h2>
          <p className="text-lg leading-8 text-slate-400 max-w-2xl">
            Eliminate silos and manual data entry. Smart School AI natively connects every department into a single source of truth.
          </p>
        </div>

        {/* Interactive Platform Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-start lg:min-h-[600px]">
          
          {/* LEFT: Feature Selector */}
          <div className="lg:col-span-4 w-full flex flex-col gap-3 relative z-20 mb-10 lg:mb-0 lg:sticky lg:top-32">
            
            {/* Horizontal Scroll on Mobile, Vertical on Desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={feature.name}
                    onClick={() => setActiveIdx(idx)}
                    className={`snap-center flex-shrink-0 lg:flex-shrink flex items-center gap-4 w-[280px] lg:w-full p-4 rounded-2xl text-left transition-all duration-300 relative group overflow-hidden border
                      ${isActive 
                        ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md' 
                        : 'bg-slate-900/40 border-slate-800/50 hover:bg-slate-800/60 hover:border-slate-700/50 backdrop-blur-sm'
                      }
                    `}
                    aria-pressed={isActive}
                  >
                    {/* Active Glow Background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-blue-500/5 w-full h-full pointer-events-none"></div>
                    )}

                    <div className={`p-2.5 rounded-xl transition-colors duration-300 relative z-10
                      ${isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-950 text-slate-500 group-hover:bg-slate-900 group-hover:text-blue-400'}
                    `}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold text-sm transition-colors duration-300 relative z-10
                      ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}
                    `}>
                      {feature.name}
                    </span>
                  </button>
                )
              })}
            </div>
            
            {/* Context/Description Card for Active Feature (Desktop mainly, Mobile shows below) */}
            <div className="hidden lg:block mt-6 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{activeFeature.name}</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    {activeFeature.description}
                  </p>
                  <Link 
                    href={activeFeature.href}
                    className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Product Visualization Stage */}
          <div className="lg:col-span-8 w-full relative perspective-[1200px] overflow-x-hidden lg:overflow-visible lg:sticky lg:top-32">
            
            <motion.div 
              initial={false}
              animate={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="w-full transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Added ring/border styling to make it feel like a premium glass screen in dark mode */}
              <DashboardPreview className="w-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 bg-slate-950 rounded-2xl transition-all duration-500 overflow-hidden">
                
                {/* Product Header (Mac window style) */}
                <div className="bg-[#0f172a] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="bg-slate-900 px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 flex items-center gap-2 border border-slate-800">
                      <Search className="w-3 h-3 text-slate-500" />
                      <span className="truncate max-w-[120px] sm:max-w-[200px]">smartschool.app/{activeFeature.name.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell className="w-4 h-4 text-slate-500" />
                    <div className="w-7 h-7 rounded-full bg-blue-600 border border-blue-500/50 shadow-inner"></div>
                  </div>
                </div>

                {/* Dynamic Content Panel */}
                <div className="p-4 sm:p-8 h-full flex flex-col bg-slate-950/50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full space-y-4 sm:space-y-8"
                    >
                      
                      {/* Contextual UI changes based on feature */}
                      <div className="flex items-center justify-between">
                         <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
                            <activeFeature.icon className="w-6 h-6 text-blue-400" />
                            {activeFeature.name}
                         </h3>
                      </div>

                      {activeFeature.name === "Student Management" && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <MetricCard title="Total Students" value="Active" delay={0.1} />
                            <MetricCard title="New Enrollments" value="Synced" delay={0.2} />
                          </div>
                          <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-inner">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm font-medium text-slate-300">Student Profile Sync</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                            <DataTableRow delay={0.4} columns={[<span key="1" className="text-sm font-medium text-slate-300">Class Allocations</span>, <StatusBadge key="2" status="success" label="Synced" />]} />
                          </div>
                        </>
                      )}

                      {activeFeature.name === "Attendance" && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <MetricCard title="Daily Roster" value="Tracking" delay={0.1} />
                            <MetricCard title="Parent Alerts" value="Automated" delay={0.2} />
                          </div>
                          <div className="mt-4"><ChartPreview /></div>
                        </>
                      )}

                      {activeFeature.name === "Exams & Results" && (
                        <>
                          <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4 sm:p-6 mb-6 shadow-inner">
                            <DataTableRow delay={0.1} columns={[<span key="1" className="text-sm font-medium text-slate-300">Term 1 Marksheets</span>, <StatusBadge key="2" status="success" label="Published" />]} />
                            <DataTableRow delay={0.2} columns={[<span key="1" className="text-sm font-medium text-slate-300">Final Evaluations</span>, <StatusBadge key="2" status="warning" label="Draft" />]} />
                          </div>
                          <ChartPreview />
                        </>
                      )}

                      {activeFeature.name === "Fee Collection" && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <MetricCard title="Payment Gateways" value="Online" delay={0.1} />
                            <MetricCard title="Collection Rate" value="94%" delay={0.2} trend="Target reached" trendUp={true} />
                          </div>
                          <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-inner mt-6">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm font-mono text-slate-400">INV-001</span>, <StatusBadge key="2" status="success" label="Paid" />]} />
                            <DataTableRow delay={0.4} columns={[<span key="1" className="text-sm font-mono text-slate-400">INV-002</span>, <StatusBadge key="2" status="warning" label="Pending" />]} />
                          </div>
                        </>
                      )}

                      {activeFeature.name === "Timetable" && (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[250px] bg-slate-900/30 rounded-2xl border border-white/5 p-6 text-center shadow-inner">
                          <Calendar className="w-12 h-12 text-blue-500/50 mb-4" />
                          <span className="text-base text-slate-400 font-bold">Master Schedule Connected</span>
                        </div>
                      )}

                      {activeFeature.name === "Parent/Teacher/Student App" && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <MetricCard title="Portal Access" value="Live" delay={0.1} />
                            <MetricCard title="App Sync" value="Real-time" delay={0.2} />
                          </div>
                          <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-inner mt-6">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm font-medium text-slate-300">Push Notifications</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                          </div>
                        </>
                      )}

                      {(activeFeature.name === "Analytics" || activeFeature.name === "AI Dashboard") && (
                        <div className="flex gap-6 mt-4">
                           <div className="flex-1"><ChartPreview /></div>
                           <div className="flex-1 hidden sm:block"><ChartPreview /></div>
                        </div>
                      )}

                      {/* Fallback */}
                      {![
                        "Student Management", "Attendance", "Exams & Results", "Fee Collection", 
                        "Timetable", "Parent/Teacher/Student App", "Analytics", "AI Dashboard"
                      ].includes(activeFeature.name) && (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[250px] bg-slate-900/30 rounded-2xl border border-white/5 p-6 text-center shadow-inner">
                          <activeFeature.icon className="w-12 h-12 text-blue-500/50 mb-4" />
                          <span className="text-base text-slate-400 font-bold">{activeFeature.name} Integrated Workspace</span>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>
              </DashboardPreview>
            </motion.div>

            {/* Mobile-only Context/Description Card */}
            <div className="block lg:hidden mt-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">{activeFeature.name}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {activeFeature.description}
              </p>
              <Link 
                href={activeFeature.href}
                className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
