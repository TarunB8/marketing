'use client'

import React from 'react'
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Scale,
  Globe,
  Star,
  ChevronRight,
  FileCheck,
  Download,
  Server
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function CompliancePage() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: The "Shield" */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12"
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-8 uppercase tracking-wider hover:bg-blue-100 hover:border-blue-200 transition-all shadow-sm cursor-default"
            >
              <ShieldCheck className="w-4 h-4" />
              Audit-Ready Guarantee
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              The Compliance Engine Built for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">
                Australian Standards.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              Don't rely on spreadsheets for legal obligations. AccuCarbon is engineered specifically for the <strong>NGER Act 2007</strong> and <strong>Safeguard Mechanism</strong>.
            </motion.p>

            {/* Key Regulations Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500"
            >
              {[
                { icon: true, text: "NGER Act" },
                { icon: true, text: "ISO 14064-1" },
                { icon: false, text: "Data Hosted in Sydney", server: true }
              ].map((item, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border transition-all cursor-default ${
                    item.server 
                      ? 'bg-blue-50 border-blue-100 text-blue-800' 
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  {item.icon && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {item.server && <Server className="w-4 h-4" />}
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image Asset */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative z-10 w-full max-w-md"
            >
              <motion.img 
                src="/compliance-shield.png" 
                alt="Audit Shield Guarantee" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
            {/* Glow Effect */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-20"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. LOCAL VS GLOBAL (The "Bento Grid") */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Column 1: Australian Specifics */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-blue-100 rounded-lg text-blue-700 hover:shadow-lg transition-all cursor-default"
              >
                <Scale className="w-6 h-6" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-900">Australian Mandates</h2>
            </motion.div>
            
            {/* Feature Card with Flow Image */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all group cursor-default"
            >
              <motion.h3 
                className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors"
              >
                NGER Reporting Calibration
              </motion.h3>
              <motion.p 
                className="text-slate-600 mb-6 text-sm leading-relaxed font-medium"
              >
                We automatically apply Scope 1 & 2 factors based on your facility's exact state/territory location.
              </motion.p>
              {/* Image Integration */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm mb-4 group-hover:shadow-md transition-all overflow-hidden"
              >
                <img 
                  src="/compliance-flow.png" 
                  alt="Compliance Flow" 
                  className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <ul className="space-y-3">
                {[
                  "Auto-updated July 1st annually",
                  "Threshold alerts (25kt / 100kt CO2-e)"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-2 text-sm text-slate-700 hover:translate-x-2 transition-transform"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Column 2: Global Standards */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-3 bg-emerald-100 rounded-lg text-emerald-700 hover:shadow-lg transition-all cursor-default"
              >
                <Globe className="w-6 h-6" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-900">Global Frameworks</h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all group cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <motion.h3 
                  className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                >
                  ISO 14064-1 Verification
                </motion.h3>
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  src="/compliance-global.png" 
                  alt="Global Standards" 
                  className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed font-medium">
                Data structured for third-party limited or reasonable assurance. Every calculation is traceable to the source invoice.
              </p>
              <ul className="space-y-3">
                {[
                  "Immutable audit logs",
                  "Source document attachment"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-2 text-sm text-slate-700 hover:translate-x-2 transition-transform"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all group cursor-default"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">GHG Protocol</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Full alignment with the Corporate Accounting and Reporting Standard. We handle the complex logic for Scope 3 categories (upstream/downstream).
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. LIVE LEGISLATION TRACKER */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 opacity-10 -z-0"
          style={{
            backgroundImage: "linear-gradient(45deg, #10b981, #3b82f6, #10b981)",
            backgroundSize: "200% 200%"
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-center gap-2 text-emerald-400 font-mono text-sm mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                SYSTEM ACTIVE
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-3xl font-bold"
              >
                Live Legislation Radar
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate-400 mt-2 font-medium"
              >
                We monitor regulatory changes so you don't have to.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-right"
            >
              <p className="text-xs text-slate-500 font-mono">LAST ENGINE UPDATE</p>
              <p className="text-xl font-mono text-emerald-400 font-bold">v2.4.0 (July 1, 2025)</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden font-mono text-sm shadow-2xl"
          >
            <div className="grid grid-cols-12 bg-slate-950 p-4 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-700">
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Authority</div>
              <div className="col-span-6">Update Description</div>
              <div className="col-span-2 text-right">Status</div>
            </div>
            
            {[
              { date: "July 01, 2025", authority: "DCCEEW", desc: "New NGA Factors Release for FY2025-26" },
              { date: "Mar 15, 2025", authority: "Clean Energy Reg", desc: "Safeguard Mechanism baseline adjustment logic" }
            ].map((update, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                whileHover={{ backgroundColor: "rgba(100, 116, 139, 0.3)" }}
                className="grid grid-cols-12 p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors group cursor-default"
              >
                <div className="col-span-2 text-slate-400 group-hover:text-slate-300 transition-colors">{update.date}</div>
                <div className="col-span-2 text-blue-400 group-hover:text-blue-300 transition-colors font-semibold">{update.authority}</div>
                <div className="col-span-6 text-slate-300 group-hover:text-slate-100 transition-colors">{update.desc}</div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="col-span-2 text-right text-emerald-400 flex items-center justify-end gap-2 group-hover:text-emerald-300 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" /> APPLIED
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. AUDITOR TESTIMONIALS (Social Proof) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Verified by Leading Auditors</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "The 'Audit Pack' export saves my team about 3 days of back-and-forth email time. The traceability is exactly what we need for reasonable assurance.",
                author: "James L.",
                role: "Partner, Tier 1 Audit Firm"
              },
              {
                quote: "We switched from spreadsheets to AccuCarbon specifically for the NGER logic. Knowing the factors update automatically gives us total peace of mind.",
                author: "Sarah O'Connor",
                role: "Head of Legal, Mining Corp"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-emerald-100/30 transition-all group cursor-default"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.5 }}
                  className="flex text-emerald-500 mb-6 gap-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: idx * 0.15 + 0.2 + i * 0.05, duration: 0.5 }}
                    >
                      <Star className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-slate-700 font-medium mb-6 text-lg leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{testimonial.author}</span>
                  <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RISK FAQ (Objection Handling) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12"
          >
            Compliance Questions
          </motion.h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What happens if the NGA factors change mid-year?",
                answer: "We maintain version control for all emission factors. If you report on a previous financial year, the system automatically uses the historical factors relevant to that period."
              },
              {
                question: "Is this suitable for a 'Reasonable Assurance' audit?",
                answer: "Yes. Our system is designed to meet the evidence requirements for reasonable assurance under ASAE 3410, including source data linkage and immutable calculation logs."
              },
              {
                question: "Can we integrate AccuCarbon with our ERP system?",
                answer: "Absolutely. We support CSV imports and are launching direct Xero and MYOB integrations in Q3 2026. Contact our integration team for custom API implementations."
              },
              {
                question: "How do you ensure data sovereignty for Australian regulations?",
                answer: "All data is encrypted and stored exclusively on servers in Sydney (AWS Sydney region). We never replicate or transmit data outside Australia without explicit consent."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-500 transition-all"
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  className="w-full p-6 text-left hover:bg-emerald-50/50 transition-colors group"
                >
                  <div className="font-bold text-slate-900 text-lg flex justify-between items-center">
                    {item.question}
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="text-emerald-500 group-hover:text-emerald-700 transition-colors" />
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
                  className="overflow-hidden border-t border-slate-200"
                >
                  <p className="text-slate-600 leading-relaxed text-base p-6 font-medium">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA (With Sample Report) */}
      <section className="py-24 px-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-12 border border-slate-200 shadow-xl text-center hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-all cursor-default"
          >
            <FileCheck className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Generate Your "Audit Pack"
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            One click exports a zip file containing your inventory, calculation logs, emission factor references, and source invoice PDFs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Start Compliance Check
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button 
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              View Sample Report
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
