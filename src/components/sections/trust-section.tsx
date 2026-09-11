"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  FileText, IndianRupee, Clock, Users, Globe2, Star, 
  GraduationCap, UsersRound, TrendingUp, Zap, ShieldCheck, Heart, BarChart3,
  Cloud, CheckCircle2, Globe, Layers, Sparkles, ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const metrics = [
  {
    icon: FileText,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    value: "70%",
    label: "Reduction in administrative work",
    subtext: "More time for what matters — education."
  },
  {
    icon: IndianRupee,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
    value: "98%",
    label: "Fee collection efficiency",
    subtext: "Automated reminders and seamless payments."
  },
  {
    icon: Clock,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    value: "5+ hrs",
    label: "Saved per teacher per week",
    subtext: "Less paperwork. More teaching."
  },
  {
    icon: Users,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
    value: "300+",
    label: "Schools trust Smart School AI",
    subtext: "From preschools to international schools."
  },
  {
    icon: Globe2,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    value: "20+",
    label: "Countries worldwide",
    subtext: "Making education simpler, everywhere."
  },
  {
    icon: Star,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-100",
    value: "4.8/5",
    label: "Customer satisfaction",
    subtext: "Loved by school leaders, teachers and parents."
  }
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Half: Title & Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Title Area */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-8">
            <h2 className="text-xs font-bold leading-7 text-blue-600 uppercase tracking-[0.2em] mb-2">
              Schools Run Smarter With AI
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Real Results <br />
              <span className="text-blue-600">for Real Schools</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
              Smart School AI helps schools save time, reduce manual work, improve communication, and create a better learning experience for every stakeholder.
            </p>
            
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2 border border-purple-100">
                <div className="p-1.5 bg-purple-200 rounded-md">
                  <GraduationCap className="w-4 h-4 text-purple-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-tight">Students<br/>Engaged</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-100">
                <div className="p-1.5 bg-emerald-200 rounded-md">
                  <UsersRound className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-tight">Teachers<br/>Empowered</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-100">
                <div className="p-1.5 bg-blue-200 rounded-md">
                  <TrendingUp className="w-4 h-4 text-blue-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-tight">Schools<br/>Future-Ready</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Metrics Grid */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 border border-slate-100 w-full relative">
            <h4 className="text-xs font-bold tracking-[0.15em] text-blue-600 uppercase mb-6">
              Transformation in Numbers
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl ${item.iconBg}`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-3xl font-black text-slate-900">{item.value}</span>
                      <span className="text-emerald-500 font-bold text-xl">↑</span>
                    </div>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1 leading-snug">
                    {item.label}
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Section: Testimonial & Benefits */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 mb-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-10 relative">
             <p className="text-lg font-medium text-slate-700 italic leading-relaxed relative z-10">
               "Smart School AI has transformed the way we operate. It's intuitive, powerful and a true partner in our growth journey."
             </p>
             <div className="mt-4 text-sm font-bold text-slate-900">
               — School Principal, UAE
             </div>
          </div>
          <div className="md:w-2/3 flex flex-wrap justify-between gap-6 w-full relative">
             
             <div className="flex flex-col items-center gap-3 w-[100px] text-center">
               <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white">
                 <Zap className="w-6 h-6" />
               </div>
               <span className="text-xs font-bold text-slate-800">Faster Operations</span>
             </div>
             <div className="flex flex-col items-center gap-3 w-[100px] text-center">
               <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
                 <ShieldCheck className="w-6 h-6" />
               </div>
               <span className="text-xs font-bold text-slate-800">Higher Transparency</span>
             </div>
             <div className="flex flex-col items-center gap-3 w-[100px] text-center">
               <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20 text-white">
                 <Heart className="w-6 h-6" />
               </div>
               <span className="text-xs font-bold text-slate-800">Happier Parents</span>
             </div>
             <div className="flex flex-col items-center gap-3 w-[100px] text-center">
               <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
                 <BarChart3 className="w-6 h-6" />
               </div>
               <span className="text-xs font-bold text-slate-800">Better Learning Outcomes</span>
             </div>
          </div>
        </div>

        {/* Bottom Section: Footer-style Trust Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-6 border-t border-slate-200">
           <div className="flex flex-col gap-4 w-full">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
               Trusted by schools around the world
             </div>
             <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
               <div className="flex items-center gap-2">
                 <Cloud className="w-5 h-5 text-blue-500" />
                 <span className="text-xs font-semibold text-slate-700 leading-tight">Google Cloud<br/>Ready</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                 <span className="text-xs font-semibold text-slate-700 leading-tight">Secure &<br/>Compliant</span>
               </div>
               <div className="flex items-center gap-2">
                 <Globe className="w-5 h-5 text-blue-600" />
                 <span className="text-xs font-semibold text-slate-700 leading-tight">Multi-Country<br/>Deployment</span>
               </div>
               <div className="flex items-center gap-2">
                 <Layers className="w-5 h-5 text-slate-600" />
                 <span className="text-xs font-semibold text-slate-700 leading-tight">Scalable for<br/>Any School Size</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-purple-500" />
                 <span className="text-xs font-semibold text-slate-700 leading-tight">AI-Powered<br/>for the Future</span>
               </div>
             </div>
           </div>
           
           <div className="flex flex-col items-start lg:items-end w-full lg:w-auto shrink-0 mt-4 lg:mt-0 gap-2">
             <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-base font-bold shadow-lg shadow-blue-600/20" asChild>
               <Link href="/book-demo">
                 Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
             </Button>
             <span className="text-[10px] text-slate-500">
               See how Smart School AI can work for your school.
             </span>
           </div>
        </div>

      </div>
    </section>
  )
}
