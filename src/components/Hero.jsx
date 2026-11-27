import { ArrowRight, Eye, Download } from 'lucide-react'
import { WideMap, CompactMap, Contours, LegendKey } from './NetworkMap'

const CV = '/Karim_Diakité_MST_CV.pdf'

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-sea pt-16">
      <Contours className="absolute inset-0 w-full h-full" />
      <WideMap />

      <div className="page relative py-10 sm:py-14 lg:py-20 lg:min-h-[680px] flex flex-col lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full lg:max-w-[460px] lg:shrink-0 bg-paper rounded-2xl border border-ink/10 shadow-[0_24px_60px_-32px_rgba(19,36,46,.55)] p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-route bg-route-soft rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-route" aria-hidden="true" />
            Recherche un stage · juillet – août 2027 · Côte d’Ivoire
          </p>

          <div className="flex items-center gap-4 mb-5">
            <img
              src="/me.png"
              alt="Portrait de Karim Diakité"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-ink/10 shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-[34px] sm:text-[44px] leading-[1.05] font-extrabold text-ink">Karim Diakité</h1>
              <p className="mt-1 text-[15px] font-semibold text-contour">Master Cloud &amp; IoT · FST Fès</p>
            </div>
          </div>

          <p className="text-[19px] leading-snug font-extrabold text-ink mb-3">
            Cloud &amp; DevOps · Administration réseau · Sécurité
          </p>
          <p className="text-[16px] leading-relaxed text-ink-soft mb-7">
            Je monte mes propres labs réseau sous Linux et je déploie de vrais projets. Je cherche un stage
            pour apprendre au contact d’une vraie infrastructure d’entreprise.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a href="#projets" className="btn-route w-full sm:w-auto">
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
            <p className="text-xs font-semibold text-ink-mute mb-2">Légende de la carte</p>
            <LegendKey />
          </div>
        </div>
        <CompactMap />
      </div>
    </section>
  )
}
