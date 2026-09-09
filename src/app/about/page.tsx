import type { Metadata } from "next"
import Link from "next/link"
import { Globe2, Building2, Server, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Smart School AI",
  description: "Smart School AI Global Pvt. Ltd. builds smarter schools with AI, eliminating administrative burden across 300+ institutions globally.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Building Smarter Schools, With AI.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Smart School AI Global Pvt. Ltd. was founded on a single belief: educational institutions across every country deserve AI-powered software that eliminates administrative burden and unlocks the full potential of every student, teacher, and parent — on one unified platform.
            </p>
          </div>
        </div>
      </section>

      {/* Global Scale */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-700/50">
            <div className="p-8">
              <Building2 className="h-8 w-8 mx-auto text-brand-400 mb-4" />
              <div className="text-5xl font-black mb-2">300+</div>
              <p className="text-brand-200 font-medium">Institutions Worldwide</p>
            </div>
            <div className="p-8">
              <Globe2 className="h-8 w-8 mx-auto text-brand-400 mb-4" />
              <div className="text-5xl font-black mb-2">20+</div>
              <p className="text-brand-200 font-medium">Countries Operated In</p>
            </div>
            <div className="p-8">
              <Server className="h-8 w-8 mx-auto text-brand-400 mb-4" />
              <div className="text-5xl font-black mb-2">99.9%</div>
              <p className="text-brand-200 font-medium">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Product Impact */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Verified Impact</h2>
            <p className="text-gray-600">We measure our success by the operational efficiency and academic improvements we deliver to our partner schools.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">68%</div>
              <p className="text-sm text-gray-600 font-medium">Reduction in Admin Workload</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <p className="text-sm text-gray-600 font-medium">Average Fee Collection Rate</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.5 hrs</div>
              <p className="text-sm text-gray-600 font-medium">Saved Per Teacher Per Week</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <p className="text-sm text-gray-600 font-medium">Improved Parent Engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the global network of intelligent schools.</h2>
          <Button size="lg" className="h-14 px-8 text-base" asChild>
            <Link href="/book-demo">Speak to Our Team <ArrowRight className="ms-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
