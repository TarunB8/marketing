import { Calendar, Clock } from 'lucide-react'
export const metadata = { title: 'Book Demo | AccuCarbon' }

export default function BookDemoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4"><div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Calendar size={20} /></div><div><h3 className="font-bold text-slate-900">Discovery Call</h3><p className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> 30 Min • Google Meet</p></div></div>
        <div className="space-y-6">
           <div><div className="text-sm font-bold text-slate-700 mb-2">Available Times</div><div className="grid grid-cols-3 gap-2"><button className="py-2 border rounded hover:border-[#10B981]">9:00 AM</button><button className="py-2 border rounded bg-slate-900 text-white">2:00 PM</button><button className="py-2 border rounded hover:border-[#10B981]">3:30 PM</button></div></div>
           <button className="w-full bg-[#10B981] text-white font-bold py-3 rounded-md">Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}
