"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Solutions", 
    href: "/solutions",
    dropdown: [
      { name: "K-12 Schools", href: "/solutions/k-12", description: "Complete ERP for primary and secondary schools" },
      { name: "Higher Education", href: "/solutions/higher-ed", description: "Manage colleges and universities seamlessly" },
      { name: "Multi-Campus", href: "/solutions/multi-campus", description: "Centralised control for school groups" },
      { name: "International", href: "/solutions/international", description: "Built for IB, IGCSE & Global Curricula" },
    ]
  },
  { 
    name: "Features", 
    href: "/features",
    dropdown: [
      { name: "Student Management", href: "/features/student-management" },
      { name: "Attendance", href: "/features/attendance" },
      { name: "Exams & Results", href: "/features/exams" },
      { name: "Fee Collection", href: "/features/fees" },
      { name: "Timetable", href: "/features/timetable" }, // Unverified "AI" removed
      { name: "Parent Portal", href: "/features/parent-portal" },
      { name: "Analytics", href: "/features/analytics" },
      { name: "Library", href: "/features/library" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = React.useState<string | null>(null)
  
  const pathname = usePathname()
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const navRef = React.useRef<HTMLDivElement>(null)

  // ----------------------------------------------------
  // Scroll Detection
  // ----------------------------------------------------
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ----------------------------------------------------
  // Route Change -> Close Menus
  // ----------------------------------------------------
  React.useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // ----------------------------------------------------
  // Body Scroll Lock & Mobile Menu Management
  // ----------------------------------------------------
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      // Reset mobile accordion when main menu closes
      setMobileActiveDropdown(null)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // ----------------------------------------------------
  // Outside Click & ESC Key
  // ----------------------------------------------------
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (activeDropdown && navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeDropdown])

  // ----------------------------------------------------
  // Desktop Hover Handlers
  // ----------------------------------------------------
  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms bridge delay
  }

  // ----------------------------------------------------
  // Toggle Handlers
  // ----------------------------------------------------
  const handleDesktopClickToggle = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name))
  }

  const handleMobileClickToggle = (name: string) => {
    setMobileActiveDropdown(prev => (prev === name ? null : name))
  }

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white border-blue-900/10 shadow-sm"
          : "bg-white border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Smart School AI</span>
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl leading-none tracking-tighter">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-950">Smart School AI</span>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-950"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 h-full items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const isDropdownOpen = activeDropdown === item.name;

            return (
            <div 
              key={item.name} 
              className="relative flex items-center h-full"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <button
                  onClick={() => handleDesktopClickToggle(item.name)}
                  aria-expanded={isDropdownOpen}
                  className={cn(
                    "flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors h-full border-b-2 pt-[2px]",
                    isActive ? "text-blue-600 border-blue-600" : "text-blue-950 border-transparent hover:text-blue-600",
                    isDropdownOpen && "text-blue-600"
                  )}
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} aria-hidden="true" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-semibold leading-6 transition-colors h-full border-b-2 pt-[2px]",
                    isActive ? "text-blue-600 border-blue-600" : "text-blue-950 border-transparent hover:text-blue-600"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Desktop Submenu Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      // The top-[calc(100%-10px)] ensures the invisible hover bridge is covered cleanly
                      className="absolute top-full start-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="w-screen max-w-md overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-2 bg-white px-5 py-6 sm:gap-4 sm:p-6 border border-blue-900/5 rounded-xl">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="-m-2 flex items-start rounded-lg p-3 hover:bg-blue-50 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="ms-2">
                                <p className="text-sm font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
                                  {subItem.name}
                                </p>
                                {('description' in subItem) && (
                                  <p className="mt-1 text-xs text-slate-500">
                                    {(subItem as any).description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          )})}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <Button variant="outline" className="bg-white text-blue-950 border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors shadow-sm" asChild>
            <Link href="/book-demo">Contact Sales</Link>
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition-colors" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            
            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-blue-900/10 pb-4">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xl leading-none">S</span>
                  </div>
                  <span className="font-bold text-xl text-blue-950">Smart School AI</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-blue-950 hover:bg-slate-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-6 flow-root" id="mobile-menu">
                <div className="-my-6 divide-y divide-blue-900/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      const isMobileDropdownOpen = mobileActiveDropdown === item.name;
                      
                      return (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <button
                            onClick={() => handleMobileClickToggle(item.name)}
                            aria-expanded={isMobileDropdownOpen}
                            className={cn(
                              "w-full flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                              isActive ? "text-blue-600 bg-blue-50" : "text-blue-950 hover:bg-blue-50 hover:text-blue-600"
                            )}
                          >
                            {item.name}
                            <ChevronDown className={cn("h-5 w-5 transition-transform", isMobileDropdownOpen && "rotate-180")} aria-hidden="true" />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                              isActive ? "text-blue-600 bg-blue-50" : "text-blue-950 hover:bg-blue-50 hover:text-blue-600"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                        
                        {/* Mobile Accordion Content */}
                        {item.dropdown && (
                          <AnimatePresence>
                            {isMobileDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ps-4 mt-1 space-y-1 border-l-2 border-blue-100 ms-3 py-2">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    )})}
                  </div>
                  <div className="py-6 flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-center bg-white text-blue-950 border-blue-200 hover:bg-blue-50 shadow-sm transition-colors" asChild>
                      <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>Contact Sales</Link>
                    </Button>
                    <Button className="w-full justify-center bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition-colors" asChild>
                      <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
