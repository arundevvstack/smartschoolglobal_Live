"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Users, Calendar, BookOpen, CreditCard, Clock, MessageSquare, BarChart3, Library, ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featureCategories = ["All", "Core Administration", "Academics", "Finance", "Communication", "Analytics"]

const features = [
  {
    id: "ai-dashboard",
    name: "AI Dashboard",
    category: "Analytics",
    icon: BarChart3,
    description: "Get real-time insights and predictive analytics across your entire institution.",
    verifiedMetric: "Over 500+ daily active dashboards.",
    related: ["student-management", "analytics"],
    previewText: "Instantly see school performance metrics, predict enrollment trends, and monitor daily operations with advanced AI.",
    glowColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    id: "student-management",
    name: "Student Management",
    category: "Core Administration",
    icon: Users,
    description: "Centralised profiles, enrolment workflows, and document management.",
    verifiedMetric: "300+ institutions rely on this core.",
    related: ["attendance", "exams"],
    previewText: "Single source of truth for student records, disciplinary history, and health information.",
    glowColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    id: "attendance",
    name: "Attendance Tracking",
    category: "Core Administration",
    icon: Calendar,
    description: "Automated daily logging, anomaly detection, and real-time syncing.",
    verifiedMetric: "Auto-syncs records across all connected modules.",
    related: ["student-management", "parent-portal"],
    previewText: "Log attendance in seconds. AI instantly flags consecutive absences and notifies parents.",
    glowColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    id: "exams",
    name: "Exams & Results",
    category: "Academics",
    icon: BookOpen,
    description: "Custom grading rubrics, automated report card generation, and predictive tracking.",
    verifiedMetric: "3× earlier identification of at-risk students.",
    related: ["analytics", "parent-portal", "grade-book"],
    previewText: "Identify academic risks early. Native support for IB, IGCSE, and standard board curricula.",
    glowColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    id: "fees",
    name: "Fee Collection",
    category: "Finance",
    icon: CreditCard,
    description: "Automated invoicing, predictive collection targets, and multi-currency support.",
    verifiedMetric: "94% average fee collection rate achieved.",
    related: ["student-management", "accounts"],
    previewText: "Predict payment trends and automatically send personalized reminders via SMS or Email.",
    glowColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/50"
  },
  {
    id: "timetable",
    name: "Timetable Optimisation",
    category: "Academics",
    icon: Clock,
    description: "AI-driven schedule generation that balances staff workload and room availability.",
    verifiedMetric: "Saves 3.5 hours per teacher per week.",
    related: ["hr"],
    previewText: "Generate conflict-free schedules in minutes instead of weeks.",
    glowColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    id: "grade-book",
    name: "Grade Book",
    category: "Academics",
    icon: BookOpen,
    description: "Maintain comprehensive academic records, track progress, and generate detailed reports.",
    verifiedMetric: "Used by 10,000+ teachers daily.",
    related: ["exams", "student-management"],
    previewText: "A digital grade book designed specifically for modern educators to track continuous assessments.",
    glowColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    id: "parent-portal",
    name: "Parent/Teacher/Student App",
    category: "Communication",
    icon: MessageSquare,
    description: "Multilingual automated updates, direct messaging, and secure access to grades.",
    verifiedMetric: "60% improvement in parent engagement.",
    related: ["attendance", "fees", "exams"],
    previewText: "Engage families in 15+ languages. Parents see real-time updates on attendance and fees.",
    glowColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "group-hover:border-pink-500/50"
  },
  {
    id: "analytics",
    name: "School Analytics",
    category: "Analytics",
    icon: BarChart3,
    description: "Real-time KPI dashboards, resource optimisation, and multi-campus benchmarking.",
    verifiedMetric: "68% reduction in admin workload.",
    related: ["fees", "attendance", "ai-dashboard"],
    previewText: "Principals and management get a live view of operational pulse and financial health.",
    glowColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    id: "library",
    name: "Library Management",
    category: "Core Administration",
    icon: Library,
    description: "Digital cataloging, automated late-fee tracking, and reading habit analytics.",
    verifiedMetric: "Fully integrated with student ID profiles.",
    related: ["student-management"],
    previewText: "Modernize your library with barcode scanning and automated overdue notices.",
    glowColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    id: "stakeholder-app",
    name: "Stakeholder APP",
    category: "Communication",
    icon: Users,
    description: "A centralized application bridging communication between management, staff, and external partners.",
    verifiedMetric: "100% centralized communication log.",
    related: ["parent-portal"],
    previewText: "Ensure no message is lost. Connect stakeholders in a secure, audited environment.",
    glowColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "group-hover:border-pink-500/50"
  },
  {
    id: "hr",
    name: "HR Management",
    category: "Core Administration",
    icon: Users,
    description: "Manage staff records, payroll, leave requests, and performance evaluations seamlessly.",
    verifiedMetric: "Streamlines payroll for 5,000+ staff globally.",
    related: ["accounts", "timetable"],
    previewText: "End-to-end human resource management tailored for educational institutions.",
    glowColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    id: "accounts",
    name: "Financial Accounts",
    category: "Finance",
    icon: CreditCard,
    description: "Comprehensive financial management, ledger tracking, and automated reporting.",
    verifiedMetric: "Zero-reconciliation error rate achieved.",
    related: ["fees", "hr"],
    previewText: "Maintain precise financial health with automated ledgers, expense tracking, and custom reporting.",
    glowColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/50"
  }
]

export function FeatureExplorer() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedFeature, setSelectedFeature] = React.useState(features[0])

  const filteredFeatures = features.filter((feature) => {
    const matchesCategory = activeCategory === "All" || feature.category === activeCategory
    const matchesSearch = feature.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="bg-slate-900/50 backdrop-blur-3xl border border-slate-700/50 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[800px] max-h-[80vh]">
        
        {/* Sidebar - Directory */}
        <div className="w-full md:w-80 lg:w-96 bg-slate-950/80 border-e border-slate-800 flex flex-col h-full relative z-10 shrink-0">
          
          {/* Search & Filters */}
          <div className="p-6 border-b border-slate-800 space-y-5">
            <div className="relative group">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search capabilities..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-11 pe-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 transition-all shadow-inner"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              {featureCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === category 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Feature List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 hide-scrollbar">
            <AnimatePresence>
              {filteredFeatures.map((feature) => {
                const isSelected = selectedFeature.id === feature.id;
                
                return (
                  <motion.button
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature)}
                    className={`w-full text-start p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 group relative overflow-hidden ${
                      isSelected 
                      ? "bg-slate-800/80 border border-slate-700 shadow-md" 
                      : "hover:bg-slate-800/40 border border-transparent"
                    }`}
                  >
                    {/* Subtle glow behind selected item */}
                    {isSelected && (
                      <div className={`absolute inset-0 opacity-10 ${feature.bgColor} pointer-events-none`}></div>
                    )}

                    <div className={`p-2.5 rounded-xl transition-colors relative z-10 ${
                      isSelected 
                      ? "bg-slate-950 border border-slate-800 shadow-inner" 
                      : "bg-slate-900 group-hover:bg-slate-800 border border-slate-800/50"
                    }`}>
                      <feature.icon className={`h-5 w-5 ${isSelected ? feature.glowColor : "text-slate-400"}`} />
                    </div>
                    <div className="relative z-10">
                      <h4 className={`font-bold text-sm mb-1 ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {feature.name}
                      </h4>
                      <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </AnimatePresence>
            {filteredFeatures.length === 0 && (
              <div className="p-8 text-center text-sm font-medium text-slate-500">
                No capabilities found matching "{searchQuery}".
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Holographic Preview */}
        <div className="flex-1 bg-slate-900/10 flex flex-col h-full overflow-y-auto relative z-0 hide-scrollbar">
          
          {/* Atmospheric Glow behind the preview */}
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${selectedFeature.bgColor.replace('/10', '/5')} blur-[120px] pointer-events-none transition-colors duration-700 rounded-full`}></div>

          <div className="flex-1 p-8 lg:p-14 relative z-10">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className={`p-5 rounded-2xl border border-slate-700/50 shadow-xl bg-slate-950/80 backdrop-blur-md`}>
                    <selectedFeature.icon className={`h-10 w-10 ${selectedFeature.glowColor}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${selectedFeature.glowColor}`}>
                      {selectedFeature.category}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{selectedFeature.name}</h2>
                  </div>
                </div>
                
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl leading-relaxed font-light">
                  {selectedFeature.previewText}
                </p>

                {/* Verified Impact Card */}
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl mb-12 max-w-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
                      <ShieldCheck className={`h-6 w-6 ${selectedFeature.glowColor}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase tracking-wide">Verified Platform Impact</h4>
                      <p className="text-slate-300 text-base mt-1">{selectedFeature.verifiedMetric}</p>
                    </div>
                  </div>
                </div>

                {/* Integrations Grid */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Integrates Natively With</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedFeature.related.map(relId => {
                      const relFeature = features.find(f => f.id === relId)
                      if (!relFeature) return null
                      return (
                        <button 
                          key={relId}
                          onClick={() => setSelectedFeature(relFeature)}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-full text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all shadow-sm group"
                        >
                          <relFeature.icon className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
                          {relFeature.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
          
          {/* Footer CTA */}
          <div className="p-6 lg:p-8 bg-slate-950/60 backdrop-blur-xl border-t border-slate-800/80 mt-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-base text-slate-300">
              Ready to see <strong className="text-white font-bold">{selectedFeature.name}</strong> in action?
            </p>
            <Button asChild className="bg-white hover:bg-slate-200 text-slate-900 font-bold h-12 px-8 rounded-xl shadow-lg transition-all hover:scale-105 shrink-0">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
