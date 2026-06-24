import { ChevronDown, Download, ArrowRight } from 'lucide-react'
import { useTyping } from '../hooks/useTyping'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const ROLES = [
  'Étudiant en Génie Informatique',
  'Développeur Web',
  'Passionné de Cybersécurité',
  'Problem Solver',
]

const STATS = [
  { target: 5,  suffix: '',  label: 'Projets'     },
  { target: 3,  suffix: '',  label: 'Formations'   },
  { target: 20, suffix: '+', label: 'Technologies' },
]

function StatCounter({ target, suffix, label, inView }) {
  const count = useCounter(target, 1600, inView)
  return (
    <div>
      <p className="text-2xl font-bold text-primary tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">{label}</p>
    </div>
  )
}

export default function Hero() {
  const typed = useTyping(ROLES)
  const [statsRef, statsInView] = useInView(0.5)

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,212,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-mono text-xs tracking-[0.3em] mb-4 uppercase">
              Bonjour, je suis
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Karim{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Diakité
              </span>
            </h1>

            <div className="h-10 mb-6 flex items-center">
              <span className="text-xl text-slate-300 font-mono">
                {typed}
                <span className="animate-blink text-primary ml-0.5">|</span>
              </span>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Passionné par le développement logiciel et la cybersécurité. Je construis des
              projets concrets pour transformer mes apprentissages en compétences réelles.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-navy-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:gap-3 shadow-lg shadow-primary/20"
              >
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a
                href="/KARIM_DIAKITÉ.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Download size={18} /> Télécharger le CV
              </a>
            </div>

            {/* Animated stats */}
            <div ref={statsRef} className="flex gap-8 mt-10 pt-6 border-t border-slate-800">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} {...stat} inView={statsInView} />
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl scale-110" />
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-secondary/20 rounded-xl blur-md" />

              <img
                src="/me.png"
                alt="Karim Diakité"
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl border border-primary/20 shadow-2xl"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-card border border-slate-700/60 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-sm">
                <p className="text-xs text-slate-500">Actuellement</p>
                <p className="text-sm font-semibold text-primary">En stage 🎓 Soutenance bientôt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-slate-600" />
        </div>
      </div>
    </section>
  )
}
