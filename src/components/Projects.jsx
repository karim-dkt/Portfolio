import { useCallback, useEffect, useRef, useState } from 'react'
import { ExternalLink, X, Lock, ArrowUpRight } from 'lucide-react'
import GithubIcon from './GithubIcon'
import SectionTitle from './SectionTitle'
import { projects } from '../data'

function Visual({ project, big = false }) {
  const h = big ? 'h-56 sm:h-72 lg:h-full lg:min-h-[340px]' : 'h-40'
  if (project.image)
    return (
      <div className={`${h} bg-surface flex items-center justify-center`}>
        <img
          src={project.image}
          alt={`Schéma du projet ${project.title}`}
          className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
        />
      </div>
    )
  return (
    <div className={`${h} bg-surface relative flex items-center justify-center overflow-hidden`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        {[30, 70, 110, 150, 190].map((y) => (
          <path key={y} d={`M-10 ${y} C 100 ${y - 14} 200 ${y + 14} 410 ${y - 6}`} fill="none" stroke="#2dd4bf" strokeOpacity=".14" />
        ))}
      </svg>
      {project.logo ? (
        <img src={project.logo} alt={`Logo ${project.title}`} className={`relative object-contain ${big ? 'h-44 w-auto sm:h-56' : 'h-20 w-20'}`} />
      ) : project.TileIcon ? (
        <span className="relative p-5 rounded-2xl bg-deep border border-line shadow-[0_0_40px_-10px_rgba(45,212,191,.5)]">
          <project.TileIcon size={big ? 56 : 40} strokeWidth={1.6} style={{ color: project.logoGlow || '#2dd4bf' }} />
        </span>
      ) : null}
      {big && project.demo && (
        <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 text-sm font-semibold text-fg bg-card/90 border border-line rounded-full px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" /> En production · {project.demo.replace(/^https?:\/\/(www\.)?/, '')}
        </span>
      )}
    </div>
  )
}

function Links({ project, onDetails }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-semibold">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:text-accent">
          <ExternalLink size={16} /> Voir le site
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
          <GithubIcon size={16} /> Code source
        </a>
      )}
      {project.privateCode && (
        <span className="inline-flex items-center gap-1.5 text-fg-mute">
          <Lock size={15} /> Code privé
        </span>
      )}
      {onDetails && (
        <button type="button" onClick={onDetails} className="inline-flex items-center gap-1 text-fg-soft hover:text-accent ml-auto rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30">
          Détails <ArrowUpRight size={16} />
        </button>
      )}
    </div>
  )
}

function Featured({ project, onOpen, flip }) {
  return (
    <article className="reveal glow-card grid lg:grid-cols-2 bg-card border border-line rounded-2xl overflow-hidden">
      <div className={flip ? 'lg:order-2' : ''}>
        <Visual project={project} big />
      </div>
      <div className="p-6 sm:p-8 flex flex-col">
        <p className="text-sm font-semibold text-amber mb-1.5">
          {project.type} · <span className="font-mono">{project.year}</span>
        </p>
        <h3 className="text-[28px] sm:text-[32px] leading-[1.1] font-extrabold text-fg mb-3">{project.title}</h3>
        <p className="text-[16px] leading-relaxed text-fg-soft mb-5">{project.description}</p>
        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-3 text-[15px] leading-snug text-fg">
              <span className="mt-[7px] w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="mt-auto pt-5 border-t border-line">
          <Links project={project} onDetails={onOpen} />
        </div>
      </div>
    </article>
  )
}

function Card({ project, index = 0, onOpen }) {
  return (
    <article style={{ transitionDelay: `${index * 90}ms` }} className="reveal glow-card group bg-card border border-line rounded-2xl overflow-hidden flex flex-col">
      <button type="button" onClick={onOpen} className="text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30" aria-label={`Détails du projet ${project.title}`}>
        <Visual project={project} />
      </button>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm font-semibold text-amber mb-1">
          {project.type} · <span className="font-mono">{project.year}</span>
        </p>
        <h3 className="text-[21px] font-extrabold text-fg mb-2">{project.title}</h3>
        <p className="text-[15px] leading-relaxed text-fg-soft mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-line">
          <Links project={project} onDetails={onOpen} />
        </div>
      </div>
    </article>
  )
}

function Modal({ project, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-deep/80 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-bg rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-card/90 border border-line text-fg hover:text-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
        {project.video ? (
          <div className="aspect-video w-full bg-deep">
            <iframe src={project.video} className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={`Vidéo du projet ${project.title}`} />
          </div>
        ) : (
          <Visual project={project} />
        )}
        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold text-amber mb-1">
            {project.type} · <span className="font-mono">{project.year}</span>
          </p>
          <h2 id="modal-title" className="text-[28px] leading-tight font-extrabold text-fg mb-3">{project.title}</h2>
          <p className="text-[16px] leading-relaxed text-fg-soft mb-6">{project.description}</p>
          {project.highlights && (
            <>
              <h3 className="text-[17px] font-extrabold text-fg mb-3">Points clés</h3>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-snug text-fg">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="pt-5 border-t border-line">
            <Links project={project} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projets" className="py-20 sm:py-28 bg-bg">
      <div className="page">
        <SectionTitle
          title="Projets"
          cmd="ls ~/projets"
          subtitle="Un lab réseau sécurisé, un ERP SaaS en production, et les projets qui m’ont appris le métier."
        />
        <div className="space-y-6 mb-6">
          {featured.map((p, i) => (
            <Featured key={p.id} project={p} flip={i % 2 === 1} onOpen={() => setSelected(p)} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {others.map((p, i) => (
            <Card key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
        <p className="mt-10">
          <a href="https://github.com/karim-dkt" target="_blank" rel="noopener noreferrer" className="btn-line">
            <GithubIcon size={18} /> Tous mes dépôts sur GitHub
          </a>
        </p>
      </div>
      {selected && <Modal project={selected} onClose={close} />}
    </section>
  )
}
