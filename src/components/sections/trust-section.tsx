"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const supportingMetrics = [
  {
    metric: "94%",
    label: "Average fee collection rate achieved.",
    subtext: "Automated tracking and smart reminders."
  },
  {
    metric: "3.5 hrs",
    label: "Saved per teacher per week.",
    subtext: "Time returned to focus on education."
  },
  {
    metric: "20+",
    label: "Countries worldwide.",
    subtext: "A globally trusted operational standard."
  }
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y overflow-hidden relative flex flex-col justify-center min-h-[100svh]">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* LEFT: Primary Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-start mb-16 lg:mb-0"
          >
            <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest">
              Proven Impact
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
              Measurable Results Across 300+ Schools
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
              Smart School AI doesn't just digitize your records—it actively improves your school's operational efficiency. Our platform replaces fragmented tools with a single, intelligent operating system.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
               <div className="flex -space-x-2">
                 <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-bold text-xs">UK</div>
                 <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-blue-700 font-bold text-xs">AE</div>
                 <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-blue-800 font-bold text-xs">SA</div>
                 <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-500 font-bold text-xs">+</div>
               </div>
               <div className="text-sm font-medium text-slate-600 mt-2 sm:mt-0">
                 Trusted by <span className="font-bold text-slate-950">300+ institutions</span> globally.
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual Evidence System */}
          <div className="lg:col-span-7 w-full flex flex-col gap-6">
            
            {/* PRIMARY METRIC: 68% */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-600 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-900/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="text-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
                    Verified Outcome
                  </div>
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                    68%
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:max-w-[200px] border border-white/20">
                   <div className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                     <p className="text-sm font-semibold text-white">
                       Reduction in admin workload across verified deployments.
                     </p>
                   </div>
                </div>
              </div>

              {/* Minimal Progress/Impact Indicator */}
              <div className="mt-10 w-full h-2 bg-black/20 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '68%' }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                   className="h-full bg-white rounded-full"
                 />
              </div>
            </motion.div>

            {/* SUPPORTING METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {supportingMetrics.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
                >
                  <div className="text-3xl font-black text-slate-950 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.subtext}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
