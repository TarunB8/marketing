'use client'

import Link from 'next/link'
import { Check, Shield, Zap, Award, X, LucideIcon, ArrowRight, Crown, Sparkles, Building2, Coffee, Plane } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. LAUNCH OFFER BANNER */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-900 text-white text-center text-sm font-medium py-3 px-6 sticky top-0 z-50 shadow-md border-b border-slate-800"
      >
        <span className="inline-flex items-center gap-2 justify-center">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>
            <span className="text-emerald-400 font-bold">Launch Offer:</span> Get 50% OFF first 3 months. Code: 
            <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white ml-2 border border-white/20">LAUNCH50</span>
          </span>
        </span>
      </motion.div>

      {/* 2. HERO HEADER */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Pricing designed for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Australian Business.
            </span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            From students to enterprise compliance. <br/>
            All prices in <strong>AUD</strong> (ex. GST). No hidden fees.
          </p>

          {/* === FIXED: BLACK TEXT VISIBLE === */}
          <div className="flex justify-center pt-10">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-2xl inline-flex gap-2 relative">
              
              {/* Monthly Button */}
              <motion.button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 px-12 py-4 rounded-xl text-lg font-bold transition-all duration-500 w-48 flex-1 ${
                  !isAnnual 
                    ? 'bg-white text-slate-900 shadow-xl scale-105 border-2 border-white' 
                    : 'text-slate-400 hover:text-slate-300'
                }`}
                whileHover={{ scale: !isAnnual ? 1.05 : 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                Monthly
              </motion.button>

              {/* Annual Button */}
              <motion.button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 px-12 py-4 rounded-xl text-lg font-bold transition-all duration-500 w-48 flex-1 flex items-center justify-center gap-2 ${
                  isAnnual 
                    ? 'bg-white text-slate-900 shadow-xl scale-105 border-2 border-white' 
                    : 'text-slate-400 hover:text-slate-300'
                }`}
                whileHover={{ scale: isAnnual ? 1.05 : 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Annual</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-black transition-all shadow-md ${
                  isAnnual 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  SAVE 20%
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING CARDS */}
      <section className="pb-24 px-4 overflow-x-auto">
        <div className="max-w-[1600px] mx-auto min-w-[1100px] xl:min-w-0">
          <div className="grid grid-cols-5 gap-6 items-stretch px-2 pb-12 pt-4">
            
            {/* 1. GUEST */}
            <TierCard
              index={0}
              name="Guest"
              persona="Student / Skeptic"
              price={0}
              annualPrice={0}
              isAnnual={isAnnual}
              desc="Try before you buy."
              btnText="Try for Free"
              btnStyle="outline"
            >
              <Feature text="Max 3 Bills Input" />
              <Feature text="Manual Typing Only" />
              <Feature text="Screen-Only Output" />
              <Feature text="Badge Grayed Out" disabled />
              <Feature text="No Support" disabled />
            </TierCard>

            {/* 2. MICRO */}
            <TierCard
              index={1}
              name="Micro"
              persona="Tradie / Cafe"
              price={19}
              annualPrice={15}
              isAnnual={isAnnual}
              desc="Basic compliance."
              btnText="Start Micro"
              btnStyle="solid-slate"
            >
              <Feature text="Unlimited Input" highlighted />
              <Feature text="Manual Typing" />
              <Feature text="Screen-Only Output" />
              <Feature text='Basic "Tracking" Badge' icon={Shield} />
              <Feature text="Email Support" />
            </TierCard>

            {/* 3. PRO TENDER (HERO) */}
            <TierCard
              index={2}
              name="Pro Tender"
              persona="Agency / SME"
              price={99}
              annualPrice={79}
              isAnnual={isAnnual}
              desc="For winning tenders."
              btnText="Get Audit Ready"
              btnStyle="solid-emerald"
              isHero
            >
              <Feature text="Unlimited AI + Xero Sync" highlighted icon={Zap} />
              <Feature text="AUDIT PDF Report" highlighted />
              <Feature text='Live "Verified" Page' highlighted />
              <Feature text="Scope 3 Flights Included" icon={Plane} />
              <Feature text="Priority Chat Support" />
            </TierCard>

            {/* 4. PARTNER */}
            <TierCard
              index={3}
              name="Partner"
              persona="Fractional CFO"
              price={299}
              annualPrice={239}
              isAnnual={isAnnual}
              desc="Resell to clients."
              btnText="Become Partner"
              btnStyle="solid-slate"
            >
              <Feature text="All Pro Features" />
              <Feature text="White Label PDF" highlighted icon={Award} />
              <Feature text="Multi-Client Portal" highlighted />
              <Feature text="Scope 3 Flights Included" icon={Plane} />
              <Feature text="Dedicated Acct Manager" />
            </TierCard>

            {/* 5. ENTERPRISE */}
            <TierCard
              index={4}
              name="Enterprise"
              persona="Corp (> $200M)"
              price="Custom"
              annualPrice="Custom"
              isAnnual={isAnnual}
              desc="Full supply chain."
              btnText="Contact Sales"
              btnStyle="outline-gold"
            >
              <Feature text="Managed Service Input" highlighted />
              <Feature text="Custom Reporting" />
              <Feature text="Custom Verification Portal" />
              <Feature text="Full Supply Chain Scope 3" icon={Crown} />
              <Feature text="Dedicated CSM" />
            </TierCard>

          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Detailed Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-5 pl-8 text-slate-500 font-semibold w-1/4">Feature</th>
                  <th className="py-5 px-6 text-center text-slate-900 font-bold w-1/4">Micro</th>
                  <th className="py-5 px-6 text-center text-emerald-700 font-bold bg-emerald-50 w-1/4 border-x border-emerald-100">Pro Tender</th>
                  <th className="py-5 px-6 text-center text-slate-900 font-bold w-1/4">Partner</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-5 pl-8 text-slate-700 font-medium">Launch Offer</td>
                  <td className="py-5 text-center text-emerald-600 font-bold">50% Off (3 Mo)</td>
                  <td className="py-5 text-center text-emerald-700 font-bold bg-emerald-50/30 border-x border-emerald-100/50">50% Off (3 Mo)</td>
                  <td className="py-5 text-center text-emerald-600 font-bold">50% Off (3 Mo)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-5 pl-8 text-slate-700 font-medium">Input Method</td>
                  <td className="py-5 text-center text-slate-500">Manual Typing</td>
                  <td className="py-5 text-center text-slate-900 font-bold bg-emerald-50/30 border-x border-emerald-100/50">AI + Xero Sync</td>
                  <td className="py-5 text-center text-slate-900 font-bold">AI + Xero Sync</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-5 pl-8 text-slate-700 font-medium">Scope 3 Emissions</td>
                  <td className="py-5 text-center text-slate-300"><X className="w-5 h-5 mx-auto" /></td>
                  <td className="py-5 text-center text-slate-900 font-bold bg-emerald-50/30 border-x border-emerald-100/50">Flights Included</td>
                  <td className="py-5 text-center text-slate-900 font-bold">Flights Included</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-5 pl-8 text-slate-700 font-medium">Audit-Ready PDF</td>
                  <td className="py-5 text-center text-slate-300"><span className="text-xs text-slate-400">Screen Only</span></td>
                  <td className="py-5 text-center text-emerald-600 bg-emerald-50/30 border-x border-emerald-100/50"><Check className="w-6 h-6 mx-auto" /></td>
                  <td className="py-5 text-center text-emerald-600"><Check className="w-6 h-6 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-5 pl-8 text-slate-700 font-medium">Support Level</td>
                  <td className="py-5 text-center text-slate-500">Email</td>
                  <td className="py-5 text-center text-slate-900 font-bold bg-emerald-50/30 border-x border-emerald-100/50">Priority Chat</td>
                  <td className="py-5 text-center text-slate-900 font-bold">Account Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FAQ & TRUST BADGE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="/pricing-guarantee.png" 
                alt="14-Day Money Back Guarantee" 
                className="w-72 md:w-96 h-auto relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-8 text-slate-500 text-sm font-medium">
              Try Pro Tender risk-free. Cancel anytime in the first 14 days for a full refund.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Coffee size={18} className="text-emerald-500" />
                What happens in Guest Mode?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guest mode allows you to input up to 3 bills to test the carbon calculator. Data is not saved permanently unless you upgrade to a paid plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Building2 size={18} className="text-emerald-500" />
                Are prices in AUD?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes. We are an Australian company. All prices are in Australian Dollars (AUD) and exclude GST. No hidden foreign transaction fees.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ================= COMPONENTS ================= */

type TierCardProps = {
  index: number
  name: string
  persona: string
  price: number | string
  annualPrice: number | string
  isAnnual: boolean
  desc: string
  btnText: string
  btnStyle: 'outline' | 'solid-slate' | 'solid-emerald' | 'outline-gold'
  isHero?: boolean
  children: React.ReactNode
}

function TierCard({ index, name, persona, price, annualPrice, isAnnual, desc, btnText, btnStyle, isHero, children }: TierCardProps) {
  const displayPrice = price === 'Custom' ? 'Custom' : (isAnnual ? annualPrice : price)
  const isCustom = price === 'Custom'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 60 }}
      className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 h-full border hover:-translate-y-2 group ${
        isHero 
          ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/10 z-10 scale-[1.02] md:-translate-y-4 hover:shadow-emerald-500/25' 
          : 'bg-white border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300'
      }`}
    >
      <div className="text-center mt-2 mb-6 space-y-1">
        <h3 className="text-2xl font-black text-slate-900">{name}</h3>
        <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">{persona}</p>
        <p className="text-sm text-slate-500 font-medium">{desc}</p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1 text-slate-900">
          {!isCustom && <span className="text-lg font-medium text-slate-400">$</span>}
          <span className="text-5xl font-extrabold tracking-tight">{displayPrice}</span>
          {!isCustom && <span className="text-sm font-medium text-slate-400">/mo</span>}
        </div>
        {isAnnual && !isCustom && (
          <div className="text-xs text-emerald-600 font-bold mt-2 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
            Billed Annually • SAVE 20%
          </div>
        )}
      </div>

      <div className="mb-8">
        <Link href={isCustom ? '/contact' : `/signup?plan=${name.toLowerCase()}`} className={`block w-full py-4 px-4 rounded-xl text-sm font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 ${
          btnStyle === 'outline' ? 'border-2 border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700 bg-white' :
          btnStyle === 'solid-slate' ? 'bg-slate-100 text-slate-900 hover:bg-emerald-500 hover:text-white' :
          btnStyle === 'solid-emerald' ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-200 hover:shadow-emerald-500/40' :
          'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 hover:shadow-amber-500/20'
        }`}>
          {btnText}
        </Link>
      </div>

      <div className="space-y-4 text-sm flex-1 text-slate-600">
        {children}
      </div>
    </motion.div>
  )
}

function Feature({ text, highlighted, disabled, icon: IconOverride }: { text: string, highlighted?: boolean, disabled?: boolean, icon?: any }) {
  const Icon = IconOverride || Check
  
  return (
    <div className={`flex items-start gap-3 ${disabled ? 'opacity-40' : ''}`}>
      <div className={`mt-0.5 shrink-0 ${highlighted ? 'text-emerald-500' : disabled ? 'text-slate-300' : 'text-slate-400'}`}>
        {disabled ? <X size={16} /> : <Icon size={16} strokeWidth={2.5} />}
      </div>
      <span className={`leading-tight ${highlighted ? 'font-bold text-slate-900' : disabled ? 'line-through decoration-slate-300' : 'text-slate-600'}`}>
        {text}
      </span>
    </div>
  )
}
