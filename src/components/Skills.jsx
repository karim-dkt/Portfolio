import SectionTitle from './SectionTitle'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="competences" className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="page">
        <SectionTitle
          title="Compétences"
          cmd="cat competences.md"
          subtitle="Lues comme la légende d’une carte : chaque catégorie indique où je l’ai mise en pratique."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {skills.map(({ category, swatch, proof, items }, i) => (
            <div key={category} className="reveal" style={{ transitionDelay: `${i * 110}ms` }}>
              <div className="flex items-center gap-3 pb-3 mb-4 border-b-2" style={{ borderColor: swatch }}>
                <span className="w-4 h-4 rounded-sm shrink-0" style={{ background: swatch, boxShadow: `0 0 14px ${swatch}` }} aria-hidden="true" />
                <h3 className="text-[20px] font-extrabold text-fg">{category}</h3>
              </div>
              <ul className="space-y-2.5 mb-5">
                {items.map(({ name, Icon, color }) => (
                  <li key={name} className="flex items-center gap-3 text-[16px] text-fg hover:text-accent hover:translate-x-1 transition-all">
                    <Icon size={20} style={{ color }} className="shrink-0" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-fg-mute">
                <span className="font-semibold text-amber">Mis en pratique :</span> {proof}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
