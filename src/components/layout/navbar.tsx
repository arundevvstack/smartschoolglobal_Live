"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Building2, Globe2, Network, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Solutions", 
    href: "/solutions",
    dropdown: [
      { 
        name: "Independent Schools", 
        href: "/solutions/independent", 
        description: "Complete management for independent institutions",
        icon: Building2,
        color: "text-blue-500",
        bg: "bg-blue-50"
      },
      { 
        name: "International Schools", 
        href: "/solutions/international", 
        description: "Built for IB, IGCSE & Global Curricula",
        icon: Globe2,
        color: "text-indigo-500",
        bg: "bg-indigo-50"
      },
      { 
        name: "Group of Schools", 
        href: "/solutions/group", 
        description: "Centralised control for multi-campus networks",
        icon: Network,
        color: "text-purple-500",
        bg: "bg-purple-50"
      },
    ]
  },
  { name: "Features", href: "/features" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
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
    }, 150)
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-blue-900/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "bg-white border-transparent"
      )}
    >
      <nav className={cn(
        "mx-auto flex max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500",
        isScrolled ? "h-20" : "h-28"
      )} aria-label="Global">
        
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">Smart School AI</span>
            <Image 
              src="/smart-school-logo.png" 
              alt="Smart School AI" 
              width={400} 
              height={120} 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 origin-left" 
              priority 
            />
          </Link>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-950 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10 h-full items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const isDropdownOpen = activeDropdown === item.name;

            const baseLinkStyles = cn(
              "relative flex items-center gap-x-1.5 text-base font-bold tracking-wide transition-colors h-full px-2",
              isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600",
              isDropdownOpen && "text-blue-600"
            )

            const animatedUnderline = (
              <span className={cn(
                "absolute bottom-[35%] left-0 h-[3px] w-full bg-blue-600 rounded-full transition-all duration-300 origin-left",
                isActive ? "scale-x-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100",
                isDropdownOpen && "scale-x-100 opacity-100"
              )} />
            )

            return (
            <div 
              key={item.name} 
              className="relative flex items-center h-full group"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <button
                  onClick={() => handleDesktopClickToggle(item.name)}
                  aria-expanded={isDropdownOpen}
                  className={baseLinkStyles}
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isDropdownOpen && "rotate-180 text-blue-600")} aria-hidden="true" />
                  {animatedUnderline}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={baseLinkStyles}
                >
                  {item.name}
                  {animatedUnderline}
                </Link>
              )}

              {/* Desktop Submenu Dropdown (Mega Menu Style) */}
              {item.dropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[calc(100%-25px)] start-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="w-screen max-w-[500px] overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 bg-white">
                        <div className="relative grid gap-2 p-4">
                          {item.dropdown.map((subItem: any) => {
                            const Icon = subItem.icon
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-start gap-4 rounded-xl p-4 hover:bg-slate-50 transition-all duration-200 group/item"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className={cn("p-3 rounded-lg shrink-0 transition-colors", subItem.bg)}>
                                  <Icon className={cn("w-6 h-6", subItem.color)} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <p className="text-base font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                                      {subItem.name}
                                    </p>
                                    <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                                  </div>
                                  <p className="mt-1 text-sm text-slate-500 font-medium leading-snug">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                        <div className="bg-slate-50 p-4 border-t border-slate-100">
                          <Link href="/solutions" className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors" onClick={() => setActiveDropdown(null)}>
                            View all solutions
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          )})}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
          <Button variant="ghost" className="text-base font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors h-12 px-6 rounded-full" asChild>
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 h-12 px-8 text-base font-bold rounded-full" asChild>
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
            <div 
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Smart School AI</span>
                  <Image src="/smart-school-logo.png" alt="Smart School AI" width={400} height={120} className="h-8 md:h-10 w-auto object-contain" priority />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-8 flow-root" id="mobile-menu">
                <div className="-my-6 divide-y divide-slate-100">
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
                              "w-full flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-bold transition-colors",
                              isActive || isMobileDropdownOpen ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:bg-slate-50"
                            )}
                          >
                            {item.name}
                            <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isMobileDropdownOpen && "rotate-180 text-blue-600")} aria-hidden="true" />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-4 py-3.5 text-lg font-bold transition-colors",
                              isActive ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:bg-slate-50"
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
                                <div className="mt-2 space-y-2 px-4 py-3 bg-slate-50 rounded-xl">
                                  {item.dropdown.map((subItem: any) => {
                                    const Icon = subItem.icon
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-white transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        <div className={cn("p-2 rounded-md shrink-0", subItem.bg)}>
                                          <Icon className={cn("w-5 h-5", subItem.color)} />
                                        </div>
                                        <span className="text-base font-bold text-slate-700">
                                          {subItem.name}
                                        </span>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    )})}
                  </div>
                  <div className="py-8 flex flex-col gap-4">
                    <Button variant="outline" className="w-full h-14 text-lg font-bold text-slate-700 rounded-xl border-slate-200" asChild>
                      <Link href="/contact-sales" onClick={() => setMobileMenuOpen(false)}>Contact Sales</Link>
                    </Button>
                    <Button className="w-full h-14 text-lg font-bold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20" asChild>
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
