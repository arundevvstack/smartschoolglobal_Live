import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, GraduationCap, Network, LayoutDashboard, Globe2, ShieldCheck, PieChart, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Multi-Campus Group ERP | Smart School AI",
  description: "Centralised ERP for school groups with 5 to 500+ campuses. Gain real-time visibility, enforce consistent policies, and consolidate reporting.",
}

const features = [
  {
    title: "Centralised Reporting",
    description: "Aggregate attendance, financial, and academic data across all supported institutions. Compare campus performance instantly on a single pane of glass.",
    icon: LayoutDashboard,
  },
  {
    title: "Standardised Operations",
    description: "Define unified fee structures, grading systems, and HR policies from HQ, and seamlessly push them to specific branches or regions.",
    icon: Globe2,
  },
  {
    title: "Cross-Campus Analytics",
    description: "Utilize AI to detect overarching trends across your entire network. Identify top-performing campuses and replicate their success globally.",
    icon: PieChart,
  },
  {
    title: "Global Policy Enforcement",
    description: "Ensure 100% compliance. Instantly deploy security protocols, data privacy updates, and administrative workflows to all network nodes.",
    icon: ShieldCheck,
  }
]

export default function MultiCampusSolutionPage() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[70vh] flex flex-col items-center justify-center">
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Network className="w-4 h-4 text-purple-400" /> 
            Enterprise Network Architecture
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Command and Control for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 filter drop-shadow-lg">
              School Groups
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto">
            Centralised ERP designed for educational networks with 5 to 500+ campuses. Gain real-time visibility, enforce consistent policies, and consolidate reporting globally.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base font-bold bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/book-demo">Request Enterprise Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold border-slate-700 text-white bg-slate-900/50 hover:bg-slate-800 backdrop-blur-sm transition-all" asChild>
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Network Operations Visualization */}
      <section className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent absolute left-1/4"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent absolute right-1/4"></div>
        </div>

        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Scale, Local Precision</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               Operating a group of schools requires extreme standardization. Smart School AI allows group directors to enforce global policies while giving local principals the flexibility they need.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* 3D Glassmorphic Network Nodes */}
            <div className="relative order-2 lg:order-1 h-[500px] w-full flex items-center justify-center">
              
              {/* HQ Node (Center) */}
              <div className="absolute z-30 w-48 h-48 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border-2 border-purple-500/50 shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)] flex flex-col items-center justify-center p-4 text-center transform transition-all hover:scale-105 group">
                <div className="absolute inset-0 bg-purple-500/10 rounded-[2rem] animate-pulse"></div>
                <Network className="w-10 h-10 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />
                <h4 className="text-white font-bold text-lg">HQ Dashboard</h4>
                <div className="text-xs font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full mt-3 border border-purple-500/30">
                  Global Overview
                </div>
              </div>

              {/* Branch Nodes */}
              <div className="absolute z-20 top-[10%] left-[10%] w-36 h-36 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex flex-col items-center justify-center p-3 text-center transform transition-all hover:scale-110 hover:border-blue-500/50 hover:bg-slate-800">
                <Building className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-slate-200 font-bold text-sm">North Campus</h4>
                <p className="text-slate-500 text-xs mt-1">1,240 Students</p>
              </div>

              <div className="absolute z-20 bottom-[10%] left-[20%] w-36 h-36 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex flex-col items-center justify-center p-3 text-center transform transition-all hover:scale-110 hover:border-emerald-500/50 hover:bg-slate-800">
                <Building className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-slate-200 font-bold text-sm">South Campus</h4>
                <p className="text-slate-500 text-xs mt-1">850 Students</p>
              </div>

              <div className="absolute z-20 top-[25%] right-[10%] w-36 h-36 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex flex-col items-center justify-center p-3 text-center transform transition-all hover:scale-110 hover:border-indigo-500/50 hover:bg-slate-800">
                <Building className="w-6 h-6 text-indigo-400 mb-2" />
                <h4 className="text-slate-200 font-bold text-sm">East Campus</h4>
                <p className="text-slate-500 text-xs mt-1">2,100 Students</p>
              </div>

              {/* Connecting SVG Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.4))' }}>
                <path d="M 120 120 L 250 250" stroke="rgba(168,85,247,0.3)" strokeWidth="3" strokeDasharray="6 6" fill="none" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 150 400 L 250 250" stroke="rgba(168,85,247,0.3)" strokeWidth="3" strokeDasharray="6 6" fill="none" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 400 150 L 250 250" stroke="rgba(168,85,247,0.3)" strokeWidth="3" strokeDasharray="6 6" fill="none" className="animate-[dash_20s_linear_infinite]" />
                <style>{`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -1000;
                    }
                  }
                `}</style>
              </svg>
            </div>

            {/* Feature Grid */}
            <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:border-purple-500/30 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-3">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Dark CTA Section */}
      <div className="relative z-10 border-t border-slate-900 bg-slate-950">
        <CTASection />
      </div>
    </div>
  )
}
