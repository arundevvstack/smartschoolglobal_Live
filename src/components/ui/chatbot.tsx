"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, HelpCircle, ExternalLink } from "lucide-react"

// TODO: Replace this with your actual WhatsApp number (include country code, e.g., 1234567890)
const WHATSAPP_NUMBER = "949619168"

type Message = {
  id: string
  type: "bot" | "user"
  text: string
  isFallback?: boolean
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi there! I'm the Smart School AI assistant. How can I help you today? You can ask me about features, pricing, or booking a demo.",
    },
  ])
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { id: Date.now().toString(), type: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulated rule-based logic
    setTimeout(() => {
      const lowercaseInput = userMessage.text.toLowerCase()
      let botResponse: Message

      if (lowercaseInput.includes("pricing") || lowercaseInput.includes("cost")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "Our pricing depends on the size of your institution. We offer custom plans for Independent Schools, International Schools, and Groups. Would you like to book a demo to get a custom quote?",
        }
      } else if (lowercaseInput.includes("feature") || lowercaseInput.includes("what can you do")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "We offer 13+ modules including AI Dashboards, Student Management, Automated Attendance, Timetable Optimization, and Fee Collection. Check out our Features page for more!",
        }
      } else if (lowercaseInput.includes("demo") || lowercaseInput.includes("book")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "You can book a demo by clicking the 'Book a Demo' button in the top navigation bar, or I can connect you with our sales team on WhatsApp right now.",
        }
      } else if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "Hello! How can I assist you with Smart School AI today?",
        }
      } else {
        // Fallback state
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: "I'm still learning and might not have the exact answer for that. Let me connect you directly with our human support team on WhatsApp!",
          isFallback: true,
        }
      }

      setMessages((prev) => [...prev, botResponse])
    }, 600)
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
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col mb-4 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Smart School Assistant</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> Online
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.type === "user" ? "bg-blue-100 text-blue-600" : "bg-blue-600 text-white"}`}>
                      {msg.type === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    <div className={`flex flex-col gap-2 ${msg.type === "user" ? "items-end" : "items-start"}`}>
                      <div className={`p-3 rounded-2xl text-sm ${
                        msg.type === "user" 
                          ? "bg-blue-600 text-white rounded-tr-sm" 
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-sm shadow-sm"
                      }`}>
                        {msg.text}
                      </div>

                      {msg.isFallback && (
                        <button
                          onClick={openWhatsApp}
                          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Chat on WhatsApp
                          <ExternalLink className="w-3 h-3 ml-1 opacity-80" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? "bg-slate-800 hover:bg-slate-900" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
        } text-white`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  )
}
