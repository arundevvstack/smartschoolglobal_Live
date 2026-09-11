import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="sr-only">Smart School AI</span>
              <Image src="/logo.png" alt="Smart School AI" width={300} height={96} className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              The Intelligent Operating System for Modern Schools. Automate administration, predict student outcomes, and transform your school with AI.
            </p>
            <div className="flex space-x-6">
              {/* Trust badges can go here */}
              <div className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">
                ISO 27001 Certified • 99.9% Uptime SLA
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/solutions/independent" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Independent Schools</Link></li>
                  <li><Link href="/solutions/international" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">International Schools</Link></li>
                  <li><Link href="/solutions/group" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Group of Schools</Link></li>
              </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Key Features</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/features/student-management" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Student Management</Link></li>
                  <li><Link href="/features/attendance" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Attendance & Tracking</Link></li>
                  <li><Link href="/features/fees" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Fee Collection</Link></li>
                  <li><Link href="/features/parent-portal" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Parent Portal</Link></li>
                  <li><Link href="/features" className="text-sm leading-6 text-brand-600 font-medium hover:text-brand-800">View All Features &rarr;</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">About Us</Link></li>
                  <li><Link href="/resources/case-studies" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Case Studies</Link></li>
                  <li><Link href="/resources/buyers-guide" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Buyer's Guide</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/book-demo" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Book a Demo</Link></li>
                  <li><Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-brand-900">Contact Sales</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {year} Smart School AI Global Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-xs leading-5 text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</span>
              <span className="text-xs leading-5 text-muted-foreground hover:text-foreground cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
