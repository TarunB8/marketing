'use client'

import Link from 'next/link'
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

// REMOVED: export const metadata = ... (This causes the error in 'use client' files)

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative bg-slate-950 text-white py-32 px-6 sm:px-8 overflow-hidden">
        {/* Background Subtle Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            AccuCarbon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Academy.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Practical guides, NGA updates, and regulatory insights for Australian finance teams.
          </motion.p>
        </div>
      </section>

      {/* ================= ARTICLES GRID ================= */}
      <section className="py-24 px-6 sm:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <ArticleCard
              index={0}
              category="Compliance"
              title="Scope 3 in Australian Construction"
              desc="How new regulations impact supply chain reporting and Tier 1 contractor obligations."
              date="Oct 24, 2025"
              color="emerald"
            />
            
            {/* Article 2 */}
            <ArticleCard
              index={1}
              category="CFO Guides"
              title="The Finance Leader's Guide"
              desc="Why sustainability data is moving from the EHS department to the CFO's desk."
              date="Oct 12, 2025"
              color="blue"
            />
            
            {/* Article 3 */}
            <ArticleCard
              index={2}
              category="NGA Factors"
              title="2025 NGA Factor Updates"
              desc="A technical summary of the Australian Government's latest emission factors for electricity."
              date="Sep 28, 2025"
              color="amber"
            />

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-white py-24 px-6 sm:px-8 border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Start learning today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our complete library of resources and guides to stay ahead of mandatory reporting.
          </p>
          
          <div className="pt-2">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-lg"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

/* ================= REUSABLE ARTICLE CARD ================= */

function ArticleCard({
  category,
  title,
  desc,
  date,
  color,
  index
}: {
  category: string
  title: string
  desc: string
  date: string
  color: 'emerald' | 'blue' | 'amber'
  index: number
}) {
  // Dynamic color classes for the thumbnail background
  const colors = {
    emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100'
  }

  const selectedColor = colors[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Link
        href="#"
        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-emerald-500/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
      >
        {/* Visual Thumbnail Area */}
        <div className={`h-60 ${selectedColor} relative flex items-center justify-center transition-colors duration-500 overflow-hidden`}>
          {/* Abstract Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Central Icon Effect */}
          <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
             <BookOpen size={32} className="opacity-80" />
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
            {category}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-1 border-t border-slate-50">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-4">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {date}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> 5 min read</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1">
            {desc}
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 pt-4 border-t border-slate-100 group-hover:text-emerald-700 transition-colors">
            Read Article 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}