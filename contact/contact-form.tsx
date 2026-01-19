'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setFormData({ email: '', message: '' })
      setLoading(false)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <>
      {submitted ? (
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900">Message sent!</h3>
          <p className="text-emerald-700 font-medium">
            Thanks for reaching out. We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-5 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-medium text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us what you need..."
              rows={6}
              className="w-full px-5 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-medium text-base resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-75 flex items-center justify-center gap-2 text-base"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </form>
      )}
    </>
  )
}
