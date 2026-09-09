import type { Metadata } from "next"
import { FeatureExplorer } from "@/components/sections/feature-explorer"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Platform Features | Smart School AI",
  description: "Explore the intelligent capabilities of Smart School AI. From student management and automated attendance to predictive analytics and fee collection.",
}

export default function FeaturesDirectoryPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Platform Capabilities
            </h1>
            <p className="text-lg text-gray-600">
              Smart School AI is not a loose collection of modules. It is a unified, intelligent layer that connects every department in your institution. Explore the directory below.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Directory */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FeatureExplorer />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
