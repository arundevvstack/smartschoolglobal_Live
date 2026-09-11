"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-brand-900 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute -top-24 -end-24 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -start-24 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          Ready to Build an AI-Powered School?
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-brand-100 mb-10">
          Join forward-thinking schools using Smart School AI to automate operations, improve educational outcomes, and create smarter learning environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-white text-brand-900 hover:bg-gray-100 h-14 px-8 text-base" asChild>
            <Link href="/book-demo">Book Your AI Demo</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 h-14 px-8 text-base" asChild>
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-sm text-brand-200">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-800 text-white text-xs">✓</span>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-800 text-white text-xs">✓</span>
            20-Min AI Demo
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-800 text-white text-xs">✓</span>
            Enterprise Security
          </div>
        </div>
      </div>
    </section>
  )
}
