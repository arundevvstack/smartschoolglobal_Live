"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CTASection } from "@/components/sections/cta-section"

interface FeatureLayoutProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  productPreview: React.ReactNode;
  workflow: React.ReactNode;
  benefits: React.ReactNode;
}

export function FeatureLayout({ icon, category, title, description, productPreview, workflow, benefits }: FeatureLayoutProps) {
  return (
    <div className="bg-background">
      {/* Hero & Product Preview Split */}
      <section className="pt-24 pb-16 bg-surface border-b overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
        <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 mb-16 lg:mb-0"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-brand-700 mb-6 bg-brand-50 w-fit px-3 py-1 rounded-full border border-brand-200">
                {icon}
                <span className="uppercase tracking-wider text-[10px]">{category}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              {productPreview}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">How it works</h2>
            <p className="text-3xl font-bold text-foreground">Intelligent Workflow</p>
          </div>
          {workflow}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          {benefits}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
