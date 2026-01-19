import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import ContactForm from './contact-form'

export const metadata = { title: 'Contact | AccuCarbon' }

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 bg-white">
          {/* LEFT SIDE */}
          <div className="bg-linear-to-br from-slate-900 to-slate-800 p-12 text-white rounded-2xl flex flex-col justify-center space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-8">Get in touch</h1>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Headquarters</h4>
                    <p className="text-slate-300 text-base">
                      AccuCarbon Pty Ltd
                      <br />
                      Sydney, NSW, Australia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Email</h4>
                    <a
                      href="mailto:support@accucarbon.com.au"
                      className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-base"
                    >
                      support@accucarbon.com.au
                    </a>
                    <p className="text-slate-400 text-sm mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Phone</h4>
                    <a
                      href="tel:+61298765432"
                      className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-base"
                    >
                      +61 2 9876 5432
                    </a>
                    <p className="text-slate-400 text-sm mt-1">
                      Mon-Fri, 9am-5pm AEDT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Send a message
              </h2>
              <p className="text-slate-600 text-lg">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
