import type { Metadata } from "next"
import Link from "next/link"
import { Building2, Layers, LineChart, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Higher Education AI ERP | Smart School AI",
  description: "Manage students, faculty, finance and exams across university departments from one unified platform. Eliminate silos in colleges and universities.",
}

export default function HigherEdSolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-50 pt-20 pb-24 lg:pt-32 lg:pb-32 border-b border-brand-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-16 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl mb-6">
                Unified Operations for Higher Education
              </h1>
              <p className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed">
                Colleges and universities are held back by fragmented departmental systems. Smart School AI eliminates silos, connecting admissions, faculty, finance, and exams into one intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white" asChild>
                  <Link href="/features">View Architecture</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-blue-600 rounded-3xl blur opacity-20"></div>
              <Card className="relative bg-white/80 backdrop-blur-xl border-white shadow-2xl rounded-3xl overflow-hidden">
                <div className="bg-gray-100 border-b px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ms-4 text-xs font-mono text-gray-500">University Admin Portal</div>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-sm font-medium text-blue-900 mb-1">Engineering Dept.</p>
                      <p className="text-2xl font-bold text-blue-700">94%</p>
                      <p className="text-xs text-blue-600 mt-1">Fee Collection Rate</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-sm font-medium text-green-900 mb-1">Business School</p>
                      <p className="text-2xl font-bold text-green-700">1,240</p>
                      <p className="text-xs text-green-600 mt-1">Active Enrollments</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-gray-900">Cross-Department Analytics</h4>
                      <LineChart className="h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      AI identifies that computer science students are 3x more likely to require early intervention in advanced math modules.
                    </p>
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

      {/* Complex Workflows */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Built for Scale</h2>
            <h3 className="text-3xl font-bold text-gray-900">Tame institutional complexity.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center border shadow-sm mb-6">
                <Layers className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Departmental Autonomy</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Allow individual departments to manage their own specific exam structures and attendance rules while feeding data into a centralized university dashboard.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center border shadow-sm mb-6">
                <Building2 className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Credit & Grading Systems</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Handle complex credit-based grading, CGPA calculations, and multi-semester progression automatically, saving administrative staff hundreds of hours.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center border shadow-sm mb-6">
                <FileText className="h-6 w-6 text-brand-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Advanced Fee Management</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manage scholarships, staggered payments, international wire transfers, and departmental funding allocation natively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
