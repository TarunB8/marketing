'use client'

import React from 'react'
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Database, 
  Globe, 
  Lock, 
  RefreshCw, 
  Terminal,
  FileSpreadsheet,
  PlusCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function IntegrationsPage() {
  const integrations = [
    { name: 'Xero', icon: 'X', color: 'blue', desc: 'Two-way sync for invoices & expenses.' },
    { name: 'MYOB', icon: 'M', color: 'purple', desc: 'Native integration for Business & Advanced.' },
    { name: 'QuickBooks', icon: 'QB', color: 'green', desc: 'Multi-currency support included.' },
    { name: 'CSV', icon: 'File', color: 'slate', desc: 'Import data from any legacy system.' }
  ]

  const enterpriseErps = [
    { name: 'SAP S/4HANA', icon: 'SAP' },
    { name: 'Oracle NetSuite', icon: 'OR' },
    { name: 'Dynamics 365', icon: 'MS' }
  ]

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 hover:border-blue-400',
    purple: 'bg-purple-50 text-purple-600 hover:border-purple-400',
    green: 'bg-green-50 text-green-600 hover:border-green-400',
    slate: 'bg-slate-50 text-slate-600 hover:border-slate-400'
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Network */}
      <section className="pt-24 pb-20 px-6 bg-slate-50 border-b border-slate-200">
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-8 uppercase tracking-wider hover:bg-emerald-100 hover:border-emerald-200 transition-all shadow-sm cursor-default"
            >
              <RefreshCw className="w-4 h-4 animate-spin" />
              Real-Time Sync Active
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              The Central Hub for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Financial & Energy Data.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              Stop manual data entry. AccuCarbon connects directly to your <strong>Xero</strong>, <strong>MYOB</strong>, or <strong>SAP</strong> ledger to automate carbon calculations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                Browse Integration Library
              </motion.button>
              <motion.button 
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all shadow-md hover:shadow-lg"
              >
                Read API Docs
              </motion.button>
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
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <img 
                src="/integration-ecosystem.png" 
                alt="AccuCarbon Ecosystem" 
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTEGRATION TIERS (Categorized) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        
        {/* Category A: Core Connectivity */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 20 }}
              className="cursor-default"
            >
              <Globe className="w-6 h-6 text-emerald-500" />
            </motion.div>
            Core Connectivity (Instant Setup)
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 rounded-2xl border border-slate-200 transition-all group bg-white hover:shadow-lg cursor-default ${
                  integration.color === 'blue' ? 'hover:border-blue-400' :
                  integration.color === 'purple' ? 'hover:border-purple-400' :
                  integration.color === 'green' ? 'hover:border-green-400' :
                  'hover:border-slate-400'
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 font-bold text-lg ${
                    integration.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    integration.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    integration.color === 'green' ? 'bg-green-50 text-green-600' :
                    'bg-white border border-slate-200 text-slate-600'
                  }`}
                >
                  {integration.icon === 'File' ? (
                    <FileSpreadsheet className="w-5 h-5" />
                  ) : (
                    integration.icon
                  )}
                </motion.div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">{integration.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{integration.desc}</p>
                <motion.span 
                  whileHover={{ gap: 8 }}
                  className="inline-flex items-center text-xs font-bold transition-all"
                  style={{
                    color: integration.color === 'blue' ? '#2563eb' :
                           integration.color === 'purple' ? '#9333ea' :
                           integration.color === 'green' ? '#16a34a' :
                           '#475569'
                  }}
                >
                  Connect <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category B: Enterprise ERP */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2 
            className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-default"
            >
              <Database className="w-6 h-6 text-blue-600" />
            </motion.div>
            Enterprise ERP
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {enterpriseErps.map((erp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02, opacity: 1 }}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4 opacity-75 hover:opacity-100 transition-all hover:shadow-lg group cursor-default"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 shadow-sm group-hover:shadow-md transition-all"
                >
                  {erp.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{erp.name}</h3>
                  <motion.span 
                    className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full inline-block group-hover:bg-blue-200 transition-all"
                  >
                    ENTERPRISE
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "Request Integration" Banner (Concierge Service) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl bg-gradient-to-r from-slate-100 to-white border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all group cursor-default"
        >
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 bg-white rounded-full shadow-sm"
            >
              <PlusCircle className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            </motion.div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Missing a platform?</h3>
              <p className="text-slate-500 text-sm">We build custom connectors for Enterprise plans in 14 days.</p>
            </div>
          </div>
          <motion.button 
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all text-sm shadow-sm hover:shadow-md"
          >
            Request Integration
          </motion.button>
        </motion.div>

      </section>

      {/* 3. DEVELOPER API SECTION (Dark Mode) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm mb-6 cursor-default"
            >
              <Terminal className="w-4 h-4" />
              DEVELOPER_FIRST
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Build on our Ledger.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-slate-400 text-lg leading-relaxed font-medium"
            >
              Need a custom integration? Our Rest API gives you full programmatic access to emissions factors, inventory data, and audit logs.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-4 mb-10"
            >
              {[
                "99.99% Uptime SLA",
                "Granular Scopes & Permissions",
                "Webhooks for Audit Events"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 hover:translate-x-2 transition-transform"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-mono text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl"
            >
              <Code2 className="w-4 h-4" />
              View API Reference
            </motion.button>
          </motion.div>

          {/* API Image Asset */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"
            />
            <motion.div 
              whileHover={{ y: -8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-800 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transition-all"
            >
              <img 
                src="/integration-api.png" 
                alt="AccuCarbon API Example" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. SECURITY FOOTER */}
      <section className="py-20 px-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex justify-center mb-8 cursor-default"
          >
            <img 
              src="/integration-security.png" 
              alt="Bank-Grade Security" 
              className="w-24 h-24 object-contain drop-shadow-xl"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl font-bold text-slate-900 mb-4"
          >
            Bank-Grade Data Security
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-500 max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
          >
            We treat your carbon data with the same rigor as financial data. All integrations are read-only by default and encrypted at rest (AES-256).
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest flex-wrap"
          >
            {[
              { text: "SOC 2 Type II", icon: Lock },
              { text: "ISO 27001", icon: Lock },
              { text: "GDPR Ready", icon: Lock }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-default group"
              >
                {idx > 0 && <span className="text-slate-300">•</span>}
                <item.icon className="w-3 h-3 text-emerald-600 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-emerald-600 transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}