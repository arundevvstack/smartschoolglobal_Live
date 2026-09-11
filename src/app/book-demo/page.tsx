"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, ChevronRight, ChevronLeft, Loader2, 
  Building2, Globe2, Network, GraduationCap,
  CalendarCheck, CreditCard, CalendarDays, MessageSquare, LineChart, MoreHorizontal
} from "lucide-react"
import { submitDemoLead, type DemoLead, type LeadAttribution } from "@/lib/leads"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MapPin, X } from "lucide-react"

const INSTITUTION_TYPES = [
  { id: "independent", label: "Independent School", icon: Building2 },
  { id: "international", label: "International School", icon: Globe2 },
  { id: "group", label: "Group of Schools", icon: Network },
  { id: "higher-ed", label: "Higher Education", icon: GraduationCap },
]

const STUDENT_COUNTS = ["0-500", "501-1,000", "1,001-5,000", "5,000+"]

const INTERESTS = [
  { id: "attendance", label: "Automated Attendance", icon: CalendarCheck },
  { id: "fees", label: "Fee Collection", icon: CreditCard },
  { id: "timetable", label: "Timetable Generation", icon: CalendarDays },
  { id: "parents", label: "Parent Communication", icon: MessageSquare },
  { id: "analytics", label: "Dashboards & Analytics", icon: LineChart },
  { id: "other", label: "Other Modules", icon: MoreHorizontal },
]

const REGIONS = [
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", count: "80+ Installations", position: { top: "25%", left: "45%" } },
  { id: "me", name: "Middle East", flag: "🇦🇪", count: "120+ Installations", position: { top: "45%", left: "55%" } },
  { id: "th", name: "Thailand", flag: "🇹🇭", count: "40+ Installations", position: { top: "50%", left: "75%" } },
  { id: "za", name: "South Africa", flag: "🇿🇦", count: "60+ Installations", position: { top: "75%", left: "52%" } },
]

export default function BookDemoPage() {
  const [step, setStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [isMapOpen, setIsMapOpen] = React.useState(false)
  const [activeRegion, setActiveRegion] = React.useState<string | null>(null)
  
  const [formData, setFormData] = React.useState<Partial<DemoLead>>({
    institutionType: "independent" as any,
    studentCount: "0-500",
    interests: [],
  })

  // Collect attribution on mount
  const attributionRef = React.useRef<LeadAttribution>({})
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    attributionRef.current = {
      utmSource: params.get("utm_source") || undefined,
      utmMedium: params.get("utm_medium") || undefined,
      utmCampaign: params.get("utm_campaign") || undefined,
      utmTerm: params.get("utm_term") || undefined,
      utmContent: params.get("utm_content") || undefined,
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleInterest = (id: string) => {
    setFormData(prev => {
      const current = prev.interests || []
      if (current.includes(id)) {
        return { ...prev, interests: current.filter(i => i !== id) }
      }
      return { ...prev, interests: [...current, id] }
    })
  }

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3))
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const lead: DemoLead = {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      institutionName: formData.institutionName || "",
      institutionType: formData.institutionType as any || "independent",
      studentCount: formData.studentCount || "0-500",
      role: formData.role || "",
      interests: formData.interests || [],
      attribution: attributionRef.current
    }

    const result = await submitDemoLead(lead)
    
    setIsSubmitting(false)
    if (result.success) {
      setIsSuccess(true)
    } else {
      setError(result.message || "An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24 font-sans">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Context Column */}
          <div className="lg:col-span-5 pt-8 lg:sticky lg:top-32">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6 leading-tight">
              Experience the Future of School Administration.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Join 300+ institutions using Smart School AI to eliminate manual tasks and focus on education. Build your personalized demo experience.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Customized Walkthrough</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">We'll show you the exact workflows and dashboards relevant to your institution type and size.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-indigo-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Live AI Demonstration</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">See our predictive analytics, automated fee collection, and AI timetable generation in action.</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setIsMapOpen(true)}
              className="mt-12 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle map background in the box */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex -space-x-3">
                  <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">UK</div>
                  <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">AE</div>
                  <div className="h-12 w-12 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md group-hover:bg-blue-700 transition-colors">+300</div>
                </div>
                <div className="text-sm font-bold text-slate-900 leading-tight flex-1">
                  Trusted globally by leading <br/> educational institutions
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Form Wizard Column */}
          <div className="lg:col-span-7">
            <Card className="border-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden bg-white">
              
              {/* Top Gradient Bar */}
              <div className="h-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full" />
              
              <CardContent className="p-8 sm:p-12">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="mx-auto h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center mb-8">
                        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Demo Request Received</h2>
                      <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
                        Thank you for your interest! Our product team will contact you shortly to schedule your personalized walkthrough.
                      </p>
                      <Button className="h-14 px-8 text-base font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors" asChild>
                        <Link href="/">Return to Homepage</Link>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative min-h-[500px] flex flex-col"
                    >
                      
                      {/* Stepper Graphic */}
                      <div className="mb-10">
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">
                              {step === 1 && "Institution Profile"}
                              {step === 2 && "Areas of Interest"}
                              {step === 3 && "Contact Details"}
                            </h2>
                            <p className="text-slate-500 font-medium text-sm">
                              Step {step} of 3
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {[1, 2, 3].map((s) => (
                            <div 
                              key={s}
                              className={cn(
                                "h-2 flex-1 rounded-full transition-colors duration-300",
                                step >= s ? "bg-blue-600" : "bg-slate-100"
                              )} 
                            />
                          ))}
                        </div>
                      </div>

                      {error && (
                        <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 font-medium">
                          {error}
                        </div>
                      )}

                      {/* STEP 1 */}
                      {step === 1 && (
                        <div className="space-y-10 flex-1">
                          
                          <div>
                            <label className="block text-base font-bold text-slate-900 mb-4">What type of institution are you?</label>
                            <div className="grid grid-cols-2 gap-4">
                              {INSTITUTION_TYPES.map((type) => {
                                const Icon = type.icon
                                const isSelected = formData.institutionType === type.id
                                return (
                                  <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, institutionType: type.id as any }))}
                                    className={cn(
                                      "flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-200 text-left",
                                      isSelected 
                                        ? "border-blue-600 bg-blue-50/50 shadow-sm" 
                                        : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                                    )}
                                  >
                                    <div className={cn("p-2.5 rounded-xl", isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500")}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={cn("font-bold", isSelected ? "text-blue-950" : "text-slate-700")}>
                                      {type.label}
                                    </span>
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          <div>
                            <label className="block text-base font-bold text-slate-900 mb-4">How many students?</label>
                            <div className="flex flex-wrap gap-3">
                              {STUDENT_COUNTS.map((count) => {
                                const isSelected = formData.studentCount === count
                                return (
                                  <button
                                    key={count}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, studentCount: count }))}
                                    className={cn(
                                      "px-6 py-3 rounded-full text-sm font-bold border-2 transition-all duration-200",
                                      isSelected 
                                        ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                                        : "border-slate-200 text-slate-600 hover:border-slate-300 bg-white"
                                    )}
                                  >
                                    {count}
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="institutionName" className="block text-base font-bold text-slate-900 mb-2">Institution Name</label>
                            <input
                              type="text"
                              id="institutionName"
                              name="institutionName"
                              required
                              value={formData.institutionName || ''}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-4 text-base font-medium shadow-sm focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                              placeholder="e.g. Springfield Academy"
                            />
                          </div>

                        </div>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <div className="space-y-8 flex-1">
                          <div>
                            <label className="block text-base font-bold text-slate-900 mb-1">What are you most interested in?</label>
                            <p className="text-slate-500 text-sm font-medium mb-6">Select all that apply so we can tailor your demo.</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {INTERESTS.map((interest) => {
                                const Icon = interest.icon
                                const isSelected = formData.interests?.includes(interest.id)
                                return (
                                  <button
                                    key={interest.id}
                                    type="button"
                                    onClick={() => toggleInterest(interest.id)}
                                    className={cn(
                                      "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200",
                                      isSelected 
                                        ? "border-indigo-600 bg-indigo-50/50 shadow-sm" 
                                        : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50"
                                    )}
                                  >
                                    <div className={cn("p-2 rounded-lg shrink-0", isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400")}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={cn("font-bold text-sm text-left leading-tight", isSelected ? "text-indigo-950" : "text-slate-700")}>
                                      {interest.label}
                                    </span>
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <form id="demo-form" onSubmit={handleSubmit} className="space-y-6 flex-1">
                          
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName || ''}
                                onChange={handleChange}
                                className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName || ''}
                                onChange={handleChange}
                                className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="role" className="block text-sm font-bold text-slate-900 mb-2">Job Title / Role</label>
                            <input
                              type="text"
                              id="role"
                              name="role"
                              required
                              value={formData.role || ''}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                              placeholder="e.g. IT Director, Principal"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Work Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email || ''}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                              placeholder="you@school.edu"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone || ''}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                            />
                          </div>

                        </form>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-4 mt-12 pt-8 border-t border-slate-100">
                        {step > 1 && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={handleBack}
                            disabled={isSubmitting}
                            className="h-14 px-6 text-base font-bold rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 shrink-0"
                          >
                            <ChevronLeft className="mr-2 h-5 w-5" /> Back
                          </Button>
                        )}
                        
                        {step < 3 ? (
                          <Button 
                            type="button" 
                            onClick={() => {
                              // Basic validation before next
                              if (step === 1 && !formData.institutionName) {
                                setError("Please enter your institution name.")
                                return
                              }
                              setError(null)
                              handleNext()
                            }}
                            className="h-14 flex-1 text-base font-bold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
                          >
                            Continue <ChevronRight className="ml-2 h-5 w-5" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            form="demo-form"
                            className="h-14 flex-1 text-base font-bold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Submitting Request...
                              </>
                            ) : "Request Demo"}
                          </Button>
                        )}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
            
            {!isSuccess && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                  ISO 27001 Certified
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                  99.9% Uptime SLA
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                  No Credit Card
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Global Interactive Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setIsMapOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-slate-950 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row h-[80vh] sm:h-[600px]"
            >
              <button 
                onClick={() => setIsMapOpen(false)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Map Visualization Area */}
              <div className="relative flex-1 bg-slate-900 overflow-hidden min-h-[300px]">
                {/* Abstract Dot Map Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
                
                {/* Glow effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ strokeDasharray: "4 4" }}>
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    d="M 45% 25% Q 50% 35% 55% 45% T 75% 50% M 55% 45% Q 53% 60% 52% 75%" 
                    stroke="#3b82f6" 
                    strokeWidth="2" 
                    fill="none" 
                  />
                </svg>

                {/* Map Nodes */}
                {REGIONS.map((region, i) => (
                  <motion.div
                    key={region.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
                    className="absolute z-10"
                    style={region.position}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                      
                      {/* Dot */}
                      <div className={cn(
                        "w-4 h-4 rounded-full border-2 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300",
                        activeRegion === region.id || activeRegion === null ? "bg-blue-500 scale-125" : "bg-slate-600 scale-100"
                      )}></div>

                      {/* Tooltip */}
                      <div className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl transition-all duration-300 border border-slate-700 pointer-events-none",
                        activeRegion === region.id ? "opacity-100 y-0" : "opacity-0 -translate-y-2"
                      )}>
                        {region.name}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-slate-700"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar List Area */}
              <div className="w-full lg:w-[400px] bg-slate-950 p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Global Presence</h3>
                  <p className="text-slate-400 text-sm">Trusted by over 300+ leading educational institutions worldwide.</p>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  {REGIONS.map((region) => (
                    <div 
                      key={region.id}
                      onMouseEnter={() => setActiveRegion(region.id)}
                      onMouseLeave={() => setActiveRegion(null)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer",
                        activeRegion === region.id 
                          ? "bg-blue-600/10 border-blue-500/50" 
                          : "bg-slate-900/50 border-slate-800 hover:bg-slate-800"
                      )}
                    >
                      <div className="text-3xl rounded-xl overflow-hidden shrink-0 shadow-sm leading-none bg-slate-800 flex items-center justify-center w-12 h-12">
                        {region.flag}
                      </div>
                      <div>
                        <div className={cn(
                          "font-bold transition-colors",
                          activeRegion === region.id ? "text-blue-400" : "text-white"
                        )}>
                          {region.name}
                        </div>
                        <div className="text-sm font-medium text-slate-500 mt-0.5">
                          {region.count}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <Button 
                    onClick={() => setIsMapOpen(false)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 rounded-xl"
                  >
                    Close Map
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
