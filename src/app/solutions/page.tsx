import { Metadata } from "next"
import { ArrowRight, Building2, Globe2, Network, CheckCircle2, Star, Shield, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SolutionsTabs } from "@/components/sections/solutions-tabs"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Solutions | Smart School AI",
  description: "Explore our specialized intelligent operating systems for Independent Schools, International Schools, and School Groups.",
}

const solutionsList = [
  {
    title: "Independent Schools",
    href: "/solutions/independent",
    icon: Building2,
    color: "text-blue-400",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
    borderColor: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    description: "A complete, unified platform to manage admissions, attendance, fees, exams, and parent communication without the administrative overhead.",
    features: ["Automated Admissions", "Fee Collection Engine", "Parent App"]
  },
  {
    title: "International Schools",
    href: "/solutions/international",
    icon: Globe2,
    color: "text-indigo-400",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]",
    borderColor: "group-hover:border-indigo-500/50",
    iconBg: "bg-indigo-500/10",
    description: "Built for global curricula. Multi-currency, multi-language, and fully compliant with native support for IB (PYP, MYP, DP) and IGCSE grading.",
    features: ["IB & IGCSE Grading", "Multi-Currency Fees", "Multilingual"]
  },
  {
    title: "Group of Schools",
    href: "/solutions/group",
    icon: Network,
    color: "text-purple-400",
    glowColor: "group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
    borderColor: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    description: "Centralized ERP for networks with 5 to 500+ campuses. Gain real-time global visibility, consolidate reporting, and enforce consistent policies.",
    features: ["Multi-Campus Dashboards", "Centralized HR", "Global Policies"]
  }
]

export default function SolutionsLandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 font-sans selection:bg-blue-500/30">
      
      {/* Cinematic Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-blue-400 fill-blue-400" /> 
            Tailored Operating Systems
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Purpose-Built for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 filter drop-shadow-lg">
              Your Institution
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Smart School AI adapts to the unique operational workflows of your specific educational institution. Discover the platform built for your exact needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base font-bold bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1" asChild>
              <Link href="#solutions-grid">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold border-slate-700 text-white bg-slate-900/50 hover:bg-slate-800 backdrop-blur-sm transition-all" asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-20 -mt-8 mb-16 px-4">
        <div className="mx-auto max-w-5xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-400">IS</div>
              <div className="h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-400">GL</div>
              <div className="h-10 w-10 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">+300</div>
            </div>
            <div className="text-sm font-bold text-slate-300 leading-tight">
              Trusted globally by <br/> 300+ institutions
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-800"></div>
          <div className="flex items-center gap-8 text-slate-400 font-bold text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphic Solutions Grid */}
      <section id="solutions-grid" className="py-24 relative z-10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Path</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Select the architecture designed for your specific scale and curriculum.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutionsList.map((solution, i) => {
              const Icon = solution.icon
              return (
                <Link 
                  key={i} 
                  href={solution.href}
                  className={`group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-slate-800 transition-all duration-500 hover:-translate-y-2 ${solution.borderColor} ${solution.glowColor}`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${solution.iconBg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`w-8 h-8 ${solution.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{solution.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-1">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {solution.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 transition-colors shrink-0" />
                        <span className="text-slate-300 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-800/50 pt-6">
                    <span className="text-sm font-bold text-slate-500 group-hover:text-white transition-colors">Explore Architecture</span>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Explorer - Existing Dark Component */}
      <div className="relative z-10 border-t border-slate-900">
        <SolutionsTabs />
      </div>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
