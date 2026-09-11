import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[90rem] px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="sr-only">Smart School AI</span>
              {/* Added brightness-0 invert in case the logo is black so it shows up in dark mode, and reduced height from h-24 to h-16 for better footer proportions */}
              <Image src="/smart-school-logo.png" alt="Smart School AI" width={400} height={120} className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 origin-left" />
            </Link>
            <p className="text-sm leading-6 text-slate-400 max-w-xs">
              The Intelligent Operating System for Modern Schools. Automate administration, predict student outcomes, and transform your school with AI.
            </p>
            <div className="flex space-x-6">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                ISO 27001 Certified • 99.9% Uptime SLA
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-white tracking-wide">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/solutions/independent" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Independent Schools</Link></li>
                  <li><Link href="/solutions/international" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">International Schools</Link></li>
                  <li><Link href="/solutions/group" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Group of Schools</Link></li>
              </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-white tracking-wide">Key Features</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/features/student-management" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Student Management</Link></li>
                  <li><Link href="/features/attendance" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Attendance & Tracking</Link></li>
                  <li><Link href="/features/fees" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Fee Collection</Link></li>
                  <li><Link href="/features/parent-portal" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Parent Portal</Link></li>
                  <li><Link href="/features" className="text-sm leading-6 text-blue-500 font-bold hover:text-blue-400 transition-colors">View All Features &rarr;</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-white tracking-wide">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
                  <li><Link href="/resources/case-studies" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Case Studies</Link></li>
                  <li><Link href="/resources/buyers-guide" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Buyer's Guide</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-white tracking-wide">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/book-demo" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Book a Demo</Link></li>
                  <li><Link href="/contact-sales" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">Contact Sales</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800/60 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-slate-500">
              &copy; {year} Smart School AI Global Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-xs leading-5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-xs leading-5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
