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
    previewText: "Instantly see school performance metrics, predict enrollment trends, and monitor daily operations with advanced AI."
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
  },
  {
    id: "grade-book",
    name: "Grade Book",
    category: "Academics",
    icon: BookOpen,
    description: "Maintain comprehensive academic records, track progress, and generate detailed reports.",
    verifiedMetric: "Used by 10,000+ teachers daily.",
    related: ["exams", "student-management"],
    previewText: "A digital grade book designed specifically for modern educators to track continuous assessments."
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
  },
  {
    id: "stakeholder-app",
    name: "Stakeholder APP",
    category: "Communication",
    icon: Users,
    description: "A centralized application bridging communication between management, staff, and external partners.",
    verifiedMetric: "100% centralized communication log.",
    related: ["parent-portal"],
    previewText: "Ensure no message is lost. Connect stakeholders in a secure, audited environment."
  },
  {
    id: "hr",
    name: "HR Management",
    category: "Core Administration",
    icon: Users,
    description: "Manage staff records, payroll, leave requests, and performance evaluations seamlessly.",
    verifiedMetric: "Streamlines payroll for 5,000+ staff globally.",
    related: ["accounts", "timetable"],
    previewText: "End-to-end human resource management tailored for educational institutions."
  },
  {
    id: "accounts",
    name: "Financial Accounts",
    category: "Finance",
    icon: CreditCard,
    description: "Comprehensive financial management, ledger tracking, and automated reporting.",
    verifiedMetric: "Zero-reconciliation error rate achieved.",
    related: ["fees", "hr"],
    previewText: "Maintain precise financial health with automated ledgers, expense tracking, and custom reporting."
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
    <div className="bg-surface border rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[800px] max-h-[80vh]">
      {/* Sidebar - Directory */}
      <div className="w-full md:w-1/3 bg-background border-e border-b border-borderorder flex flex-col h-full">
        <div className="p-4 border-b border-border space-y-4">
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search capabilities..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-9 pe-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {featureCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === category 
                  ? "bg-brand-100 text-brand-700" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <AnimatePresence>
            {filteredFeatures.map((feature) => (
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`w-full text-start p-3 rounded-xl transition-colors flex items-start gap-3 ${
                  selectedFeature.id === feature.id 
                  ? "bg-brand-50 border-b border-borderrand-200 border" 
                  : "hover:bg-surface border border-t border-borderransparent"
                }`}
              >
                <div className={`p-2 rounded-lg mt-0.5 ${
                  selectedFeature.id === feature.id ? "bg-brand-200 text-brand-700" : "bg-muted text-muted-foreground"
                }`}>
                  <feature.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${selectedFeature.id === feature.id ? "text-brand-900" : "text-foreground"}`}>
                    {feature.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{feature.description}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
          {filteredFeatures.length === 0 && (
            <div className="p-4 text-center text-sm text-muted-foreground">No capabilities found matching "{searchQuery}".</div>
          )}
        </div>
      </div>

      {/* Main Content - Preview */}
      <div className="w-full md:w-2/3 bg-surface flex flex-col h-full overflow-y-auto">
        <div className="flex-1 p-6 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-background rounded-xl shadow-sm border text-brand-600">
              <selectedFeature.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">{selectedFeature.category}</div>
              <h2 className="text-3xl font-bold text-foreground">{selectedFeature.name}</h2>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            {selectedFeature.previewText}
          </p>

          <div className="bg-background border rounded-2xl p-6 shadow-sm mb-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Verified Platform Impact</h4>
                <p className="text-muted-foreground text-sm mt-1">{selectedFeature.verifiedMetric}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Integrates Natively With</h4>
            <div className="flex flex-wrap gap-3">
              {selectedFeature.related.map(relId => {
                const relFeature = features.find(f => f.id === relId)
                if (!relFeature) return null
                return (
                  <button 
                    key={relId}
                    onClick={() => setSelectedFeature(relFeature)}
                    className="flex items-center gap-2 px-3 py-2 bg-background border rounded-lg text-sm font-medium text-foreground hover:border-b border-borderrand-300 hover:text-brand-600 transition-colors"
                  >
                    <relFeature.icon className="h-4 w-4 text-muted-foreground" />
                    {relFeature.name}
                  </button>
                )
              })}
            </div>
          </div>

        </div>
        
        <div className="p-6 bg-background border-t border-border mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Ready to see {selectedFeature.name} in action?</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
