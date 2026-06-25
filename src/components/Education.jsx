import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { education } from '../data'

function TimelineItem({ degree, school, period, badge, description, index, isLast }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`relative pl-8 pb-10 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      } ${!isLast ? 'border-l border-slate-700/60' : ''}`}
    >
      {/* Timeline dot */}
      <div className="absolute -left-2.5 top-0.5 w-5 h-5 rounded-full bg-primary shadow-md shadow-primary/40 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-navy-800" />
      </div>

      {/* Card */}
      <div className="ml-4 bg-card border border-slate-700/40 rounded-xl p-5 hover:border-primary/20 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white text-sm leading-snug">{degree}</h3>
            {badge && (
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            {period}
          </span>
        </div>
        <p className="text-sm text-slate-400 mb-2">{school}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="formation" className="py-24 bg-navy-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Formation" subtitle="Mon parcours académique" />
        <div className="mt-2">
          {education.map((item, i) => (
            <TimelineItem
              key={item.degree}
              {...item}
              index={i}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
