import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { skills } from '../data'

function SkillCard({ category, icon, items, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`bg-card border border-slate-700/40 rounded-2xl p-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/40">
        <span className="text-lg">{icon}</span>
        <h3 className="font-semibold text-white text-sm">{category}</h3>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {items.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-slate-800/60 transition-colors cursor-default group"
          >
            <Icon
              size={24}
              style={{ color }}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-[10px] text-slate-400 text-center leading-tight group-hover:text-slate-300 transition-colors">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="competences" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Compétences"
          subtitle="Technologies et outils acquis au cours de mes études et projets"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
