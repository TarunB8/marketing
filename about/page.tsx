'use client'

import React from 'react'
import {
  MapPin,
  Download,
  FileCheck,
  Award,
  ShieldCheck,
  Landmark,
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[720px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/about-hero.png"
            alt="Melbourne Southbank"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl text-center px-6 space-y-8 flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur hover:bg-white/20 hover:border-white/50 transition-all shadow-lg shadow-black/10 cursor-default"
          >
            <MapPin className="w-3 h-3" />
            Melbourne HQ • Australian Owned
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
          >
            Sustainability is no longer an estimate.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 animate-gradient-x">
              It is a financial liability.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-slate-200 text-xl md:text-2xl max-w-3xl mx-auto font-medium"
          >
            We transform environmental complexity into{' '}
            <strong>audit-grade clarity</strong> trusted by Australian enterprises.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-500 text-slate-900 font-bold rounded-xl shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 transition-all cursor-pointer group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download FY26 Capability Statement
          </motion.a>
        </motion.div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="py-10 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: FileCheck, label: 'NGER Aligned', delay: 0 },
            { icon: Award, label: 'ISO 14064-1', delay: 0.1 },
            { icon: ShieldCheck, label: 'Climate Active', delay: 0.2 },
            { icon: Landmark, label: 'ASX Guidelines', delay: 0.3 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-emerald-100/50 transition-all cursor-default border border-slate-100 hover:border-emerald-300"
            >
              <item.icon className="text-emerald-600 w-5 h-5" />
              <span className="text-slate-700 font-semibold text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DNA ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-2 px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-full uppercase hover:bg-emerald-200 transition-colors cursor-default shadow-sm"
          >
            Our DNA
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Scientists report to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Auditors</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            Our platform is governed by Chartered Accountants and Environmental Scientists — ensuring every number stands up to scrutiny.
          </motion.p>

          {/* Feature cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200"
          >
            {[
              { icon: Briefcase, title: 'Ex-Big 4 Rigor', subtitle: 'KPMG / Deloitte', bg: 'bg-blue-100', color: 'text-blue-600' },
              { icon: Users, title: 'PhD Scientists', subtitle: 'CSIRO Partners', bg: 'bg-emerald-100', color: 'text-emerald-600' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 bg-white rounded-2xl px-4 py-4 shadow-sm hover:shadow-xl hover:shadow-emerald-100/30 transition-all border border-slate-100 hover:border-emerald-300 cursor-default"
              >
                <div className={`p-3 ${item.bg} rounded-xl ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ASX badge aligned under cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 max-w-xl"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white px-6 py-5 rounded-2xl shadow-2xl shadow-emerald-200/30 flex items-center gap-4 border border-slate-100 hover:border-emerald-300 hover:shadow-emerald-300/40 transition-all cursor-default group"
            >
              <motion.div 
                className="p-3 bg-blue-100 rounded-full text-blue-600 group-hover:scale-110 transition-transform"
              >
                <Landmark className="w-5 h-5" />
              </motion.div>
              <div>
                <p className="font-bold text-sm text-slate-900">ASX Standards</p>
                <p className="text-xs text-slate-500">Fully Compliant</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right column image */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-end"
        >
          <motion.div 
            className="relative w-full md:w-[520px] group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
            />
            <img
              src="/about-culture.png"
              alt="Team Collaboration"
              className="relative rounded-3xl shadow-2xl shadow-slate-900/10 w-full h-[480px] object-cover hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)] transition-all duration-500 border border-slate-100 group-hover:border-emerald-300"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5 transition-all" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FUTURE ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 group"
        >
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-all duration-500 pointer-events-none"
          />
          <motion.img
            src="/about-vision.png"
            alt="Digital Nature"
            className="relative rounded-2xl shadow-2xl shadow-slate-900/10 w-full h-[420px] object-cover hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)] transition-all duration-500 border border-slate-100 group-hover:border-teal-300"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-default"
          >
            <TrendingUp className="w-5 h-5" />
            Future Outlook
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl font-bold text-slate-900"
          >
            The Operating System for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Net Zero Economy</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-600 leading-relaxed font-medium"
          >
            From Melbourne engineering to Canberra compliance, AccuCarbon defines how Australian enterprises measure and govern climate impact across their value chains.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 shadow-lg hover:shadow-slate-900/30 transition-all border border-slate-800 hover:border-slate-700 group"
          >
            Join the Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* ================= ACKNOWLEDGEMENT ================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-50 py-10 border-t text-center text-sm text-slate-500 hover:text-slate-600 transition-colors cursor-default"
      >
        AccuCarbon acknowledges the Wurundjeri people of the Kulin Nation and pays
        respect to Elders past, present, and emerging.
      </motion.section>
    </div>
  )
}
