import { BadgeCheck, Clock } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { certifications } from '../data'

const STATUS_STYLES = {
  Obtenue: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'En préparation': 'text-amber-300 bg-amber-400/10 border-amber-400/20',
  Prévue: 'text-slate-400 bg-slate-700/40 border-slate-600/60',
}

function CertCard({ name, org, status, period, description, index }) {
  const [ref, inView] = useInView()
  const done = status === 'Obtenue'
  const Icon = done ? BadgeCheck : Clock

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`flex gap-4 bg-card border rounded-2xl p-5 transition-all duration-700 ${
        status === 'Prévue' ? 'border-dashed border-slate-700/60' : 'border-slate-700/40 hover:border-primary/20'
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`p-3 rounded-xl h-fit flex-shrink-0 ${done ? 'bg-emerald-400/10' : 'bg-primary/10'}`}>
        <Icon size={24} className={done ? 'text-emerald-400' : 'text-primary'} />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-semibold text-white leading-snug">{name}</h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[status] || STATUS_STYLES.Prévue}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-slate-400 mb-2">
          {org} <span className="font-mono text-slate-500">· {period}</span>
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Certifications" subtitle="Ce que je prépare en parallèle du Master" />
        <div className="grid gap-4 mt-2">
          {certifications.map((c, i) => (
            <CertCard key={c.name} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
