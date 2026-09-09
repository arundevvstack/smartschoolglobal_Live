import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, FolderOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies | Smart School AI",
  description: "Explore how institutions across 20+ countries use Smart School AI to improve operational efficiency and student outcomes.",
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Customer Success Hub
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Smart School AI powers over 300+ institutions globally. While we are currently updating our public case study directory pending final client authorizations, you can request specific implementation examples during your demo.
            </p>
            <Button size="lg" asChild>
              <Link href="/book-demo">Request Implementation Examples <ArrowRight className="ms-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center py-24 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <FolderOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Directory Updating</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Our verified case studies are currently being curated for publication. Check back soon for detailed reports on how schools achieved a 68% reduction in admin workload.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
