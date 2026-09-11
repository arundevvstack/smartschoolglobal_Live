import type { Metadata } from "next"
import { Layers } from "lucide-react"
import { FeatureExplorer } from "@/components/sections/feature-explorer"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Platform Features | Smart School AI",
  description: "Explore the intelligent capabilities of Smart School AI. From student management and automated attendance to predictive analytics and fee collection.",
}

export default function FeaturesDirectoryPage() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* Cinematic Header Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden flex flex-col items-center">
        
        {/* Abstract Dark Backgrounds */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Layers className="w-4 h-4 text-emerald-400" /> 
            Unified Ecosystem
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Platform <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 filter drop-shadow-lg">
              Capabilities
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mx-auto">
            Smart School AI is not a loose collection of modules. It is a unified, intelligent layer that connects every department in your institution. Explore the interactive directory below.
          </p>
        </div>
      </section>

      {/* Interactive Directory */}
      <section className="pb-24 relative z-10">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <FeatureExplorer />
        </div>
      </section>

      {/* Embedded Dark CTA Section */}
      <div className="relative z-10 border-t border-slate-900 bg-slate-950">
        <CTASection />
      </div>
    </div>
  )
}
