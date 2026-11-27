import { ChevronDown, Download, ArrowRight, Eye } from 'lucide-react'
import { useTyping } from '../hooks/useTyping'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const ROLES = [
  'Cloud & DevOps',
  'Administration réseau',
  'Sécurité des systèmes',
  'Étudiant en Master Cloud & IoT',
]

const STATS = [
  { target: 6, suffix: '', label: 'Projets' },
  { text: 'Juil. – Août 2027', label: 'Stage recherché' },
  { text: "Côte d'Ivoire", label: 'Lieu du stage' },
]

function StatCounter({ target = 0, suffix, text, label, inView }) {
  const count = useCounter(target, 1600, inView)
  return (
    <div>
      <p className="text-2xl font-bold text-primary tabular-nums whitespace-nowrap">
        {text ?? <>{count}{suffix}</>}
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm font-medium hover:bg-emerald-400/15 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Recherche un stage · Juillet – Août 2027 · Côte d&apos;Ivoire
            </a>
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
              Étudiant en Master Cloud &amp; IoT, je cherche un stage en cloud, DevOps ou
              administration réseau d&apos;entreprise. Je monte mes propres labs (DHCP, DNS,
              DNSSEC) et je déploie de vrais projets, comme l&apos;ERP SaaS Koris.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-navy-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:gap-3 shadow-lg shadow-primary/20"
              >
                Voir mes projets <ArrowRight size={18} />
              </a>
              <a
                href="/Karim_Diakité_MST_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Eye size={18} /> Visualiser le CV
              </a>
              <a
                href="/Karim_Diakité_MST_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-3 border border-slate-700/60 text-slate-400 font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Download size={18} />
              </a>
            </div>

            {/* Animated stats */}
            <div ref={statsRef} className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-6 border-t border-slate-800">
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
                <p className="text-xs text-slate-500">En formation</p>
                <p className="text-sm font-semibold text-primary">Master Cloud & IoT — FST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-1 animate-bounce">
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-slate-600" />
        </div>
      </div>
    </section>
  )
}
