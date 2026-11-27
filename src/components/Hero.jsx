import { ArrowRight, Eye, Download } from 'lucide-react'
import { WideMap, CompactMap, Contours, LegendKey } from './NetworkMap'

const CV = '/Karim_Diakité_MST_CV.pdf'

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-bg pt-16">
      <Contours className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(7,19,24,.9),transparent_60%)]" aria-hidden="true" />
      <WideMap />

      <div className="page relative py-10 sm:py-14 lg:py-20 lg:min-h-[700px] flex flex-col lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full lg:max-w-[470px] lg:shrink-0 rise rounded-2xl border border-line bg-card/85 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(45,212,191,.35)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-deep/60">
            <span className="w-3 h-3 rounded-full bg-danger/80" />
            <span className="w-3 h-3 rounded-full bg-amber/80" />
            <span className="w-3 h-3 rounded-full bg-accent/80" />
            <span className="ml-2 font-mono text-xs text-fg-mute">karim@dkt: ~</span>
          </div>

          <div className="p-6 sm:p-8">
            <p className="font-mono text-sm text-accent mb-5">
              <span className="text-fg-mute">$ </span>
              <span className="typed" style={{ '--n': 6 }}>whoami</span>
              <span className="caret" aria-hidden="true" />
            </p>

            <div className="flex items-center gap-4 mb-5">
              <img
                src="/me.png"
                alt="Portrait de Karim Diakité"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-accent/60 ring-offset-4 ring-offset-card shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-[34px] sm:text-[44px] leading-[1.05] font-extrabold text-fg">Karim Diakité</h1>
                <p className="mt-1 text-[15px] font-semibold text-amber">Master Cloud &amp; IoT · FST Fès</p>
              </div>
            </div>

            <p className="text-[19px] leading-snug font-extrabold text-fg mb-3">
              Cloud &amp; DevOps · Administration réseau · <span className="text-accent">Sécurité</span>
            </p>
            <p className="text-[16px] leading-relaxed text-fg-soft mb-6">
              Je monte mes propres labs réseau sous Linux et je déploie de vrais projets. Je cherche un stage pour
              apprendre au contact d’une vraie infrastructure d’entreprise.
            </p>

            <p className="flex items-center gap-2.5 text-sm font-semibold text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2 mb-6">
              <span className="relative flex w-2.5 h-2.5 shrink-0" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping motion-reduce:hidden" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-accent" />
              </span>
              Disponible en stage · juillet – août 2027 · Côte d’Ivoire
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#projets" className="btn-accent w-full sm:w-auto">
                Voir les projets <ArrowRight size={18} />
              </a>
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-line">
                <Eye size={18} /> CV
              </a>
              <a href={CV} download className="btn-line !px-3" aria-label="Télécharger le CV en PDF">
                <Download size={18} />
              </a>
            </div>

            <div className="pt-5 border-t border-line">
              <p className="font-mono text-xs text-fg-mute mb-2"># légende de la carte</p>
              <LegendKey />
            </div>
          </div>
        </div>
        <CompactMap />
      </div>
    </section>
  )
}
