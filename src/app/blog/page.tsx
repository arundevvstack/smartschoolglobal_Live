import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Resources | Smart School AI",
  description: "Expert insights on reducing administrative workload, improving academic outcomes, and implementing AI in educational institutions.",
}

const blogs = [
  {
    id: "ai-in-education-2027",
    title: "How AI is Reshaping School Administration in 2027",
    excerpt: "Discover the top 5 ways artificial intelligence is reducing manual workload for educators and freeing up time for actual teaching.",
    category: "AI & Innovation",
    author: "Dr. Sarah Jenkins",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "improving-fee-collection",
    title: "The Secret to Achieving 95% On-Time Fee Collection",
    excerpt: "Automated reminders, predictive analytics, and seamless payment gateways are transforming how schools manage their finances.",
    category: "Finance",
    author: "Michael Chang",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "parent-engagement-strategies",
    title: "Building Trust: Strategies for Modern Parent Engagement",
    excerpt: "Why transparency and real-time communication are critical for student success, and how to achieve them with a centralized portal.",
    category: "Communication",
    author: "Elena Rodriguez",
    date: "Aug 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "data-driven-classrooms",
    title: "From Intuition to Data: The Data-Driven Classroom",
    excerpt: "Learn how teachers are using continuous assessment analytics to identify struggling students weeks before midterms.",
    category: "Academics",
    author: "David Okafor",
    date: "Jul 22, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2964&auto=format&fit=crop",
  },
  {
    id: "future-of-timetabling",
    title: "Why Manual Timetabling is Costing Your School Thousands",
    excerpt: "An analysis of the hidden costs of inefficient scheduling and how AI algorithms can solve multi-campus constraints in minutes.",
    category: "Operations",
    author: "Dr. Sarah Jenkins",
    date: "Jul 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "cybersecurity-in-schools",
    title: "Is Your Student Data Truly Secure in the Cloud?",
    excerpt: "A comprehensive guide to compliance, encryption, and why legacy on-premise servers are a massive liability for schools.",
    category: "Security",
    author: "Alan Turing",
    date: "Jun 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
  }
]

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
            Insights & Resources
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            The Smart School Blog
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert strategies on reducing administrative workload, improving academic outcomes, and implementing AI in modern educational institutions.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogs.map((post) => (
              <article key={post.id} className="flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Link href={`/blog/${post.id}`} className="block overflow-hidden h-64 relative">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10" />
                  {/* Using standard img for external placeholder unsplash URLs */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.id}`} className="block mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div className="text-sm font-semibold text-slate-900">
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700 transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
