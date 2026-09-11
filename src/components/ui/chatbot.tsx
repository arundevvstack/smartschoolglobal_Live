"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, ExternalLink, Sparkles } from "lucide-react"

// TODO: Replace this with your actual WhatsApp number (include country code, e.g., 1234567890)
const WHATSAPP_NUMBER = "949619168"

type Message = {
  id: string
  type: "bot" | "user"
  text: string
  isFallback?: boolean
}

const QUICK_REPLIES = [
  "What are the features?",
  "How much does it cost?",
  "I want to book a demo",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [hasUnread, setHasUnread] = React.useState(true)
  
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi there! 👋 I'm the Smart School AI assistant. How can I help you today?",
    },
  ])
  
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setHasUnread(false)
    }
  }, [messages, isOpen, isTyping])

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMessage: Message = { id: Date.now().toString(), type: "user", text: textToSend }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulated rule-based logic
    setTimeout(() => {
      const lowercaseInput = userMessage.text.toLowerCase()
      let botResponse: Message

      // --- 1. PRICING & SALES ---
      if (lowercaseInput.includes("pricing") || lowercaseInput.includes("cost") || lowercaseInput.includes("how much")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our pricing scales based on the size of your institution. We offer custom plans tailored for Independent Schools, International Schools, and School Groups. Would you like to book a demo to get a custom quote?",
        }
      } else if (lowercaseInput.includes("demo") || lowercaseInput.includes("book")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Excellent! You can book a demo by clicking the 'Book a Demo' button in the top navigation bar, or I can connect you directly with our sales team on WhatsApp right now.",
          isFallback: true,
        }
      
      // --- 2. CORE FEATURES ---
      } else if (lowercaseInput.includes("attendance")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Attendance module offers automated daily logging, anomaly detection, and real-time syncing. AI instantly flags consecutive absences and notifies parents automatically.",
        }
      } else if (lowercaseInput.includes("student") || lowercaseInput.includes("admission")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Student Management system provides a single source of truth for student records, disciplinary history, health information, and enrollment workflows.",
        }
      } else if (lowercaseInput.includes("exam") || lowercaseInput.includes("result") || lowercaseInput.includes("grade")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "The Exams & Results module features custom grading rubrics, automated report card generation, and predictive tracking to identify academic risks early. We natively support IB, IGCSE, and standard board curricula.",
        }
      } else if (lowercaseInput.includes("fee") || lowercaseInput.includes("payment")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Fee Collection module automates invoicing, predicts collection targets, and supports multi-currency payments. It automatically sends personalized reminders via SMS or Email to parents.",
        }
      } else if (lowercaseInput.includes("timetable") || lowercaseInput.includes("schedule")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our AI-driven Timetable Optimization balances staff workload and room availability to generate conflict-free schedules in minutes instead of weeks.",
        }
      } else if (lowercaseInput.includes("parent") || lowercaseInput.includes("app") || lowercaseInput.includes("message") || lowercaseInput.includes("communication")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Parent/Teacher/Student App enables multilingual automated updates, direct messaging, and secure access to grades. Engage families in 15+ languages instantly.",
        }
      } else if (lowercaseInput.includes("analytic") || lowercaseInput.includes("dashboard") || lowercaseInput.includes("report")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "The AI Dashboard and Analytics module provides real-time KPI dashboards, resource optimization, and multi-campus benchmarking so management can get a live view of operational health.",
        }
      } else if (lowercaseInput.includes("library")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Library Management system modernizes your library with digital cataloging, barcode scanning, reading habit analytics, and automated late-fee tracking.",
        }
      } else if (lowercaseInput.includes("hr ") || lowercaseInput.includes("payroll") || lowercaseInput.includes("staff")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "The HR module manages staff records, automated payroll processing, leave requests, and performance evaluations seamlessly.",
        }
      } else if (lowercaseInput.includes("account") || lowercaseInput.includes("finance") || lowercaseInput.includes("ledger")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our Financial Accounts module ensures precise financial health with automated ledgers, expense tracking, and custom reporting to achieve a zero-reconciliation error rate.",
        }
      } else if (lowercaseInput.includes("feature") || lowercaseInput.includes("what can you do") || lowercaseInput.includes("module")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "We offer 13+ intelligent modules including AI Dashboards, Student Management, Automated Attendance, Timetable Optimization, and Fee Collection. You can check out our Features page in the top menu for a full breakdown!",
        }

      // --- 3. SOLUTIONS BY TYPE ---
      } else if (lowercaseInput.includes("independent")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "For Independent Schools, we provide a unified platform to manage admissions, attendance, fees, exams, and parent communication efficiently.",
        }
      } else if (lowercaseInput.includes("international")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Our International Schools solution is multi-currency, multi-language, and fully compliant, featuring native support for IB PYP, MYP, DP, and IGCSE grading.",
        }
      } else if (lowercaseInput.includes("group") || lowercaseInput.includes("multi-campus") || lowercaseInput.includes("multi campus")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "For School Groups, we offer a centralized ERP for networks with 5 to 500+ campuses, allowing you to gain real-time global visibility and enforce consistent policies.",
        }

      // --- 4. GREETINGS & COMPANY ---
      } else if (lowercaseInput.includes("about") || lowercaseInput.includes("who are you") || lowercaseInput.includes("company")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Smart School AI is the Intelligent Operating System for modern schools. We eliminate administrative burden and unlock the full potential of students, teachers, and parents. Check out our About page to learn more!",
        }
      } else if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi ") || lowercaseInput.includes("hi!") || lowercaseInput.includes("hey")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "Hello! How can I assist you with Smart School AI today? Feel free to ask about any of our features or pricing.",
        }
      } else if (lowercaseInput.includes("case study") || lowercaseInput.includes("customer") || lowercaseInput.includes("who uses")) {
        botResponse = {
          id: (Date.now() + 1).toString(), type: "bot",
          text: "We are trusted by 300+ innovative institutions worldwide, achieving results like 70% reduction in admin time and 94% on-time fee collection. Check out our Case Studies page in the nav menu!",
        }

      // --- 5. FALLBACK ---
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "To ensure you receive the most accurate and personalized information for your institution's specific needs, I'd like to connect you directly with our dedicated support team on WhatsApp.",
          isFallback: true,
        }
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, botResponse])
      
      if (!isOpen) {
        setHasUnread(true)
      }
    }, 1200) // Slightly longer delay to simulate typing
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hi, I need help with Smart School AI.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] flex flex-col mb-4 overflow-hidden origin-bottom-right"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between text-white shadow-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold flex items-center gap-2">
                    Smart School AI <Sparkles className="w-3 h-3 text-blue-200" />
                  </h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-slate-50/50">
              {messages.map((msg, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={msg.id} 
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${msg.type === "user" ? "bg-indigo-100 text-indigo-600" : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"}`}>
                      {msg.type === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    <div className={`flex flex-col gap-2 ${msg.type === "user" ? "items-end" : "items-start"}`}>
                      <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.type === "user" 
                          ? "bg-indigo-600 text-white rounded-tr-sm" 
                          : "bg-white text-slate-800 border border-slate-100 rounded-tl-sm"
                      }`}>
                        {msg.text}
                      </div>

                      {/* Quick Replies for the very first bot message */}
                      {index === 0 && messages.length === 1 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {QUICK_REPLIES.map((reply, i) => (
                            <button
                              key={i}
                              onClick={() => handleSend(reply)}
                              className="text-xs font-medium bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 px-3 py-2 rounded-full transition-colors shadow-sm text-left"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}

                      {msg.isFallback && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          onClick={openWhatsApp}
                          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-md mt-1"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Chat on WhatsApp
                          <ExternalLink className="w-3 h-3 ml-1 opacity-80" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2 max-w-[85%] flex-row">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-11">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-100 z-10">
              <form onSubmit={onSubmit} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/50 rounded-xl text-sm outline-none transition-all shadow-sm"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1.5 p-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[10px] text-slate-400 font-medium tracking-wide">Powered by Smart School AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 ${
          isOpen 
            ? "bg-slate-800 hover:bg-slate-900 rotate-90" 
            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-indigo-500/30 hover:scale-110"
        } text-white`}
        aria-label="Toggle chat"
      >
        {!isOpen && hasUnread && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
        
        {isOpen ? (
          <X className="w-6 h-6 -rotate-90 transition-transform duration-300" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
