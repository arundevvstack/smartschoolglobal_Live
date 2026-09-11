import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Target, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Exams & Results | Smart School AI",
  description: "Identify academic risks early. Native support for IB, IGCSE, and standard board curricula.",
}

export default function ExamsFeaturePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 mb-6">
              <BookOpen className="h-5 w-5" />
              <span>Academic Module</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Predictive Academic Tracking
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Don't wait until the end of the term to discover a student is falling behind. Smart School AI continuously analyses performance to identify at-risk students 3× earlier.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Move beyond static grades.</h2>
              <p className="text-lg text-gray-600">
                Transform raw marks into actionable intelligence. Support complex grading systems natively without manual spreadsheet calculations.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1 border border-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Academic Risk Detection</h4>
                    <p className="text-gray-600 text-sm mt-1">The system flags students when performance drops below threshold or historical averages, allowing for immediate intervention.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <Target className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Native Curricula Support</h4>
                    <p className="text-gray-600 text-sm mt-1">Pre-configured grading rubrics for IB PYP, MYP, DP and Cambridge IGCSE frameworks. No workarounds needed.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative order-first lg:order-last">
              <Card className="bg-white shadow-2xl border-brand-100 overflow-hidden">
                <div className="bg-brand-900 px-6 py-4 flex items-center justify-between text-white">
                  <span className="font-bold">Academic Insights</span>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 border-s-4 border-red-500 bg-white shadow-sm rounded-e-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 text-sm">Academic Alert: Subject Threshold</h4>
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">High Priority</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Group of students identified falling below historical subject average for the current term.</p>
                    <Button size="sm" variant="outline" className="w-full text-xs">Schedule Counselling</Button>
                  </div>
                  
                  <div className="p-4 border-s-4 border-amber-500 bg-white shadow-sm rounded-e-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 text-sm">Formative Assessment Trend</h4>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Monitoring</span>
                    </div>
                    <p className="text-xs text-gray-600">Cohort performance trend declining over the last two formative assessments.</p>
                  </div>
                  
                  <div className="text-center mt-6">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Conceptual Representation</span>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
