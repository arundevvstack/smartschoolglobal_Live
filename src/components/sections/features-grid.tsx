"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, BookA, Calculator, Calendar, GraduationCap, Users, Library, ArrowRight, Search, Bell, BookOpen } from "lucide-react"
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
  },
  {
    name: "Analytics",
    description: "Gain live visibility into academic performance, attendance trends, and financial health.",
    icon: BarChart3,
    href: "/features/analytics"
  },
  {
    name: "Library",
    description: "Manage book inventories, track issued assets, and automate return reminders.",
    icon: Library,
    href: "/features/library"
  },
  {
    name: "Stakehoder APP",
    description: "A centralized application bridging communication between management, staff, and external partners.",
    icon: Users,
    href: "/features/stakeholder-app"
  },
  {
    name: "HR",
    description: "Manage staff records, payroll, leave requests, and performance evaluations seamlessly.",
    icon: Users,
    href: "/features/hr"
  },
  {
    name: "Accounts",
    description: "Comprehensive financial management, ledger tracking, and automated reporting.",
    icon: Calculator,
    href: "/features/accounts"
  },
  {
    name: "More",
    description: "Explore dozens of other modules designed to streamline every aspect of school operations.",
    icon: Search,
    href: "/features"
  }
]

// --------------------------------------------------------
// 2. MAIN COMPONENT
// --------------------------------------------------------
export function FeatureGrid() {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const activeFeature = FEATURES[activeIdx]

  return (
    <section className="relative bg-white w-full">
      {/* Outer container provides scroll distance for sticky experience if needed, but here we use a flexible sticky structure */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <span className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest">
            Connected Operations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Everything your school needs,<br className="hidden sm:block"/>
            <span className="text-blue-600">in one platform.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
            Eliminate silos and manual data entry. Smart School AI natively connects every department.
          </p>
        </div>

        {/* Interactive Platform Grid - Designed for Viewport Fit */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-start lg:min-h-[600px]">
          
          {/* LEFT: Feature Selector */}
          <div className="lg:col-span-4 w-full flex flex-col gap-2 relative z-20 mb-8 lg:mb-0 lg:sticky lg:top-32">
            
            {/* Horizontal Scroll on Mobile, Vertical on Desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={feature.name}
                    onClick={() => setActiveIdx(idx)}
                    className={`snap-center flex-shrink-0 lg:flex-shrink flex items-center gap-4 w-[260px] lg:w-full p-4 rounded-xl text-left transition-all duration-300 relative group border-2
                      ${isActive 
                        ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20' 
                        : 'bg-white border-transparent hover:bg-blue-50 hover:border-blue-100'
                      }
                    `}
                    aria-pressed={isActive}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300
                      ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'}
                    `}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold text-sm transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-slate-950'}
                    `}>
                      {feature.name}
                    </span>
                  </button>
                )
              })}
            </div>
            
            {/* Context/Description Card for Active Feature (Desktop mainly, Mobile shows below) */}
            <div className="hidden lg:block mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-slate-950 mb-3">{activeFeature.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {activeFeature.description}
                  </p>
                  <Link 
                    href={activeFeature.href}
                    className="group inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                  >
                    Learn more <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              <DashboardPreview className="w-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] shadow-2xl bg-slate-950 border border-slate-800 transition-all duration-500 overflow-hidden">
                
                {/* Product Header */}
                <div className="bg-[#0b1120] text-white rounded-t-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="bg-white/5 px-2 sm:px-3 py-1 rounded text-xs font-mono text-slate-300 flex items-center gap-2">
                      <Search className="w-3 h-3 text-slate-500" />
                      <span className="truncate max-w-[120px] sm:max-w-[200px]">smartschool.app/{activeFeature.name.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Bell className="w-4 h-4 text-slate-400" />
                    <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                  </div>
                </div>

                {/* Dynamic Content Panel */}
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full space-y-4 sm:space-y-6"
                    >
                      
                      {/* Contextual UI changes based on feature */}
                      <div className="flex items-center justify-between mb-4">
                         <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            <activeFeature.icon className="w-5 h-5 text-blue-400" />
                            {activeFeature.name} Module
                         </h3>
                      </div>

                      {activeFeature.name === "Student Management" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricCard title="Total Students" value="Active" delay={0.1} />
                            <MetricCard title="New Enrollments" value="Synced" delay={0.2} />
                          </div>
                          <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300">Student Profile Sync</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                            <DataTableRow delay={0.4} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300">Class Allocations</span>, <StatusBadge key="2" status="success" label="Synced" />]} />
                          </div>
                        </>
                      )}

                      {activeFeature.name === "Attendance" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricCard title="Daily Roster" value="Tracking" delay={0.1} />
                            <MetricCard title="Parent Alerts" value="Automated" delay={0.2} />
                          </div>
                          <ChartPreview />
                        </>
                      )}

                      {activeFeature.name === "Exams & Results" && (
                        <>
                          <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4 mb-4">
                            <DataTableRow delay={0.1} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300">Term 1 Marksheets</span>, <StatusBadge key="2" status="success" label="Published" />]} />
                            <DataTableRow delay={0.2} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300">Final Evaluations</span>, <StatusBadge key="2" status="warning" label="Draft" />]} />
                          </div>
                          <ChartPreview />
                        </>
                      )}

                      {activeFeature.name === "Fee Collection" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricCard title="Payment Gateways" value="Online" delay={0.1} />
                            <MetricCard title="Collection Rate" value="94%" delay={0.2} trend="Target reached" trendUp={true} />
                          </div>
                          <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4 mt-4">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300 font-mono">INV-001</span>, <StatusBadge key="2" status="success" label="Paid" />]} />
                            <DataTableRow delay={0.4} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300 font-mono">INV-002</span>, <StatusBadge key="2" status="warning" label="Pending" />]} />
                          </div>
                        </>
                      )}

                      {activeFeature.name === "Timetable" && (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[250px] bg-white/5 rounded-xl border border-white/5 p-4 text-center">
                          <Calendar className="w-10 h-10 text-slate-500 mb-3" />
                          <span className="text-sm text-slate-400 font-medium">Master Schedule Connected</span>
                        </div>
                      )}

                      {activeFeature.name === "Parent/Teacher/Student App" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricCard title="Portal Access" value="Live" delay={0.1} />
                            <MetricCard title="App Sync" value="Real-time" delay={0.2} />
                          </div>
                          <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4 mt-4">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300">Push Notifications</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                          </div>
                        </>
                      )}

                      {(activeFeature.name === "Analytics" || activeFeature.name === "AI Dashboard") && (
                        <div className="flex gap-4">
                           <div className="flex-1"><ChartPreview /></div>
                           <div className="flex-1 hidden sm:block"><ChartPreview /></div>
                        </div>
                      )}

                      {activeFeature.name === "Library" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <MetricCard title="Asset Catalog" value="Indexed" delay={0.1} />
                            <MetricCard title="Reservations" value="Active" delay={0.2} />
                          </div>
                          <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4 mt-4">
                            <DataTableRow delay={0.3} columns={[<span key="1" className="text-xs sm:text-sm text-slate-300 font-mono">BK-4921</span>, <StatusBadge key="2" status="success" label="Available" />]} />
                          </div>
                        </>
                      )}

                      {/* Fallback for other items like HR, Accounts, etc. */}
                      {![
                        "Student Management", "Attendance", "Exams & Results", "Fee Collection", 
                        "Timetable", "Parent/Teacher/Student App", "Analytics", "AI Dashboard", "Library"
                      ].includes(activeFeature.name) && (
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[250px] bg-white/5 rounded-xl border border-white/5 p-4 text-center">
                          <activeFeature.icon className="w-10 h-10 text-slate-500 mb-3" />
                          <span className="text-sm text-slate-400 font-medium">{activeFeature.name} Integrated Workspace</span>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>
              </DashboardPreview>
            </motion.div>

            {/* Mobile-only Context/Description Card */}
            <div className="block lg:hidden mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-slate-950 mb-3">{activeFeature.name}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {activeFeature.description}
              </p>
              <Link 
                href={activeFeature.href}
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
              >
                Learn more <ArrowRight className="ml-1.5 w-4 h-4 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
