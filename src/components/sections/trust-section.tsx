"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const impacts = [
  {
    metric: "68%",
    label: "Reduction in admin workload",
    description: "AI automates attendance, scheduling, approvals, and reports so your team can focus on education.",
  },
  {
    metric: "94%",
    label: "Average fee collection rate",
    description: "AI predicts payment trends and automates personalised payment reminders.",
  },
  {
    metric: "3.5 hrs",
    label: "Saved per teacher per week",
    description: "AI handles attendance, report generation, and analytics to give teachers their time back.",
  },
  {
    metric: "3×",
    label: "Earlier identification",
    description: "Continuously analyzes performance to flag at-risk students before problems escalate.",
  },
  {
    metric: "60%",
    label: "Improved parent engagement",
    description: "AI-powered multilingual notifications keep every parent informed in real time.",
  },
  {
    metric: "300+",
    label: "Institutions globally",
    description: "Trusted by schools across 20+ countries to modernize their core operations.",
  }
]

export function TrustSection() {
  return (
    <section className="py-24 bg-white border-y">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide">Proven Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Measurable Results Across 300+ Schools
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Smart School AI doesn't just digitize your records—it actively improves your school's operational efficiency and student outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-brand-50/50 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl font-black text-brand-900 mb-2">{impact.metric}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{impact.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
