import type { Metadata } from "next"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "EdTech Blog & Resources | Smart School AI",
  description: "Insights on AI in education, school administration efficiency, and edtech trends.",
}

export default function BlogPage() {
  return (
    <div className="bg-white min-h-[70vh]">
      <section className="pt-24 pb-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              The Smart School Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert insights on reducing administrative workload, improving academic outcomes, and implementing AI in educational institutions.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-brand-200 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Content Hub In Development</h3>
          <p className="text-gray-500">We are currently migrating our latest editorial content. Check back soon for deep-dives into EdTech innovation.</p>
        </div>
      </section>
    </div>
  )
}
