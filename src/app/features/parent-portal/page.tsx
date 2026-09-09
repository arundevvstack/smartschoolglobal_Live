import type { Metadata } from "next"
import Link from "next/link"
import { MessageSquare, Globe2, Smartphone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Parent Portal | Smart School AI",
  description: "Multilingual automated updates, direct messaging, and secure access to grades. 60% improvement in parent engagement.",
}

export default function ParentPortalFeaturePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 mb-6">
              <MessageSquare className="h-5 w-5" />
              <span>Communication Module</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Intelligent Parent Communication
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Disconnected parents create frustration. Our AI-powered multilingual portal keeps every family informed, resulting in a proven 60% improvement in parent engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="mx-auto max-w-[320px] rounded-[3rem] border-[8px] border-gray-900 bg-gray-50 shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="bg-brand-600 pt-12 pb-6 px-6 text-white text-center rounded-b-3xl shadow-sm">
                  <h3 className="font-bold text-lg">Smart School AI</h3>
                  <p className="text-xs text-brand-200">Parent App</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 relative">
                    <div className="absolute top-0 end-0 -mt-2 -me-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">New</div>
                    <p className="text-xs text-gray-500 mb-1">Today, 10:45 AM</p>
                    <p className="text-sm font-medium text-gray-900 mb-1">Attendance Update</p>
                    <p className="text-xs text-gray-600">Sarah was marked absent for Science today. Please confirm leave.</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Yesterday</p>
                    <p className="text-sm font-medium text-gray-900 mb-1">Term 2 Fees Due</p>
                    <p className="text-xs text-gray-600 mb-2">Your invoice for Term 2 is ready.</p>
                    <Button size="sm" className="w-full text-xs h-8">Pay Now</Button>
                  </div>
                </div>
                <div className="absolute bottom-4 w-full text-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Conceptual UI</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Bridge the school-home gap.</h2>
              <p className="text-lg text-gray-600">
                Stop relying on paper diaries and fragmented email chains. Give parents a branded mobile experience on iOS and Android.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <Globe2 className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">15+ Languages Built-in</h4>
                    <p className="text-gray-600 text-sm mt-1">Automatic translation of notices and updates ensures non-native speaking parents are always in the loop. Includes RTL Arabic support.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <Smartphone className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Native Mobile Apps</h4>
                    <p className="text-gray-600 text-sm mt-1">Launch a fully branded parent app on iOS and Android to provide immediate push notifications instead of lost emails.</p>
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
