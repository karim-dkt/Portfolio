import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const INTERESTS = [
  { icon: '♟️', label: 'Échecs' },
  { icon: '✍️', label: 'Écriture' },
  { icon: '📚', label: 'Lecture' },
  { icon: '🌍', label: 'Cultures' },
  { icon: '🔐', label: 'Cybersécurité' },
  { icon: '💡', label: 'Innovation' },
]

const INFO_CHIPS = [
  { icon: '📍', text: 'Fès, Maroc' },
  { icon: '🎓', text: 'FST Fès — L3 GI' },
  { icon: '🇨🇮', text: 'Origine : Korhogo' },
  { icon: '📧', text: 'thekardiak@gmail.com' },
]

const LANGUAGES = [
  {
    flag: '🇫🇷',
    name: 'Français',
    detail: null,
    level: 'Natif',
    levelStyle: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    flag: '🇬🇧',
    name: 'Anglais',
    detail: 'Lecture fluide · Écoute contextuelle',
    level: 'B1/B2',
    levelStyle: 'bg-slate-700 text-slate-300 border-slate-600',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="apropos" className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="À Propos" subtitle="Qui suis-je et qu'est-ce qui me motive ?" />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Bio */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Je me nomme{' '}
              <span className="text-white font-medium">Diakité Karim</span>, né le 1er mars
              2006 à Korhogo, en Côte d&apos;Ivoire. Actuellement en Licence 3 de Génie
              Informatique à la{' '}
              <span className="text-primary font-medium">FST Fès</span>, je construis jour
              après jour mes compétences en informatique.
            </p>
            <p>
              Le{' '}
              <span className="text-white font-medium">développement logiciel</span> et la{' '}
              <span className="text-white font-medium">cybersécurité</span> m&apos;attirent
              particulièrement. Je les considère comme la suite logique de mon parcours —
              des domaines dans lesquels je souhaite me spécialiser et exceller.
            </p>
            <p>
              Rigoureux et curieux, je cherche à apprendre en profondeur, à expérimenter,
              et à me construire une solide base pour contribuer à des projets techniques
              ambitieux. Mon ambition est de devenir un professionnel compétent et polyvalent
              dans l&apos;informatique.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {INFO_CHIPS.map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-slate-700/60 rounded-full text-sm text-slate-300"
                >
                  {icon} {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: Languages + Interests */}
          <div className="space-y-8">
            {/* Languages */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Langues</h3>
              <div className="space-y-3">
                {LANGUAGES.map(({ flag, name, detail, level, levelStyle }) => (
                  <div
                    key={name}
                    className="flex items-start justify-between p-3 bg-card border border-slate-700/40 rounded-xl"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl">{flag}</span>
                      <div>
                        <p className="text-sm text-slate-300 font-medium">{name}</p>
                        {detail && (
                          <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 border rounded-full shrink-0 ml-3 ${levelStyle}`}
                    >
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-base font-semibold text-white mb-5">
                Centres d&apos;intérêt
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INTERESTS.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 p-5 bg-card border border-slate-700/40 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {icon}
                    </span>
                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
