import { Metadata } from "next"
import { MessageCircle, Calendar, Mail, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Sales | Smart School AI",
  description: "Get in touch with our sales team to discuss how Smart School AI can transform your institution.",
}

const CONTACT_OPTIONS = [
  {
    title: "Chat on WhatsApp",
    description: "Get instant answers from our sales team via WhatsApp.",
    icon: MessageCircle,
    action: "Chat Now",
    href: "https://wa.me/949619168",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "hover:border-emerald-500",
    isExternal: true
  },
  {
    title: "Book a Demo",
    description: "Schedule a personalized walkthrough of the platform.",
    icon: Calendar,
    action: "Schedule",
    href: "/book-demo",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "hover:border-blue-500",
    isExternal: false
  },
  {
    title: "Email Sales",
    description: "Send us a detailed inquiry and we'll reply within 24 hours.",
    icon: Mail,
    action: "Send Email",
    href: "mailto:sales@smartschoolglobal.com",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "hover:border-indigo-500",
    isExternal: true
  }
]

const OFFICES = [
  { region: "Middle East", address: "Dubai Internet City, Dubai, UAE" },
  { region: "United Kingdom", address: "London, UK" },
  { region: "South Africa", address: "Cape Town, South Africa" },
  { region: "Thailand", address: "Bangkok, Thailand" },
]

export default function ContactSalesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Get in touch with our <br className="hidden md:block"/>
            <span className="text-blue-600">Sales Team</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you have a quick question or want a full product demonstration, choose the method that works best for you.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {CONTACT_OPTIONS.map((option, i) => {
            const Icon = option.icon
            return (
              <Link 
                key={i} 
                href={option.href}
                target={option.isExternal ? "_blank" : "_self"}
                rel={option.isExternal ? "noopener noreferrer" : ""}
                className={`bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm transition-all duration-300 group ${option.borderColor} hover:-translate-y-1 flex flex-col h-full`}
              >
                <div className={`w-16 h-16 rounded-2xl ${option.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${option.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{option.title}</h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                  {option.description}
                </p>
                <div className="flex items-center text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                  {option.action} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Global Offices */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Global Offices</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            We support over 300+ institutions worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {OFFICES.map((office, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mb-4 border border-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg mb-1">{office.region}</h4>
                <p className="text-sm text-slate-400">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
