import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Blog Article | Smart School AI",
  description: "Read the latest insights and strategies on modern school administration and edtech.",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock data for the static presentation
  const title = "How AI is Reshaping School Administration in 2027"
  const author = "Dr. Sarah Jenkins"
  const date = "Sep 10, 2026"
  const readTime = "5 min read"
  const category = "AI & Innovation"
  const image = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop"

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {category}
            </span>
            <span className="text-slate-400 text-sm">•</span>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
            <span className="text-slate-400 text-sm hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <Clock className="w-4 h-4" />
              {readTime}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            {title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-slate-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">
                SJ
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {author}
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[21/9] sm:aspect-[2.5/1] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
            <p className="lead text-xl text-slate-600 mb-8">
              Artificial Intelligence is no longer just a buzzword in education—it is a practical tool that is dramatically reducing the administrative burden on teachers and administrators alike. In this article, we explore how leading institutions are leveraging AI to automate their workflows.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Automated Attendance and Predictive Flagging</h2>
            <p className="text-slate-600 mb-6">
              Gone are the days of manual roll calls taking up the first 10 minutes of every class. Modern systems use a combination of smart ID cards, facial recognition (in appropriate environments), or rapid digital logging to instantly record attendance. More importantly, AI models predict absenteeism trends and automatically notify parents if a student misses multiple consecutive sessions, mitigating truancy before it becomes a habit.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Intelligent Timetable Generation</h2>
            <p className="text-slate-600 mb-6">
              Creating a master schedule for a school of 1,500 students with 100+ teachers, varying room capacities, and strict subject constraints used to take weeks of planning. Today, AI constraint-satisfaction algorithms can generate conflict-free, optimized timetables in minutes.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-10 italic text-xl text-slate-700 bg-blue-50/50 rounded-r-xl">
              "By automating our scheduling, we saved our administrative team over 40 hours of manual labor in the first month alone, completely eliminating room double-bookings."
            </blockquote>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Streamlined Fee Collection</h2>
            <p className="text-slate-600 mb-6">
              Chasing down tuition payments is often the most stressful part of school administration. AI models can now analyze payment histories and predict which families might need flexible payment plans or earlier reminders. This targeted approach has proven to increase on-time fee collection by up to 94%.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Conclusion</h2>
            <p className="text-slate-600 mb-6">
              The true promise of AI in schools isn't replacing teachers—it's giving them their time back. By automating the necessary but tedious administrative work, educators can focus on what they do best: teaching and inspiring the next generation.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
