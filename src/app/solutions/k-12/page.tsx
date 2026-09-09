import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Calendar, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "AI ERP for K-12 Schools | Smart School AI",
  description: "Manage admissions, attendance, fees, exams, and parent communication from one unified AI platform designed specifically for primary and secondary schools.",
  openGraph: {
    title: "AI ERP for K-12 Schools | Smart School AI",
    description: "Manage admissions, attendance, fees, exams, and parent communication from one unified AI platform.",
  }
}

export default function K12SolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              The Intelligent Foundation for K-12 Schools
            </h1>
            <p className="text-lg text-brand-100 mb-10 max-w-2xl leading-relaxed">
              From early years to high school graduation. Smart School AI connects every department—automating administration so your educators can focus on student success.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100" asChild>
                <Link href="/book-demo">Book K-12 Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling: The K-12 Journey */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">The Student Journey</h2>
            <h3 className="text-3xl font-bold text-gray-900">One connected experience from admission to alumni.</h3>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Step 1: Attendance */}
            <div className="relative">
              <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-gray-300"></div>
              <div className="relative flex flex-col items-center text-center z-10">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center border-4 border-white mb-4">
                  <Calendar className="h-5 w-5 text-brand-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Smart Attendance</h4>
                <p className="text-sm text-gray-600">AI logs daily presence across classes, auto-syncing 480+ records in seconds.</p>
                <Link href="/features/attendance" className="mt-3 text-sm text-brand-600 font-medium hover:underline">View module</Link>
              </div>
            </div>

            {/* Step 2: Academic Outcomes */}
            <div className="relative">
              <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-gray-300"></div>
              <div className="relative flex flex-col items-center text-center z-10">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center border-4 border-white mb-4">
                  <BookOpen className="h-5 w-5 text-brand-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Academic Tracking</h4>
                <p className="text-sm text-gray-600">Continuously analyses exam performance to identify at-risk students 3× earlier.</p>
                <Link href="/features/exams" className="mt-3 text-sm text-brand-600 font-medium hover:underline">View module</Link>
              </div>
            </div>

            {/* Step 3: Teacher Time */}
            <div className="relative">
              <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-gray-300"></div>
              <div className="relative flex flex-col items-center text-center z-10">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center border-4 border-white mb-4">
                  <Clock className="h-5 w-5 text-brand-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Teacher Workflow</h4>
                <p className="text-sm text-gray-600">Automated reports and grading saves each teacher 3.5 hours per week.</p>
              </div>
            </div>

            {/* Step 4: Parent Connection */}
            <div className="relative">
              <div className="relative flex flex-col items-center text-center z-10">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border-4 border-white mb-4">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Parent Connection</h4>
                <p className="text-sm text-gray-600">Multilingual alerts and updates improve parent engagement by 60%.</p>
                <Link href="/features/parent-portal" className="mt-3 text-sm text-brand-600 font-medium hover:underline">View module</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for the complexity of K-12.</h2>
              <p className="text-lg text-gray-600 mb-8">
                Primary and secondary schools require a delicate balance of academic rigor, student safety, and parent communication. Our platform acts as your central source of truth.
              </p>
              
              <dl className="space-y-6">
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <dt className="flex items-center gap-3 font-semibold text-gray-900 text-lg mb-2">
                    <BarChart3 className="h-5 w-5 text-brand-600" />
                    Predictive Student Risk
                  </dt>
                  <dd className="text-gray-600 text-sm">
                    AI continuously monitors attendance drops, behavioural incidents, and grade fluctuations, automatically flagging students who need early intervention before term ends.
                  </dd>
                </div>
                <div className="bg-white border rounded-xl p-6 shadow-sm">
                  <dt className="flex items-center gap-3 font-semibold text-gray-900 text-lg mb-2">
                    <Calendar className="h-5 w-5 text-brand-600" />
                    AI Timetable Generation
                  </dt>
                  <dd className="text-gray-600 text-sm">
                    Generate conflict-free schedules in minutes. The system automatically balances teacher workloads, room availability, and subject requirements.
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="relative">
              <Card className="shadow-2xl border-brand-100 bg-white/50 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b">
                    <div className="font-bold text-gray-900">K-12 Operational Pulse</div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">Live Dashboard</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Fee Target Collection</span>
                        <span className="text-green-600 font-bold">94%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[94%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Daily Attendance Rate</span>
                        <span className="text-brand-600 font-bold">98.2%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 w-[98.2%]"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100 mt-8">
                      <p className="text-sm font-semibold text-red-900">AI Warning</p>
                      <p className="text-xs text-red-700 mt-1">Grade 9 Mathematics averages are tracking 12% lower than historical term targets. Intervention recommended.</p>
                    </div>
                    <div className="text-center mt-4">
                      <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Conceptual Representation</span>
                    </div>
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
