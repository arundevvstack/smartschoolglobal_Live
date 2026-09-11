"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, BarChart3, Users, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tourSteps = [
  {
    id: "admin",
    title: "Core Administration",
    icon: Users,
    description: "The intelligent hub connecting all school operations.",
    visual: (
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="bg-gray-900 px-4 py-3 flex justify-between items-center text-white">
          <span className="font-semibold text-sm">Smart Administration</span>
        </div>
        <div className="p-6 flex-1 bg-gray-50 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-600">Admin Workload Reduction</span>
              <span className="text-xl font-bold text-brand-600">68%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-600">Daily Attendance Auto-Synced</span>
              <span className="text-sm font-bold text-green-600 flex items-center"><span className="h-2 w-2 rounded-full bg-green-500 me-2 animate-pulse"></span> Live</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "academics",
    title: "Predictive Academics",
    icon: BarChart3,
    description: "Native support for IB & IGCSE with early risk detection.",
    visual: (
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="bg-blue-900 px-4 py-3 flex justify-between items-center text-white">
          <span className="font-semibold text-sm">Academic Intelligence</span>
        </div>
        <div className="p-6 flex-1 bg-gray-50 flex flex-col justify-center">
          <div className="p-4 border-s-4 border-red-500 bg-white shadow-sm rounded-e-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-900 text-sm">Risk Alert: Grade 10-A</h4>
            </div>
            <p className="text-xs text-gray-600">Specific cohort flagged for academic risk based on continuous assessment tracking.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "finance",
    title: "Financial Engine",
    icon: CreditCard,
    description: "Automated targets and multi-currency fee collection.",
    visual: (
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="bg-green-900 px-4 py-3 flex justify-between items-center text-white">
          <span className="font-semibold text-sm">Fee Management</span>
        </div>
        <div className="p-6 flex-1 bg-gray-50 flex flex-col justify-center">
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-600">Fee Target Progress</span>
              <span className="font-bold text-green-600">On Track</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[75%]"></div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">Maintains 94% average collection rate.</p>
        </div>
      </div>
    )
  }
]

export default function ProductTourPage() {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-900 text-white border-b">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Interactive Product Tour
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore how Smart School AI unifies administration, academics, and finance across your institution.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tour */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              {tourSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-start p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeStep === index 
                    ? "bg-white border-brand-500 shadow-xl scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${activeStep === index ? "bg-brand-100 text-brand-600" : "bg-gray-200 text-gray-500"}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className={`text-xl font-bold ${activeStep === index ? "text-gray-900" : "text-gray-600"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                        <Link href="/features" className="text-brand-600 text-sm font-semibold flex items-center hover:text-brand-800">
                          Explore Capabilities <ArrowRight className="h-4 w-4 ms-1" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 h-[500px]">
              <div className="relative w-full h-full rounded-3xl bg-gray-200 border-8 border-gray-900 shadow-2xl overflow-hidden p-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {tourSteps[activeStep].visual}
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 start-0 w-full text-center z-10">
                  <span className="bg-gray-900/80 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">
                    Conceptual Product Visualization
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Action */}
      <section className="py-24 bg-white border-t">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 text-center">
          <ShieldCheck className="h-12 w-12 text-brand-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to see it in your environment?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            The best way to understand Smart School AI is a personalized demonstration using your specific institutional workflows.
          </p>
          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <Link href="/book-demo">Book a Live Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
