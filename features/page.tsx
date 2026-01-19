'use client'

import React, { useEffect, useState } from 'react'
import { 
  BarChart3, 
  Plane, 
  ScanLine, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Star,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeaturesPage() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isDarkMode)
  }, [])

  const features = [
    {
      title: "Always-Current NGA Factors",
      description: "Don't risk non-compliance by using last year's math. We automatically update our engine every July 1st to match the latest National Greenhouse Accounts factors.",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      image: "/feature-nga.png", 
      bullets: [
        "Auto-updates every financial year (July 1st)",
        "Historical factor versioning kept for audits"
      ]
    },
    {
      title: "Turn Flight Confirmations into Data",
      description: "Scope 3 is usually a black box. Not anymore. Our distance-based logic parses IATA codes (like SYD → MEL) to calculate precise emissions instantly.",
      icon: <Plane className="w-6 h-6 text-white" />,
      image: "/feature-travel.png", 
      bullets: [
        "Direct integration with travel invoices",
        "Separates domestic vs. international automatically"
      ]
    },
    {
      title: "The End of Manual Data Entry",
      description: "Your team has better things to do than type data from utility bills. Drag and drop any energy invoice, and our AI extracts usage data with 99% accuracy.",
      icon: <ScanLine className="w-6 h-6 text-white" />,
      image: "/feature-scanning.png", 
      bullets: [
        "Recognizes 50+ Australian utility providers",
        "Flags anomalies or data gaps instantly"
      ]
    },
    {
      title: "Reports That Auditors Trust",
      description: "Generate a verifiable audit trail in one click. Every calculation is stamped with a unique hash that links back to the source data and emission factor used.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      image: "/feature-audit.png", 
      bullets: [
        "One-click 'Audit Pack' export",
        "Immutable data logs for full traceability"
      ]
    }
  ]

  const faqItems = [
    {
      question: "Is my data secure?",
      answer: "Yes. We use bank-grade AES-256 encryption. Your data is stored on Australian servers (Sydney region) to ensure full data sovereignty compliance."
    },
    {
      question: "Do you integrate with Xero or MYOB?",
      answer: "Currently, we support CSV imports from all major accounting platforms. Direct API integration with Xero and MYOB is launching in Q3 2026."
    },
    {
      question: "How do you handle NGA Factor updates?",
      answer: "Our team monitors the Department of Climate Change releases. We update our calculation engine within 48 hours of new factors being published every July."
    },
    {
      question: "Can I export my data in different formats?",
      answer: "Absolutely. Export to PDF, Excel, or JSON formats. Our audit pack includes all supporting documentation and raw data files."
    }
  ]

  const testimonials = [
    {
      text: "Finally, a tool that speaks the language of accountants. The NGA factors auto-update saved us weeks.",
      author: "Sarah Jenkins",
      role: "CFO, TechFlow Australia"
    },
    {
      text: "The AI invoice scanning is actually magic. It recognized our erratic energy bills from 3 different states instantly.",
      author: "Michael Chen",
      role: "Head of Operations, BuildCo"
    },
    {
      text: "Our auditors loved the trace-back feature. Being able to click a QR code and see the raw invoice data is a game changer.",
      author: "Emma Ross",
      role: "Sustainability Lead, RetailGroup"
    }
  ]

  // Loading Screen
  const LoadingScreen = () => (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isDark ? 'bg-slate-950' : 'bg-white'
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`relative w-24 h-24 rounded-2xl ${
                isDark ? 'bg-slate-900' : 'bg-slate-100'
              } flex items-center justify-center border-2 ${
                isDark ? 'border-emerald-500/30' : 'border-emerald-400/20'
              }`}
            >
              <img 
                src="/logo-icon.png" 
                alt="Loading" 
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            <div className={`w-48 h-1 rounded-full ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            } overflow-hidden`}>
              <motion.div
                animate={{ x: [-192, 192] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"
              />
            </div>

            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
              }}
              className={`text-sm font-semibold tracking-widest ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Loading Excellence...
            </motion.p>
          </div>

          <motion.div
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Theme Toggle
  const ThemeToggle = () => (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed top-6 right-6 z-40 p-3 rounded-xl transition-all ${
        isDark 
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-950 text-slate-50' 
        : 'bg-white text-slate-950'
    }`}>
      <LoadingScreen />
      <ThemeToggle />

      {/* 1. HERO SECTION */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}>
        {/* Background elements */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
            isDark 
              ? 'bg-emerald-500/20' 
              : 'bg-emerald-400/10'
          }`}
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
            isDark 
              ? 'bg-blue-500/20' 
              : 'bg-blue-400/10'
          }`}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={!isLoading ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all backdrop-blur-sm w-fit ${
                isDark
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold">Updated for FY2025-26 Reporting</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight font-sans"
            >
              The Ledger That Knows <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Australian Carbon Law.
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className={`text-lg sm:text-xl leading-relaxed font-medium ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              } font-sans`}
            >
              Stop wrestling with NGER spreadsheets. Upgrade to the only platform with built-in Australian National Greenhouse Accounts factors and audit-grade traceability.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={!isLoading ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {["NGER Act 2007", "ISO 14064-1", "Climate Active"].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all font-medium text-sm ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 hover:border-emerald-400 hover:bg-white'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={!isLoading ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px]"
          >
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative z-10 w-full max-w-md"
            >
              <div className={`w-full h-full rounded-2xl overflow-hidden border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10'
                  : 'bg-slate-50 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20'
              }`}>
                <img 
                  src="/feature-hero.png"
                  alt="Professional Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${
                isDark
                  ? 'bg-emerald-500/30'
                  : 'bg-emerald-400/20'
              }`}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden ${
        isDark 
          ? 'bg-slate-900 border-y border-slate-800' 
          : 'bg-slate-50 border-y border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-sans">
              From Invoice to Audit in Minutes
            </h2>
            <p className={`text-lg font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            } font-sans`}>
              No complex implementation. No IT team required.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`hidden md:block absolute top-12 left-[16%] right-[16%] h-1 ${
                isDark
                  ? 'bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-emerald-500/30'
                  : 'bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200'
              } -z-10 origin-left`}
            />

            {/* Steps */}
            {[
              { num: 1, title: "Connect Your Data", desc: "Drag & drop utility bills or sync via CSV. Our system instantly categorizes data types." },
              { num: 2, title: "AI Processing", desc: "We match every line item to the correct FY2026 NGA Factor automatically." },
              { num: 3, title: "Export Audit Pack", desc: "Download a signed, trace-ready PDF report for your auditor or board meeting." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 flex items-center justify-center mb-6 transition-all font-bold ${
                    isDark
                      ? 'bg-slate-800 border-emerald-500/30 group-hover:border-emerald-500/60 group-hover:shadow-lg group-hover:shadow-emerald-500/20'
                      : 'bg-white border-emerald-100 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-200'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl text-emerald-500">{step.num}</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors font-sans">
                  {step.title}
                </h3>
                <p className={`text-sm sm:text-base font-medium leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                } font-sans`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Icon Badge */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center p-4 sm:p-5 rounded-2xl w-fit transition-all ${
                    isDark
                      ? 'bg-emerald-500/20 hover:bg-emerald-500/30 shadow-lg shadow-emerald-500/20'
                      : 'bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/30'
                  }`}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-sans"
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className={`text-base sm:text-lg leading-relaxed font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  } font-sans`}
                >
                  {feature.description}
                </motion.p>
                
                {/* Bullets */}
                <ul className="space-y-3 sm:space-y-4">
                  {feature.bullets.map((bullet, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm sm:text-base font-medium ${
                        isDark ? 'text-slate-200' : 'text-slate-700'
                      } font-sans`}>
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.button 
                    whileHover={{ x: 4 }}
                    className={`group inline-flex items-center gap-2 text-base font-bold transition-colors ${
                      isDark
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-emerald-600 hover:text-emerald-700'
                    }`}
                  >
                    See how it works
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex justify-center md:justify-end group"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative w-full max-w-sm rounded-2xl overflow-hidden border transition-all ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10'
                      : 'bg-slate-50 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20'
                  }`}
                >
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 ${
        isDark 
          ? 'bg-slate-900 border-t border-slate-800' 
          : 'bg-slate-50 border-t border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-sans">
              Trusted by Modern Finance Teams
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10'
                    : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20'
                }`}
              >
                {/* Stars */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.5 }}
                  className="flex gap-1 mb-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: idx * 0.15 + 0.2 + i * 0.05, duration: 0.5 }}
                    >
                      <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <p className={`font-medium mb-6 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                } font-sans`}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <span className="block font-bold text-sm sm:text-base hover:text-emerald-500 transition-colors cursor-default font-sans">
                    {testimonial.author}
                  </span>
                  <span className={`text-xs font-medium ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  } font-sans`}>
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 font-sans"
          >
            Common Questions
          </motion.h2>
          
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`border rounded-xl overflow-hidden transition-all ${
                  isDark
                    ? 'border-slate-700 hover:border-emerald-500/50'
                    : 'border-slate-200 hover:border-emerald-400'
                }`}
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  whileHover={{ backgroundColor: isDark ? "rgba(16, 185, 129, 0.05)" : "rgba(16, 185, 129, 0.02)" }}
                  className={`w-full p-4 sm:p-6 text-left transition-all group ${
                    isDark
                      ? expandedFaq === idx ? 'bg-slate-800/50' : ''
                      : expandedFaq === idx ? 'bg-emerald-50/30' : ''
                  }`}
                >
                  <div className="font-bold text-base sm:text-lg flex justify-between items-center gap-4 font-sans">
                    <span>{item.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronRight className={`transition-colors ${
                        isDark
                          ? 'text-emerald-500 group-hover:text-emerald-400'
                          : 'text-emerald-600 group-hover:text-emerald-700'
                      }`} />
                    </motion.div>
                  </div>
                </motion.button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedFaq === idx ? "auto" : 0, 
                    opacity: expandedFaq === idx ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden border-t ${
                    isDark ? 'border-slate-700' : 'border-slate-200'
                  }`}
                >
                  <p className={`text-sm sm:text-base font-medium p-4 sm:p-6 leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  } font-sans`}>
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className={`px-4 sm:px-6 pb-16 sm:pb-24 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl ${
            isDark
              ? 'bg-gradient-to-br from-slate-900 to-slate-800 shadow-emerald-500/20'
              : 'bg-gradient-to-br from-slate-900 to-slate-800'
          }`}
        >
          {/* Background effects */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none"
          >
            <motion.div 
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"
            />
            <motion.div 
              animate={{ scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"
            />
          </motion.div>

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-sans"
            >
              Ready to audit-proof your carbon ledger?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium font-sans"
            >
              Join the Australian companies moving from spreadsheets to software. Get your free audit readiness assessment today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/70 text-sm sm:text-base font-sans"
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-slate-400 text-white font-semibold rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all text-sm sm:text-base font-sans"
              >
                Book a Demo
              </motion.button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-semibold font-sans"
            >
              No credit card required • Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}