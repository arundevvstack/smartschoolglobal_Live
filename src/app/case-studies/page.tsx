import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FolderOpen, Trophy, BarChart, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Case Studies | Smart School AI",
  description: "Explore how institutions across 20+ countries use Smart School AI to improve operational efficiency and student outcomes.",
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-amber-500/30">
      
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[60vh] flex flex-col items-center justify-center">
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative mx-auto max-w-[90rem] px-6 lg:px-8 z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-amber-400" /> 
            Proven Impact
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Customer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 filter drop-shadow-lg">
              Success Hub
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed mx-auto">
            Smart School AI powers over 300+ institutions globally. While we finalize public case study authorizations, you can request specific implementation examples tailored to your region.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-10 text-base font-bold bg-amber-600 text-white hover:bg-amber-500 shadow-lg shadow-amber-900/20 transition-all hover:-translate-y-1" asChild>
              <Link href="/book-demo">Request Implementation Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Directory Updating Section */}
      <section className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent absolute left-1/4"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent absolute right-1/4"></div>
        </div>

        <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          <div className="w-full max-w-4xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
            
            {/* Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-amber-500/10 rounded-2xl animate-pulse"></div>
                <FolderOpen className="w-12 h-12 text-amber-400" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">Directory Updating</h3>
              
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                Our verified case studies are currently being curated for publication. Check back soon for detailed reports on how schools achieved incredible operational transformations.
              </p>

              {/* Sneak Peek Metrics */}
              <div className="grid sm:grid-cols-3 gap-6 w-full">
                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 flex flex-col items-center text-center">
                  <Clock className="w-6 h-6 text-slate-500 mb-3" />
                  <span className="text-2xl font-bold text-white mb-1">68%</span>
                  <span className="text-xs text-slate-400 font-medium">Reduction in Admin Time</span>
                </div>
                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 flex flex-col items-center text-center">
                  <BarChart className="w-6 h-6 text-slate-500 mb-3" />
                  <span className="text-2xl font-bold text-white mb-1">94%</span>
                  <span className="text-xs text-slate-400 font-medium">Average Fee Collection</span>
                </div>
                <div className="bg-slate-950/50 border border-slate-800/50 rounded-2xl p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="w-6 h-6 text-slate-500 mb-3" />
                  <span className="text-2xl font-bold text-white mb-1">3x</span>
                  <span className="text-xs text-slate-400 font-medium">Faster Risk Detection</span>
                </div>
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
