"use client"

import * as React from "react"
import { GraduationCap, BookOpen, Globe2, Library, Medal, ShieldCheck, Compass, Award } from "lucide-react"

const PARTNERS = [
  { name: "Oxford Academy Network", icon: GraduationCap },
  { name: "Global EduTrust", icon: Globe2 },
  { name: "Pinnacle International", icon: Medal },
  { name: "Cambridge Prep", icon: BookOpen },
  { name: "Apex Scholars", icon: Award },
  { name: "Elite Horizons", icon: Compass },
  { name: "National Library Board", icon: Library },
  { name: "Secure Campus", icon: ShieldCheck },
]

export function LogoCarousel() {
  return (
    <section className="bg-white py-12 relative overflow-hidden border-y border-slate-100">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
      

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Left and Right Gradients for smooth fade in/out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-20" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {/* First set of logos */}
          {PARTNERS.map((partner, idx) => (
            <div 
              key={`partner-1-${idx}`} 
              className="flex items-center gap-3 px-8 sm:px-12 mx-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <partner.icon className="w-8 h-8 text-slate-800" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">{partner.name}</span>
            </div>
          ))}
          {/* Duplicated set for seamless looping */}
          {PARTNERS.map((partner, idx) => (
            <div 
              key={`partner-2-${idx}`} 
              className="flex items-center gap-3 px-8 sm:px-12 mx-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <partner.icon className="w-8 h-8 text-slate-800" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  )
}
