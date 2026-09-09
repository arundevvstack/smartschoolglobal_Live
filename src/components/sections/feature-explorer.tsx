"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Users, Calendar, BookOpen, CreditCard, Clock, MessageSquare, BarChart3, Library, ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featureCategories = ["All", "Core Administration", "Academics", "Finance", "Communication"]

const features = [
  {
    id: "student-management",
    name: "Student Management",
    category: "Core Administration",
    icon: Users,
    description: "Centralised profiles, enrolment workflows, and document management.",
    href: "/features/student-management",
    verifiedMetric: "300+ institutions rely on this core.",
    related: ["attendance", "exams", "analytics"],
    previewText: "Single source of truth for student records, disciplinary history, and health information.",
  },
  {
    id: "attendance",
    name: "Attendance Tracking",
    category: "Core Administration",
    icon: Calendar,
    description: "Automated daily logging, anomaly detection, and real-time syncing.",
    href: "/features/attendance",
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
    href: "/features/exams",
    verifiedMetric: "3× earlier identification of at-risk students.",
    related: ["analytics", "parent-portal"],
    previewText: "Identify academic risks early. Native support for IB, IGCSE, and standard board curricula.",
  },
  {
    id: "fees",
    name: "Fee Collection",
    category: "Finance",
    icon: CreditCard,
    description: "Automated invoicing, predictive collection targets, and multi-currency support.",
    href: "/features/fees",
    verifiedMetric: "94% average fee collection rate achieved.",
    related: ["student-management", "analytics", "parent-portal"],
    previewText: "Predict payment trends and automatically send personalized reminders via SMS or Email.",
  },
  {
    id: "timetable",
    name: "Timetable Optimisation",
    category: "Academics",
    icon: Clock,
    description: "AI-driven schedule generation that balances staff workload and room availability.",
    href: "/features/timetable",
    verifiedMetric: "Saves 3.5 hours per teacher per week.",
    related: ["student-management", "attendance"],
    previewText: "Generate conflict-free schedules in minutes instead of weeks.",
  },
  {
    id: "parent-portal",
    name: "Parent Portal",
    category: "Communication",
    icon: MessageSquare,
    description: "Multilingual automated updates, direct messaging, and secure access to grades.",
    href: "/features/parent-portal",
    verifiedMetric: "60% improvement in parent engagement.",
    related: ["attendance", "fees", "exams"],
    previewText: "Engage families in 15+ languages. Parents see real-time updates on attendance and fees.",
  },
  {
    id: "analytics",
    name: "School Analytics",
    category: "Core Administration",
    icon: BarChart3,
    description: "Real-time KPI dashboards, resource optimisation, and multi-campus benchmarking.",
    href: "/features/analytics",
    verifiedMetric: "68% reduction in admin workload.",
    related: ["exams", "fees", "attendance"],
    previewText: "Principals and management get a live view of operational pulse and financial health.",
  },
  {
    id: "library",
    name: "Library Management",
    category: "Core Administration",
    icon: Library,
    description: "Digital cataloging, automated late-fee tracking, and reading habit analytics.",
    href: "/features/library",
    verifiedMetric: "Fully integrated with student ID profiles.",
    related: ["student-management"],
    previewText: "Modernize your library with barcode scanning and automated overdue notices.",
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
            <p className="text-sm text-muted-foreground">Explore the full capabilities of the {selectedFeature.name} module.</p>
            <Button asChild>
              <Link href={selectedFeature.href}>
                View Feature Detail <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
