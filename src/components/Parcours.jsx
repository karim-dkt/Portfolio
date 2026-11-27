import { BadgeCheck, Clock, CalendarClock } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { education, certifications } from '../data'

const STATUS = {
  Obtenue: { cls: 'bg-ink text-paper', Icon: BadgeCheck },
  'En préparation': { cls: 'bg-route-soft text-route-dark', Icon: Clock },
  Prévue: { cls: 'bg-land text-ink-soft border border-line', Icon: CalendarClock },
}

export default function Parcours() {
  return (
    <section id="parcours" className="py-20 sm:py-28 bg-paper">
      <div className="page">
        <SectionTitle title="Parcours" subtitle="Ma formation, et les certifications que je prépare à côté." />
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-16">
          <div id="formation">
            <h3 className="text-[22px] font-extrabold text-ink mb-6">Formation</h3>
            <ol className="relative">
              {education.map((e, i) => {
                const current = i === 0
                return (
                  <li key={e.degree} className="relative pl-10 pb-9 last:pb-0">
                    {i < education.length - 1 && (
                      <span className={`absolute left-[11px] top-6 bottom-0 w-[3px] rounded ${current ? 'bg-route' : 'bg-ink/15'}`} aria-hidden="true" />
                    )}
                    <span
                      className={`absolute left-0 top-1 w-[25px] h-[25px] rounded-full border-[3px] ${
                        current ? 'bg-route border-paper ring-4 ring-route/20' : 'bg-paper border-ink'
                      }`}
                      aria-hidden="true"
                    />
                    <p className="font-mono text-sm text-contour mb-1">{e.period}</p>
                    <h4 className="text-[18px] font-extrabold text-ink leading-snug">
                      {e.degree}
                      {e.badge && (
                        <span className={`ml-2 align-middle text-xs font-semibold px-2 py-0.5 rounded-full ${current ? 'bg-route-soft text-route-dark' : 'bg-land text-ink-soft'}`}>
                          {e.badge}
                        </span>
                      )}
                    </h4>
                    <p className="text-[15px] font-semibold text-ink-soft mt-0.5">{e.school}</p>
                    <p className="text-[15px] leading-relaxed text-ink-mute mt-2 max-w-[62ch]">{e.description}</p>
                  </li>
                )
              })}
            </ol>
          </div>

          <div id="certifications">
            <h3 className="text-[22px] font-extrabold text-ink mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((c) => {
                const st = STATUS[c.status] || STATUS.Prévue
                return (
                  <article
                    key={c.name}
                    className={`rounded-2xl p-5 sm:p-6 bg-white border ${c.status === 'Prévue' ? 'border-dashed border-ink/25' : 'border-line'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${st.cls}`}>
                        <st.Icon size={14} /> {c.status}
                      </span>
                      <span className="font-mono text-sm text-contour">{c.period}</span>
                    </div>
                    <h4 className="text-[19px] font-extrabold text-ink">{c.name}</h4>
                    <p className="text-[15px] font-semibold text-ink-soft mb-2">{c.org}</p>
                    <p className="text-[15px] leading-relaxed text-ink-mute">{c.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
