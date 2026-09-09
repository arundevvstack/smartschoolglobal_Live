import type { Metadata } from "next"
import Link from "next/link"
import { Globe2, Languages, ShieldCheck, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "International Schools ERP | Smart School AI",
  description: "Multi-currency, multi-language, and compliant. Native support for IB PYP, MYP, DP and IGCSE grading for international schools.",
}

export default function InternationalSolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-brand-800 text-brand-100 border-none">Global Reach</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 max-w-4xl mx-auto">
            The ERP for International Schools
          </h1>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Built from the ground up for schools operating across borders. Native support for IB and IGCSE curricula, multiple languages, and multi-currency fee collection.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100" asChild>
              <Link href="/book-demo">Request a Global Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">True global capabilities.</h2>
              <p className="text-lg text-gray-600">
                Operating an international school requires software that understands complex grading rubrics and diverse parent communities.
              </p>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-50 rounded-lg text-brand-600 mt-1">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Native IB & IGCSE Support</h3>
                  <p className="text-gray-600">Built-in grading rubrics, continuous assessment tracking, and automated report generation specifically designed for IB PYP, MYP, DP, and Cambridge IGCSE frameworks.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mt-1">
                  <Languages className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Languages Built-in</h3>
                  <p className="text-gray-600">Interface and parent communications available in over 15 languages including Arabic (RTL support), French, and Mandarin. Ensure 100% engagement with diverse parent communities.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-green-50 rounded-lg text-green-600 mt-1">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Currency Fee Collection</h3>
                  <p className="text-gray-600">Accept payments in local currencies with native integrations for Stripe, PayPal, and regional bank gateways. Maintain your 94% fee collection rate regardless of where parents are located.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative visual for international compliance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-blue-50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <ShieldCheck className="h-6 w-6 text-brand-600" />
                  <h3 className="font-bold text-gray-900">Security & Compliance</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-900">Data Residency</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Compliant</span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-900">ISO 27001 Certification</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Verified</span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-900">256-bit SSL Encryption</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-900">99.9% Uptime SLA</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      {children}
    </span>
  )
}
