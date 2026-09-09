"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react"
import { submitDemoLead, type DemoLead, type LeadAttribution } from "@/lib/leads"
import Link from "next/link"

export default function BookDemoPage() {
  const [step, setStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  
  const [formData, setFormData] = React.useState<Partial<DemoLead>>({
    institutionType: "k-12",
    studentCount: "0-500",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

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
      institutionType: formData.institutionType as any || "k-12",
      studentCount: formData.studentCount || "0-500",
      role: formData.role || "",
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
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Context Column */}
          <div className="pt-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Experience the Future of School Administration.
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Join 300+ institutions using Smart School AI to eliminate manual tasks and focus on education. See exactly how the platform works for your specific institution.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Customized Walkthrough</h3>
                  <p className="text-gray-600 text-sm mt-1">We'll show you the exact workflows and dashboards relevant to your institution type and size.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live AI Demonstration</h3>
                  <p className="text-gray-600 text-sm mt-1">See our predictive analytics, automated fee collection, and AI timetable generation in action.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm mt-1">Get clear, volume-based pricing with no hidden implementation fees or surprises.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">PS</div>
                  <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">RK</div>
                  <div className="h-10 w-10 rounded-full bg-brand-900 border-2 border-white flex items-center justify-center text-xs font-medium text-white">+300</div>
                </div>
                <div className="text-sm font-medium text-gray-900">Trusted globally by leading schools</div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div>
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-brand-600 w-full" />
              <CardContent className="p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Request Received</h2>
                      <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                        Thank you for your interest. Our product team will contact you shortly to schedule your personalized walkthrough.
                      </p>
                      <Button variant="outline" asChild>
                        <Link href="/">Return to Homepage</Link>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Demo</h2>
                        <p className="text-gray-500 text-sm">Please provide some basic information so we can tailor the demonstration to your needs.</p>
                      </div>

                      <div className="flex gap-2 mb-8">
                        <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-brand-600' : 'bg-gray-200'}`} />
                        <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-brand-600' : 'bg-gray-200'}`} />
                      </div>

                      {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                          {error}
                        </div>
                      )}

                      {step === 1 ? (
                        <form onSubmit={handleNext} className="space-y-5">
                          <div>
                            <label htmlFor="institutionType" className="block text-sm font-medium text-gray-900 mb-1">Institution Type</label>
                            <select
                              id="institutionType"
                              name="institutionType"
                              required
                              value={formData.institutionType}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                            >
                              <option value="k-12">K-12 School</option>
                              <option value="higher-ed">Higher Education (College/University)</option>
                              <option value="multi-campus">Multi-Campus Group</option>
                              <option value="international">International School</option>
                              <option value="other">Other Educational Entity</option>
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="studentCount" className="block text-sm font-medium text-gray-900 mb-1">Total Students</label>
                            <select
                              id="studentCount"
                              name="studentCount"
                              required
                              value={formData.studentCount}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                            >
                              <option value="0-500">0 - 500</option>
                              <option value="501-1000">501 - 1,000</option>
                              <option value="1001-5000">1,001 - 5,000</option>
                              <option value="5000+">5,000+</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="institutionName" className="block text-sm font-medium text-gray-900 mb-1">Institution Name</label>
                            <input
                              type="text"
                              id="institutionName"
                              name="institutionName"
                              required
                              value={formData.institutionName || ''}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                              placeholder="e.g. Springfield High School"
                            />
                          </div>

                          <Button type="submit" className="w-full mt-8" size="lg">
                            Continue <ChevronRight className="ms-2 h-4 w-4" />
                          </Button>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">First Name</label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName || ''}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1">Last Name</label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName || ''}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-1">Job Title / Role</label>
                            <input
                              type="text"
                              id="role"
                              name="role"
                              required
                              value={formData.role || ''}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                              placeholder="e.g. Principal, IT Director"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Work Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email || ''}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                              placeholder="you@school.edu"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone || ''}
                              onChange={handleChange}
                              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                            />
                          </div>

                          <div className="flex gap-4 mt-8">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setStep(1)}
                              disabled={isSubmitting}
                            >
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              className="flex-1"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="me-2 h-4 w-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : "Request Demo"}
                            </Button>
                          </div>
                          
                          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">✓</span>
                              ISO 27001 Certified
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">✓</span>
                              99.9% Uptime SLA
                            </div>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
