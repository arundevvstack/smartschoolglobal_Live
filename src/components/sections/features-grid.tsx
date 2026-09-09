"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, BookA, Calculator, Calendar, GraduationCap, Users, Library, ArrowRight, LayoutDashboard, Search, Bell } from "lucide-react"
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
    name: "Student Management",
    description: "[CONTENT REQUIRED]",
    icon: Users,
    href: "/features/student-management"
  },
  {
    name: "Attendance",
    description: "[CONTENT REQUIRED]",
    icon: Calendar,
    href: "/features/attendance"
  },
  {
    name: "Exams & Results",
    description: "[CONTENT REQUIRED]",
    icon: GraduationCap,
    href: "/features/exams"
  },
  {
    name: "Fee Collection",
    description: "Integrates with Stripe, PayPal, and local bank gateways.", // Verified
    icon: Calculator,
    href: "/features/fees"
  },
  {
    name: "Timetable", // Unverified "AI" removed
    description: "[CONTENT REQUIRED]",
    icon: Calendar,
    href: "/features/timetable"
  },
  {
    name: "Parent Portal",
    description: "[CONTENT REQUIRED]",
    icon: Users,
    href: "/features/parent-portal"
  },
  {
    name: "Analytics",
    description: "[CONTENT REQUIRED]", // Unverified metric removed
    icon: BarChart3,
    href: "/features/analytics"
  },
  {
    name: "Library",
    description: "[CONTENT REQUIRED]",
    icon: Library,
    href: "/features/library"
  }
]

// --------------------------------------------------------
// 2. MAIN COMPONENT
// --------------------------------------------------------
export function FeatureGrid() {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const activeFeature = FEATURES[activeIdx]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest">
            Connected Operations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Everything your school needs,<br className="hidden sm:block"/>
            <span className="text-blue-600">in one platform.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Eliminate silos and manual data entry. Smart School AI natively connects every department.
          </p>
        </motion.div>

        {/* Interactive Platform Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT: Feature Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2 relative z-20">
            {/* Mobile Horizontal Scroll Container */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={feature.name}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex-shrink-0 lg:flex-shrink flex items-center gap-4 w-[240px] lg:w-full p-4 rounded-xl text-left transition-all duration-300 relative group
                      ${isActive 
                        ? 'bg-blue-600 shadow-lg shadow-blue-600/20 ring-1 ring-blue-500' 
                        : 'bg-white hover:bg-blue-50 ring-1 ring-slate-200 hover:ring-blue-200'
                      }
                    `}
                    aria-pressed={isActive}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300
                      ${isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'}
                    `}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold text-sm transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-slate-700 group-hover:text-blue-700'}
                    `}>
                      {feature.name}
                    </span>
                    
                    {/* Connecting subtle line on Desktop for active item */}
                    {isActive && (
                      <div className="hidden lg:block absolute -right-8 w-8 h-[2px] bg-gradient-to-r from-blue-600 to-transparent pointer-events-none" />
                    )}
                  </button>
                )
              })}
            </div>
            
            {/* Context/Description Card for Active Feature */}
            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{activeFeature.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {activeFeature.description}
                  </p>
                  <Link 
                    href={activeFeature.href}
                    className="group inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT: Product Visualization Stage */}
          <div className="lg:col-span-8 w-full relative perspective-[1200px]">
            {/* Outer Stage Environment */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-white/20 rounded-[2.5rem] -m-6 -z-10 border border-blue-50 shadow-inner" />
            
            {/* The Connected Platform Dashboard */}
            <DashboardPreview className="w-full min-h-[500px] shadow-2xl shadow-blue-900/10 bg-[#0f172a] border border-blue-500/20 transition-all duration-500">
              
              {/* Product Header */}
              <div className="bg-[#0b1120] text-white rounded-t-2xl px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded text-xs font-mono text-slate-300 flex items-center gap-2">
                    <Search className="w-3 h-3" />
                    <span>smartschool.app/{activeFeature.name.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Bell className="w-4 h-4 text-slate-400" />
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="p-6 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, z: -20, scale: 0.98 }}
                    animate={{ opacity: 1, z: 0, scale: 1 }}
                    exit={{ opacity: 0, z: -10, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    
                    {/* MODULE 0: Student Management */}
                    {activeIdx === 0 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Student Roster</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                          <MetricCard title="Total Students" value="Loading..." delay={0.1} />
                          <MetricCard title="New Enrollments" value="Status" delay={0.2} />
                        </div>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4">
                          <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm text-slate-300">Student Profile Sync</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                          <DataTableRow delay={0.4} columns={[<span key="1" className="text-sm text-slate-300">Class Allocations</span>, <StatusBadge key="2" status="success" label="Synced" />]} />
                        </div>
                      </>
                    )}

                    {/* MODULE 1: Attendance */}
                    {activeIdx === 1 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Daily Attendance</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <MetricCard title="Status" value="Tracking Active" delay={0.1} />
                          <MetricCard title="Alerts" value="Automated" delay={0.2} />
                        </div>
                        <ChartPreview />
                      </>
                    )}

                    {/* MODULE 2: Exams & Results */}
                    {activeIdx === 2 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Academic Evaluation</h3>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4 mb-4">
                          <DataTableRow delay={0.1} columns={[<span key="1" className="text-sm text-slate-300">Term 1 Marksheets</span>, <StatusBadge key="2" status="success" label="Published" />]} />
                          <DataTableRow delay={0.2} columns={[<span key="1" className="text-sm text-slate-300">Final Evaluations</span>, <StatusBadge key="2" status="warning" label="Draft" />]} />
                        </div>
                        <ChartPreview />
                      </>
                    )}

                    {/* MODULE 3: Fee Collection */}
                    {activeIdx === 3 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Financial Operations</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {/* Stripe/PayPal is verified so we can refer to Payment Gateways */}
                          <MetricCard title="Gateway Integrations" value="Online" delay={0.1} />
                          <MetricCard title="Transactions" value="Processing" delay={0.2} />
                        </div>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4">
                          <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm text-slate-300 font-mono text-xs">TRX-001</span>, <StatusBadge key="2" status="success" label="Verified" />]} />
                          <DataTableRow delay={0.4} columns={[<span key="1" className="text-sm text-slate-300 font-mono text-xs">TRX-002</span>, <StatusBadge key="2" status="warning" label="Pending" />]} />
                        </div>
                      </>
                    )}

                    {/* MODULE 4: Timetable */}
                    {activeIdx === 4 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Master Schedule</h3>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4 h-[200px] flex items-center justify-center">
                           <span className="text-sm text-slate-500 font-medium tracking-wide">Interactive Timetable Visualization</span>
                        </div>
                      </>
                    )}

                    {/* MODULE 5: Parent Portal */}
                    {activeIdx === 5 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Parent Communication</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <MetricCard title="Portal Access" value="Live" delay={0.1} />
                          <MetricCard title="Notifications" value="Routed" delay={0.2} />
                        </div>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4">
                          <DataTableRow delay={0.3} columns={[<span key="1" className="text-sm text-slate-300">Push Notification Engine</span>, <StatusBadge key="2" status="success" label="Active" />]} />
                        </div>
                      </>
                    )}

                    {/* MODULE 6: Analytics */}
                    {activeIdx === 6 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Insights & Reporting</h3>
                        <div className="w-full flex gap-4">
                           <div className="flex-1"><ChartPreview /></div>
                           <div className="flex-1 hidden sm:block"><ChartPreview /></div>
                        </div>
                      </>
                    )}

                    {/* MODULE 7: Library */}
                    {activeIdx === 7 && (
                      <>
                        <h3 className="text-lg font-bold text-white mb-4">Asset Catalog</h3>
                        <div className="bg-[#1e293b]/50 rounded-xl border border-white/5 p-4">
                          <DataTableRow delay={0.1} columns={[<span key="1" className="text-sm text-slate-300 font-mono text-xs">BK-4921</span>, <StatusBadge key="2" status="success" label="Available" />]} />
                          <DataTableRow delay={0.2} columns={[<span key="1" className="text-sm text-slate-300 font-mono text-xs">BK-1024</span>, <StatusBadge key="2" status="warning" label="Issued" />]} />
                        </div>
                      </>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

            </DashboardPreview>
          </div>

        </div>
      </div>
    </section>
  )
}
