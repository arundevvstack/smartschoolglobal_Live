import type { Metadata } from "next"
import Link from "next/link"
import { Building2, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Enterprise Pricing | Smart School AI",
  description: "Explore enterprise-grade pricing for Smart School AI. Tailored for K-12, higher education, and global multi-campus institutions.",
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Enterprise Pricing, Tailored to Your Scale
          </h1>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Smart School AI is deployed across 300+ institutions in 20+ countries. We provide custom enterprise licensing based on campus count, student enrollment, and regional requirements.
          </p>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-24 bg-gray-50 -mt-10">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-5xl mx-auto">
            
            <div className="lg:col-span-7">
              <Card className="shadow-2xl border-white ring-1 ring-gray-900/5">
                <CardContent className="p-8 sm:p-12">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Custom Proposal</h2>
                    <p className="text-gray-600 text-sm">
                      Our platform architecture supports everything from single-campus independent schools to large international groups. Speak with our solution architects to scope your implementation.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-xl border">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="h-5 w-5 text-brand-600" />
                        <h4 className="font-bold text-gray-900">What's included in an enterprise proposal?</h4>
                      </div>
                      <ul className="space-y-2 mt-4">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Full access to all AI modules (Administration, Academics, Finance)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Native mobile applications for parents and staff</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Comprehensive data migration and onboarding support</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>ISO 27001 Certified secure cloud hosting</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button size="lg" className="w-full h-14 text-base" asChild>
                      <Link href="/book-demo">Speak to Sales <ArrowRight className="ms-2 h-5 w-5" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-5 space-y-8 lg:pt-12">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-4">Enterprise Reliability</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <ShieldCheck className="h-6 w-6 text-brand-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">99.9% Uptime SLA</h4>
                      <p className="text-gray-500 text-xs mt-1">Guaranteed availability for your critical school operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <ShieldCheck className="h-6 w-6 text-brand-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">256-bit SSL Encryption</h4>
                      <p className="text-gray-500 text-xs mt-1">Enterprise-grade security protecting sensitive student and financial data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <ShieldCheck className="h-6 w-6 text-brand-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Global Compliance</h4>
                      <p className="text-gray-500 text-xs mt-1">ISO 27001 Certified architecture with data residency controls.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
