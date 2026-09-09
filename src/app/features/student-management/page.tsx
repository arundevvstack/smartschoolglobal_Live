import type { Metadata } from "next"
import Link from "next/link"
import { Users, FileText, Database, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Student Management System | Smart School AI",
  description: "Centralised profiles, enrolment workflows, and document management. The core engine powering over 300+ institutions.",
}

export default function StudentManagementFeaturePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 mb-6">
              <Users className="h-5 w-5" />
              <span>Core Administration</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Student Information System
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The single source of truth for your entire institution. Centralize profiles, manage medical records, track disciplinary history, and power all other modules from one intelligent core.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Stop managing spreadsheets.</h2>
              <p className="text-lg text-gray-600">
                Fragmented data leads to compliance risks and administrative bloat. Consolidate your data to unlock the 68% reduction in admin workload reported by our schools.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <Database className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Centralised Profiles</h4>
                    <p className="text-gray-600 text-sm mt-1">Academics, fees, attendance, and library records are all tethered to a single, unified student profile. Update it once, sync it everywhere.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-1 border border-green-100">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Secure Document Vault</h4>
                    <p className="text-gray-600 text-sm mt-1">Store birth certificates, medical records, and legal waivers with 256-bit SSL encryption and strict role-based access control.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl border-brand-100">
                <div className="bg-gray-900 px-6 py-4 flex justify-between items-center text-white">
                  <span className="font-bold">Student Profile View</span>
                </div>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-brand-600 to-brand-800 p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center font-bold text-2xl">
                        AD
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Student Profile</h3>
                        <p className="text-brand-100 text-sm">Secondary Group • ID: Secured</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4 bg-gray-50">
                    <div className="bg-white p-4 border rounded-xl shadow-sm">
                      <p className="text-xs text-gray-500 font-medium mb-1">Current Attendance</p>
                      <p className="font-bold text-green-600 text-sm">On Track</p>
                    </div>
                    <div className="bg-white p-4 border rounded-xl shadow-sm">
                      <p className="text-xs text-gray-500 font-medium mb-1">Fee Status</p>
                      <p className="font-bold text-gray-900 text-lg">Cleared</p>
                    </div>
                    <div className="col-span-2 bg-white p-4 border rounded-xl shadow-sm flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Academic Risk</p>
                        <p className="font-bold text-gray-900 text-sm">On Track</p>
                      </div>
                      <Button size="sm" variant="outline">View Full Transcript</Button>
                    </div>
                  </div>
                  <div className="text-center pb-6">
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
