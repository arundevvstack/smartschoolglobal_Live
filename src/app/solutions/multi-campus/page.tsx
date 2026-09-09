import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, GraduationCap, Network, LayoutDashboard, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Multi-Campus Group ERP | Smart School AI",
  description: "Centralised ERP for school groups with 5 to 500+ campuses. Gain real-time visibility, enforce consistent policies, and consolidate reporting.",
}

export default function MultiCampusSolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Command and Control for School Groups
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Centralised ERP designed for educational networks with 5 to 500+ campuses. Gain real-time visibility, enforce consistent policies, and consolidate reporting globally.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/book-demo">Request Enterprise Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visualizing multi-campus connection */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-t-4 border-t-brand-500">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900">North Campus</h4>
                    <p className="text-sm text-gray-500 mb-4">1,240 Students</p>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-green-600">92% Fee Collection</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-t-4 border-t-blue-500 mt-8">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900">South Campus</h4>
                    <p className="text-sm text-gray-500 mb-4">850 Students</p>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-amber-600">84% Fee Collection</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-t-4 border-t-purple-500 -mt-8">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900">East Campus</h4>
                    <p className="text-sm text-gray-500 mb-4">2,100 Students</p>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-green-600">96% Fee Collection</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-t-4 border-t-teal-500 bg-brand-900 text-white relative shadow-xl transform hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6">
                    <Network className="h-6 w-6 text-brand-200 mb-2" />
                    <h4 className="font-bold">HQ Dashboard</h4>
                    <p className="text-sm text-brand-200 mb-4">Central Overview</p>
                    <div className="text-xs font-medium text-brand-100 bg-white/10 p-2 rounded">
                      Consolidated metrics across 3 campuses
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-6">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Conceptual Representation</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage at scale.</h2>
              <p className="text-lg text-gray-600 mb-8">
                Operating a group of schools requires standardization. Smart School AI allows group directors to enforce policies while giving local principals the flexibility they need.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <LayoutDashboard className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Centralised Reporting</h4>
                    <p className="text-gray-600 text-sm mt-1">Aggregate attendance, financial, and academic data across all 300+ supported institutions. Compare campus performance instantly.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <Globe2 className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Standardised Operations</h4>
                    <p className="text-gray-600 text-sm mt-1">Define unified fee structures, grading systems, and HR policies from HQ, and push them to specific branches.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
