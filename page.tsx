import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Zap,
  Lock,
  FileCheck,
  Database,
  Layers,
  TrendingUp,
  LineChart,
  Activity,
  AlertCircle,
  Globe,
  Cpu,
  Cloud
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-8 uppercase tracking-widest shadow-sm hover:shadow-md hover:bg-emerald-100 transition-all cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            NGER 2026 Reporting Ready
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1] animate-fade-in-up">
            The Operating <br className="hidden sm:block"/>
            System for the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
              Net Zero Economy
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed animate-fade-in-up animation-delay-100">
            Stop estimating. Start accounting. AccuCarbon provides audit-grade environmental ledgers for Australian enterprises.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20 animate-fade-in-up animation-delay-200">
            <Link 
              href="/pricing" 
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Free Audit 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Capability Statement
            </Link>
          </div>

          {/* PRODUCT VISUAL */}
          <div className="relative mx-auto max-w-6xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             <img 
               src="/app-dashboard.png" 
               alt="AccuCarbon Dashboard Interface" 
               className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-[1.02]"
             />
             {/* Floating UI Badge */}
             <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">System Status</div>
                  <div className="text-sm font-bold text-slate-900">Audit Ready: 100%</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ==================== ECOSYSTEM STRIP ==================== */}
      <section className="border-y border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">Seamlessly integrated with your Financial Backbone</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-16">
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 group-hover:text-emerald-600 transition-colors">SAP</span>
             </div>
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 italic group-hover:text-emerald-600 transition-colors">Oracle</span>
             </div>
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 group-hover:text-emerald-600 transition-colors">Xero</span>
             </div>
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 group-hover:text-emerald-600 transition-colors">Salesforce</span>
             </div>
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 group-hover:text-emerald-600 transition-colors">MYOB</span>
             </div>
             <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black text-slate-700 group-hover:text-emerald-600 transition-colors">AWS</span>
             </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE PIPELINE ==================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Compliance Pipeline</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Automate the flow of data from your General Ledger to the Regulator</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent z-0"></div>

          {/* Step 1: Ingest */}
          <div className="relative z-10 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <Database className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">1. Ingest</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              API-first connection to your ERP. We pull General Ledger activity automatically, eliminating manual CSV handling.
            </p>
          </div>

          {/* Step 2: Process */}
          <div className="relative z-10 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group md:translate-y-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <Layers className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">2. Process</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              Our engine maps activity to the latest <strong>NGER 2026</strong> emission factors with 100% traceable audit trails.
            </p>
          </div>

          {/* Step 3: Disclose */}
          <div className="relative z-10 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <FileCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">3. Disclose</h3>
            <p className="text-slate-600 text-center leading-relaxed">
              Generate submission-ready filings for <strong>ASIC</strong> and the Clean Energy Regulator. Secure and sovereign.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID FEATURES ==================== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          
          {/* Card 1: Scope 1,2,3 Intelligence - Large Span */}
          <div className="md:col-span-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 border border-emerald-200 hover:border-emerald-300 transition-all group overflow-hidden relative shadow-sm hover:shadow-lg">
             <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl group-hover:blur-2xl transition-all -z-10"></div>
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                 <BarChart3 className="w-7 h-7" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">Scope 1, 2 & 3 Intelligence</h3>
               <p className="text-slate-700 text-lg leading-relaxed max-w-lg">
                 We categorize emissions across your entire value chain. From direct fuel usage to purchased electricity and downstream logistics—nothing escapes our audit.
               </p>
             </div>
          </div>

          {/* Card 2: Audit Defense - Tall Span */}
          <div className="md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all">
             <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors -z-10"></div>
             <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                 <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Audit Defense</h3>
                 <p className="text-slate-300 mb-10 leading-relaxed">Hand the regulator a read-only login, not a messy spreadsheet.</p>
               </div>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-sm text-slate-300">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> 
                   <span>Immutable Logs</span>
                 </li>
                 <li className="flex items-center gap-3 text-sm text-slate-300">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> 
                   <span>Source Doc Linking</span>
                 </li>
                 <li className="flex items-center gap-3 text-sm text-slate-300">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" /> 
                   <span>ISO 27001 Ready</span>
                 </li>
               </ul>
             </div>
          </div>

          {/* Card 3: Automated Reporting */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
               <FileText className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Reporting</h3>
             <p className="text-slate-600 leading-relaxed">Generate your FY26 Sustainability Report in seconds.</p>
          </div>

          {/* Card 4: Industry Benchmarking */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all group">
             <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
               <TrendingUp className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Benchmarking</h3>
             <p className="text-slate-600 leading-relaxed">Compare your intensity against the ASX 200 average.</p>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES CAROUSEL ==================== */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Enterprise Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Everything you need for regulatory compliance and strategic insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="group bg-gradient-to-br from-emerald-500/20 to-teal-500/5 rounded-2xl p-10 border border-emerald-500/30 hover:border-emerald-500/60 transition-all backdrop-blur-sm animate-card-up shadow-lg" style={{ animationDelay: '0s' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-emerald-500/50 group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">API-First Architecture</h3>
                <p className="text-slate-300 leading-relaxed">Direct integration with SAP, Oracle, Xero, Salesforce. Eliminate manual exports.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gradient-to-br from-teal-500/20 to-cyan-500/5 rounded-2xl p-10 border border-teal-500/30 hover:border-teal-500/60 transition-all backdrop-blur-sm animate-card-up shadow-lg" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/30 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-500/50 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">NGER 2026 Ready</h3>
                <p className="text-slate-300 leading-relaxed">Latest emission factors built-in. Always compliant with latest regulations.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gradient-to-br from-blue-500/20 to-slate-500/5 rounded-2xl p-10 border border-blue-500/30 hover:border-blue-500/60 transition-all backdrop-blur-sm animate-card-up shadow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-slate-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/50 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">Auto-Generated Reports</h3>
                <p className="text-slate-300 leading-relaxed">Sustainability reports in seconds. ASIC-ready submissions. Zero manual work.</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/5 rounded-2xl p-10 border border-purple-500/30 hover:border-purple-500/60 transition-all backdrop-blur-sm animate-card-up shadow-lg" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/50 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">Sovereign & Secure</h3>
                <p className="text-slate-300 leading-relaxed">AES-256 encryption. Sydney AWS Region. SOC 2 Type II certified.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOVEREIGN ARCHITECTURE ==================== */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden mt-12">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
               <div className="inline-flex items-center gap-3 text-emerald-400 font-mono text-sm bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30 w-fit">
                 <Lock className="w-4 h-4" />
                 <span>SECURITY_FIRST_ARCHITECTURE</span>
               </div>
               <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-8">Sovereign by Design</h2>
                 <p className="text-slate-300 text-lg leading-relaxed">
                   We understand that for Australian Critical Infrastructure, data sovereignty is not optional. AccuCarbon is architected to keep your data within Australian borders, encrypted at rest and in transit.
                 </p>
               </div>
               <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                     <div className="text-3xl font-bold text-white mb-2">AES-256</div>
                     <div className="text-xs text-slate-400 uppercase tracking-widest">Encryption</div>
                  </div>
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                     <div className="text-3xl font-bold text-white mb-2">Sydney</div>
                     <div className="text-xs text-slate-400 uppercase tracking-widest">AWS Region</div>
                  </div>
               </div>
            </div>
            <div className="relative h-96 md:h-full flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full"></div>
               <div className="relative w-80 h-80 rounded-full border-2 border-slate-700 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ShieldCheck className="w-40 h-40 text-emerald-500 drop-shadow-lg" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-emerald-500/50 px-6 py-3 rounded-full text-sm font-mono text-emerald-400 shadow-2xl whitespace-nowrap">
                     SOC 2 TYPE II READY
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ==================== HYBRID DNA ==================== */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Competitive Advantage</div>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Engineered by <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Scientists & Auditors</span>
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Most ESG tools are built by generic software developers. AccuCarbon is built by a hybrid team of Ex-KPMG auditors and CSIRO climate scientists. We understand the nuance of Scope 3 that others miss.
               </p>
               <Link href="/about" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-600 transition-colors group border-b-2 border-emerald-500 pb-1">
                 Read our story 
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-100 border border-slate-200 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center relative z-10">
                   <div className="text-6xl md:text-7xl font-black text-emerald-600 mb-3">100%</div>
                   <div className="text-sm text-slate-600 uppercase tracking-widest font-bold">Defensible Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to secure your ledger?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
               Join the Australian enterprises moving from "Estimates" to "Audit-Grade Accuracy."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link 
                 href="/pricing"
                 className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
               >
                 Start Free Audit
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link 
                 href="/contact"
                 className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 border-2 border-slate-600 text-white font-bold rounded-xl transition-all w-full sm:w-auto"
               >
                 Contact Sales
               </Link>
            </div>
         </div>
      </section>
      {/* ==================== CUSTOM ANIMATIONS ==================== */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.2s;
        }

        .animation-delay-200 {
          animation-delay: 0.4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}