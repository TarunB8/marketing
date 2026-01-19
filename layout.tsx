import type { ReactNode } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

// If you are using Google Fonts via Next.js, ensure you import them here, e.g.:
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function MarketingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    // Ensure font-sans is applied here so it cascades down
    <div className="min-h-screen flex flex-col bg-white antialiased text-slate-900 font-sans">
      
      {/* ===== HEADER (Now includes Utility Bar + Logo Bar + Green Menu Bar) ===== */}
      <Navbar />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />

    </div>
  )
}