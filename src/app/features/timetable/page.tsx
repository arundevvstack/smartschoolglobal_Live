import type { Metadata } from "next"
import Link from "next/link"
import { Clock, CheckCircle2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "AI Timetable Generation | Smart School AI",
  description: "AI-driven schedule generation that balances staff workload and room availability. Saves 3.5 hours per teacher per week.",
}

export default function TimetableFeaturePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 mb-6">
              <Clock className="h-5 w-5" />
              <span>Academics Module</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Automated Timetable Generation
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Teachers spend up to 30% of their time on repetitive admin tasks. Our AI engine generates conflict-free schedules in minutes, helping save every teacher 3.5+ hours per week.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Solve the scheduling puzzle.</h2>
              <p className="text-lg text-gray-600">
                Balancing teacher constraints, room capacities, and subject requirements is a mathematical nightmare. Let the AI handle it.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1 border border-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Conflict-Free Output</h4>
                    <p className="text-gray-600 text-sm mt-1">120 class slots optimised in under 30 seconds with intelligent room balancing and zero overlapping schedules.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <RefreshCw className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Teacher Substitution</h4>
                    <p className="text-gray-600 text-sm mt-1">When a teacher calls in sick, the AI instantly suggests the best available substitute without disrupting the rest of the school.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl border-brand-100">
                <div className="bg-brand-900 px-6 py-4 text-white">
                  <span className="font-bold">Timetable Generator</span>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 w-full animate-[pulse_2s_infinite]"></div>
                    </div>
                    <p className="text-sm font-medium text-brand-600 text-center">Optimising Timetable Matrix...</p>
                    
                    <div className="mt-8 border rounded-xl overflow-hidden">
                      <div className="bg-green-50 p-4 border-b flex justify-center items-center gap-2 text-green-700 font-bold text-sm text-center">
                        <CheckCircle2 className="h-4 w-4" /> Optimisation Complete
                      </div>
                      <div className="p-4 bg-white grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-xs text-gray-500">Conflicts Detected</p>
                          <p className="font-bold text-gray-900 flex justify-center items-center mt-1"><span className="h-2 w-2 rounded-full bg-green-500 me-2"></span>Resolved</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Teacher Load</p>
                          <p className="font-bold text-gray-900 mt-1">Balanced</p>
                        </div>
                      </div>
                    </div>
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
