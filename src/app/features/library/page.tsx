import type { Metadata } from "next"
import Link from "next/link"
import { Library, ScanLine, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Library Management | Smart School AI",
  description: "Digital cataloging, automated late-fee tracking, and reading habit analytics. Fully integrated with student ID profiles.",
}

export default function LibraryFeaturePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-600 mb-6">
              <Library className="h-5 w-5" />
              <span>Core Administration</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Modern Library Management
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Replace outdated library software with a fully integrated digital catalog. Track inventory, automate late fees, and understand student reading habits from one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Seamless issuing and returns.</h2>
              <p className="text-lg text-gray-600">
                Because the library module is connected to the central student management system, there is no need for separate library cards or isolated databases.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                    <ScanLine className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Barcode Integration</h4>
                    <p className="text-gray-600 text-sm mt-1">Issue and return books instantly using standard barcode scanners tied directly to the student's unified ID profile.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-1 border border-amber-100">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Automated Fine Tracking</h4>
                    <p className="text-gray-600 text-sm mt-1">Late fees are automatically calculated and pushed to the parents' fee dashboard, eliminating awkward manual follow-ups.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-2xl border-brand-100 overflow-hidden">
                <div className="bg-brand-900 px-6 py-4 flex justify-between items-center text-white">
                  <span className="font-bold">Library Kiosk</span>
                </div>
                <CardContent className="p-8">
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gray-50 mb-6">
                    <ScanLine className="h-12 w-12 text-gray-400 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-1">Scan Book or Student ID</h4>
                    <p className="text-sm text-gray-500">Ready to issue or return.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-red-900">Overdue Notice</p>
                        <p className="text-xs text-red-700">Account flagged for late returns</p>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs border-red-200 text-red-700 hover:bg-red-100">Notify Parents</Button>
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
