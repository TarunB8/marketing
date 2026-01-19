'use client'

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Key, 
  FileCheck, 
  Eye, 
  CheckCircle2,
  ArrowRight,
  Landmark,
  ChevronRight,
  Zap,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function SecurityPage() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null)

  const features = [
    {
      title: "Unbreakable Encryption",
      description: "Every byte of data is encrypted at rest using AES-256 (the banking standard) and in transit via TLS 1.3 with Perfect Forward Secrecy.",
      icon: <Key className="w-6 h-6 text-white" />,
      image: "/security-encryption.png", 
      bullets: [
        "Customer-Managed Keys (Enterprise)",
        "Hourly Encrypted Backups",
        "Sensitive Fields Hashed in DB"
      ]
    },
    {
      title: "Enterprise Identity Management", 
      description: "Manage access at scale. We support SAML 2.0 and OIDC for seamless integration with your existing identity provider.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      image: "/security-sso.png",
      bullets: [
        "Role-Based Access Control (RBAC)",
        "Enforced 2FA/MFA Everywhere",
        "Seamless OKTA/Azure AD/Google"
      ]
    },
    {
      title: "Continuous Threat Monitoring",
      description: "Our infrastructure is monitored 24/7 by automated intrusion detection systems (IDS) that flag anomalies in milliseconds.",
      icon: <Eye className="w-6 h-6 text-white" />,
      image: "/security-monitoring.png", 
      bullets: [
        "Real-time anomaly detection",
        "Automated incident response",
        "24/7 Australian SOC team"
      ]
    },
    {
      title: "IRAP Aligned Architecture",
      description: "Our stack is architected to align with the Australian Government's ISM (Information Security Manual) requirements for maximum compliance.",
      icon: <Landmark className="w-6 h-6 text-white" />,
      image: "/security-irap.png",
      bullets: [
        "Annual grey-box pen testing",
        "SOC 2 Type II certified",
        "Australian data sovereignty"
      ]
    }
  ]

  const faqItems = [
    {
      question: "Where is my data stored?",
      answer: "All data resides in Sydney AWS region (ap-southeast-2) ensuring full Australian data sovereignty compliance."
    },
    {
      question: "What compliance certifications do you hold?",
      answer: "SOC 2 Type II, ISO 27001, and full alignment with Australian Privacy Principles (APP) under the Privacy Act 1988."
    },
    {
      question: "Can I bring my own encryption keys?",
      answer: "Yes, Enterprise plans include Customer-Managed Keys (CMK) with full key rotation and audit logging."
    },
    {
      question: "How do you handle penetration testing?",
      answer: "Independent security firms perform annual grey-box penetration tests covering application, API, and infrastructure layers."
    }
  ]

  const testimonials = [
    {
      text: "Their security posture impressed our CISO more than any other SaaS vendor we've evaluated.",
      author: "David Patel",
      role: "Chief Information Security Officer, FinTech Australia"
    },
    {
      text: "SOC 2 Type II certification was delivered on day one. No waiting for 'compliance roadmaps'.",
      author: "Rachel Nguyen", 
      role: "Compliance Director, EnergyCorp"
    },
    {
      text: "The Australian data residency gives our legal team zero concerns. Perfect for NGER reporting.",
      author: "James Whitaker",
      role: "General Counsel, ManufacturingCo"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: Modern Grid Layout */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-slate-100 to-emerald-100 skew-x-12"
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium hover:bg-emerald-100 hover:border-emerald-200 transition-all shadow-sm cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SOC 2 Type II Certified
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              Security is our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-400">
                Foundation.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              We protect your carbon ledger with bank-grade infrastructure, strict Australian data residency, and compliance certifications auditors trust.
            </motion.p>

            {/* Trust Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "SOC 2 Type II",
                "ISO 27001", 
                "AU Privacy Act 1988",
                "ISM Aligned"
              ].map((badge, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-700 font-semibold text-sm hover:border-emerald-300 hover:shadow-md transition-all cursor-default"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
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
              <img 
                src="/security-vault.png" 
                alt="Digital Security Vault" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            {/* Glow Effect */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-[80px] opacity-20"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (The Bridge) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Security You Can Actually Understand</h2>
            <p className="text-slate-500 mt-4 text-lg font-medium">No buzzwords. Just the controls that matter to compliance teams.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop Only) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-emerald-200 via-slate-200 to-cyan-200 -z-10 origin-left"
            />

            {/* Steps */}
            {[
              { step: 1, title: "Data Encrypted", desc: "AES-256 at rest, TLS 1.3 in transit" },
              { step: 2, title: "Access Controlled", desc: "RBAC + SSO with enforced MFA" },
              { step: 3, title: "Threats Detected", desc: "24/7 monitoring + auto response" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, borderColor: "#10b981" }}
                  className="w-24 h-24 bg-white rounded-full border-4 border-emerald-50 shadow-sm flex items-center justify-center mb-6 transition-all group-hover:shadow-lg group-hover:shadow-emerald-100/50"
                >
                  <span className="text-3xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">{item.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION - Zig-Zag with Professional Cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            {/* Text Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Icon Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-2xl shadow-xl w-fit hover:shadow-2xl hover:shadow-slate-900/30 transition-all"
              >
                {feature.icon}
              </motion.div>
              
              {/* Content */}
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="text-lg text-slate-600 leading-relaxed mb-8 font-medium"
                >
                  {feature.description}
                </motion.p>
                
                {/* Bullet Points */}
                <ul className="space-y-4 mb-8">
                  {feature.bullets.map((bullet, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform"
                    >
                      <div className="mt-1 min-w-[20px] flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span className="text-slate-700 font-medium text-base">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.button 
                  whileHover={{ x: 4 }}
                  className="group inline-flex items-center gap-2 text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  See technical details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center md:justify-end group"
            >
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-contain max-h-80 group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* 4. SOCIAL PROOF (TESTIMONIALS) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by security-conscious teams</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-emerald-100/30 transition-all"
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
                      <ShieldCheck className="w-4 h-4 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-slate-700 font-medium mb-6 text-base leading-relaxed">{`"${testimonial.text}"`}</p>
                <div>
                  <span className="block font-bold text-slate-900 text-sm hover:text-emerald-700 transition-colors cursor-default">{testimonial.author}</span>
                  <span className="text-xs text-slate-500">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12"
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

      {/* 6. FINAL CTA (The "Closer") */}
      <section className="px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-20 text-center overflow-hidden relative shadow-2xl shadow-slate-900/40 group"
        >
          {/* Background FX */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600 rounded-full blur-[100px]"></div>
          </motion.div>

          <div className="relative z-10 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Ready to secure your carbon ledger?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
            >
              Join Australian enterprises that trust our bank-grade security. Request your security assessment and compliance documentation today.
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
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)]"
              >
                Request Security Whitepaper
              </motion.button>
              <motion.button 
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Book Security Review
              </motion.button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xs text-slate-500 uppercase tracking-widest font-semibold"
            >
              SOC 2 Type II Certified • Australian Data Residency
            </motion.p>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
