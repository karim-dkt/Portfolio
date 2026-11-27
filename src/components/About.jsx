import { MapPin, Target, GraduationCap, Home, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const INTERESTS = ['Échecs', 'Écriture', 'Lecture', 'Cultures', 'Cybersécurité', 'Innovation']

const INFO_CHIPS = [
  { Icon: MapPin, text: 'Fès, Maroc' },
  { Icon: Target, text: "Stage : juillet – août 2027, Côte d'Ivoire" },
  { Icon: GraduationCap, text: 'FST Fès — Master Cloud & IoT' },
  { Icon: Home, text: "Originaire de Korhogo, Côte d'Ivoire" },
  { Icon: Mail, text: 'thekardiak@gmail.com' },
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
              <span className="text-white font-medium">Karim Diakité</span>, originaire de
              Korhogo en Côte d&apos;Ivoire. Inscrit en Master{' '}
              <span className="text-primary font-medium">Cloud & Internet des Objets</span> à
              la FST Fès, je construis des projets concrets qui reflètent mes compétences
              autant que mes ambitions.
            </p>
            <p>
              L&apos;<span className="text-white font-medium">administration réseau</span>, le{' '}
              <span className="text-white font-medium">cloud</span> et le{' '}
              <span className="text-white font-medium">DevOps</span> sont au cœur de mon projet
              professionnel, avec la{' '}
              <span className="text-white font-medium">sécurité</span> comme fil rouge : je
              monte mes propres labs et je me forme à la cybersécurité avec Cisco.
            </p>
            <p>
              Rigoureux et curieux, je cherche un stage en juillet et août 2027 en Côte
              d&apos;Ivoire pour apprendre sur le terrain, au contact d&apos;une vraie
              infrastructure d&apos;entreprise.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {INFO_CHIPS.map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-slate-700/60 rounded-full text-sm text-slate-300"
                >
                  <Icon size={14} className="text-primary shrink-0" /> {text}
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
              <h3 className="text-base font-semibold text-white mb-3">
                Centres d&apos;intérêt
              </h3>
              <p className="text-sm text-slate-400">{INTERESTS.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
