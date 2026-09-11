import type { Metadata } from "next"
import Link from "next/link"
import { Globe2, Languages, ShieldCheck, DollarSign, Lock, FileKey2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "International Schools ERP | Smart School AI",
  description: "Multi-currency, multi-language, and compliant. Native support for IB PYP, MYP, DP and IGCSE grading for international schools.",
}

const features = [
  {
    title: "Native IB & IGCSE Support",
    description: "Built-in grading rubrics, continuous assessment tracking, and automated report generation specifically designed for IB PYP, MYP, DP, and Cambridge IGCSE frameworks.",
    icon: Globe2,
  },
  {
    title: "15+ Languages Built-in",
    description: "Interface and parent communications available in over 15 languages including Arabic (RTL support), French, and Mandarin. Ensure 100% engagement.",
    icon: Languages,
  },
  {
    title: "Multi-Currency Fee Collection",
    description: "Accept payments in local currencies with native integrations for Stripe, PayPal, and regional bank gateways. Maintain 94% fee collection rates globally.",
    icon: DollarSign,
  }
]

export default function InternationalSolutionPage() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-indigo-500/30">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[70vh] flex flex-col items-center justify-center">
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Globe2 className="w-4 h-4 text-indigo-400" /> 
            Global Reach
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl mx-auto">
            The ERP for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 filter drop-shadow-lg">
              International Schools
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed mx-auto">
            Built from the ground up for schools operating across borders. Native support for IB and IGCSE curricula, multiple languages, and multi-currency fee collection.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base font-bold bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/book-demo">Request a Global Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold border-slate-700 text-white bg-slate-900/50 hover:bg-slate-800 backdrop-blur-sm transition-all" asChild>
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Capabilities Visualization */}
      <section className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent absolute left-1/4"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent absolute right-1/4"></div>
        </div>

        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">True Global Capabilities</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               Operating an international school requires software that understands complex grading rubrics and diverse parent communities.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Feature List (Left side) */}
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex gap-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:border-indigo-500/30 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 transition-colors">
                      <Icon className="w-7 h-7 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 3D Glassmorphic Compliance Node */}
            <div className="relative order-1 lg:order-2 h-[500px] w-full flex items-center justify-center">
              
              {/* Compliance Hub Node */}
              <div className="absolute z-30 w-72 h-[420px] rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border-2 border-indigo-500/50 shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)] flex flex-col p-8 transform transition-all hover:scale-105 group">
                <div className="absolute inset-0 bg-indigo-500/5 rounded-[2rem] animate-pulse pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Security & Compliance</h4>
                    <span className="text-xs font-bold text-emerald-400">Enterprise Grade</span>
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe2 className="w-5 h-5 text-slate-500" />
                      <span className="font-medium text-slate-300">Data Residency</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-500" />
                      <span className="font-medium text-slate-300">ISO 27001 Certified</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-slate-500" />
                      <span className="font-medium text-slate-300">256-bit SSL</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileKey2 className="w-5 h-5 text-slate-500" />
                      <span className="font-medium text-slate-300">99.9% Uptime SLA</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">Guaranteed</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                   <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Global Infrastructure</span>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="absolute z-20 top-[15%] right-[10%] w-24 h-24 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex items-center justify-center transform transition-all hover:scale-110 hover:border-indigo-500/50 hover:bg-slate-800">
                <Globe2 className="w-10 h-10 text-indigo-400 opacity-50" />
              </div>
              <div className="absolute z-20 bottom-[15%] left-[10%] w-32 h-16 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700 shadow-xl flex items-center justify-center gap-2 transform transition-all hover:scale-110 hover:border-emerald-500/50 hover:bg-slate-800">
                 <ShieldCheck className="w-5 h-5 text-emerald-400" />
                 <span className="text-slate-300 font-bold text-sm">Secured</span>
              </div>
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
