import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Calendar, BarChart3, Clock, Building2, BellRing, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "AI ERP for Independent Schools | Smart School AI",
  description: "Manage admissions, attendance, fees, exams, and parent communication from one unified AI platform designed specifically for independent schools.",
  openGraph: {
    title: "AI ERP for Independent Schools | Smart School AI",
    description: "Manage admissions, attendance, fees, exams, and parent communication from one unified AI platform.",
  }
}

const features = [
  {
    title: "Predictive Student Risk",
    description: "AI continuously monitors attendance drops, behavioural incidents, and grade fluctuations, automatically flagging students who need early intervention before term ends.",
    icon: BarChart3,
  },
  {
    title: "AI Timetable Generation",
    description: "Generate conflict-free schedules in minutes. The system automatically balances teacher workloads, room availability, and subject requirements.",
    icon: Calendar,
  },
  {
    title: "Automated Workflows",
    description: "Automated reports and grading saves each teacher 3.5 hours per week, allowing educators to focus on student success.",
    icon: Clock,
  },
  {
    title: "Parent Connection",
    description: "Multilingual alerts and updates improve parent engagement by 60%, providing a connected experience from admission to alumni.",
    icon: Users,
  }
]

export default function IndependentSolutionPage() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[70vh] flex flex-col items-center justify-center">
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Building2 className="w-4 h-4 text-blue-400" /> 
            Unified AI Foundation
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Intelligent Operations for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 filter drop-shadow-lg">
              Independent Schools
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto">
            From early years to high school graduation. Smart School AI connects every department—automating administration so your educators can focus on student success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base font-bold bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/book-demo">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold border-slate-700 text-white bg-slate-900/50 hover:bg-slate-800 backdrop-blur-sm transition-all" asChild>
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic Pulse Operations Visualization */}
      <section className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent absolute left-1/4"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent absolute right-1/4"></div>
        </div>

        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Student Journey</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               One connected experience from admission to alumni. Primary and secondary schools require a delicate balance of academic rigor, student safety, and parent communication.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Feature Grid */}
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:border-blue-500/30 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-3">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* 3D Glassmorphic Operational Pulse */}
            <div className="relative order-1 lg:order-2 h-[500px] w-full flex items-center justify-center">
              
              {/* Main Hub Node */}
              <div className="absolute z-30 w-56 h-56 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border-2 border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] flex flex-col items-center justify-center p-6 text-center transform transition-all hover:scale-105 group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[2rem] animate-pulse"></div>
                <BookOpen className="w-12 h-12 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                <h4 className="text-white font-bold text-xl">Operational Pulse</h4>
                <div className="text-xs font-medium text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full mt-3 border border-blue-500/30">
                  Live Dashboard
                </div>
              </div>

              {/* Stat Nodes */}
              <div className="absolute z-20 top-[5%] right-[10%] w-40 h-32 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex flex-col justify-center p-4 transform transition-all hover:scale-110 hover:border-emerald-500/50 hover:bg-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 font-bold text-sm">Fee Collection</span>
                  <Target className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-bold text-2xl mb-2">94%</span>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[94%]"></div>
                </div>
              </div>

              <div className="absolute z-20 bottom-[10%] left-[10%] w-40 h-32 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex flex-col justify-center p-4 transform transition-all hover:scale-110 hover:border-blue-500/50 hover:bg-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 font-bold text-sm">Attendance</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-blue-400 font-bold text-2xl mb-2">98.2%</span>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[98%]"></div>
                </div>
              </div>

              <div className="absolute z-20 bottom-[15%] right-[5%] w-48 rounded-2xl bg-red-950/40 backdrop-blur-md border border-red-900 shadow-xl p-3 transform transition-all hover:scale-105 hover:bg-red-900/40">
                <div className="flex items-center gap-2 mb-1">
                  <BellRing className="w-3 h-3 text-red-400" />
                  <p className="text-xs font-bold text-red-400">AI Warning</p>
                </div>
                <p className="text-[10px] text-red-200/70 leading-tight">Grade 9 Mathematics averages are tracking 12% lower. Intervention recommended.</p>
              </div>

              {/* Connecting SVG Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.4))' }}>
                <path d="M 250 250 L 350 120" stroke="rgba(59,130,246,0.3)" strokeWidth="3" strokeDasharray="6 6" fill="none" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 250 250 L 150 400" stroke="rgba(59,130,246,0.3)" strokeWidth="3" strokeDasharray="6 6" fill="none" className="animate-[dash_20s_linear_infinite]" />
                <style>{`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -1000;
                    }
                  }
                `}</style>
              </svg>
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
