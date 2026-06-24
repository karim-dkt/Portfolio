import { useState } from 'react'
import { ExternalLink, X, Play } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { projects } from '../data'

const BADGE_STYLES = {
  Web:  'bg-blue-500/10 text-blue-400 border-blue-500/20',
  BDD:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  PWA:  'bg-violet-500/10 text-violet-400 border-violet-500/20',
  SaaS: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Java: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

function ProjectCard({ project, onClick, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group bg-card border border-slate-700/40 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 cursor-pointer ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={onClick}
    >
      {/* Image ou Logo */}
      <div className="relative h-48 overflow-hidden">
        {project.logo ? (
          <div className="w-full h-full flex items-center justify-center bg-navy-800 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(circle at center, ${project.logoGlow || '#00d4ff'} 0%, transparent 70%)` }}
            />
            <img
              src={project.logo}
              alt={`Logo ${project.title}`}
              className="h-28 w-28 object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
        <span
          className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${
            BADGE_STYLES[project.badge] || BADGE_STYLES.Web
          }`}
        >
          {project.badge}
        </span>
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-3 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
              <Play size={20} className="text-primary" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors mb-1">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-xs text-slate-500">{project.type}</p>
          {project.year && (
            <>
              <span className="text-slate-700">·</span>
              <span className="text-xs font-mono text-slate-500">{project.year}</span>
            </>
          )}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700/60"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 text-slate-500 self-center">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon size={15} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary transition-colors"
            >
              <ExternalLink size={15} /> Démo
            </a>
          )}
          <span className="ml-auto text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Détails →
          </span>
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-800 border border-slate-700/60 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-700/80 hover:bg-slate-600 text-slate-300 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Media */}
        {project.video ? (
          <div className="aspect-video w-full">
            <iframe
              src={project.video}
              className="w-full h-full rounded-t-2xl"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          </div>
        ) : project.logo ? (
          <div className="h-52 flex items-center justify-center rounded-t-2xl bg-navy-900 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-25"
              style={{ background: `radial-gradient(circle at center, ${project.logoGlow || '#00d4ff'} 0%, transparent 65%)` }}
            />
            <img
              src={project.logo}
              alt={`Logo ${project.title}`}
              className="h-36 w-36 object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover rounded-t-2xl"
          />
        )}

        {/* Body */}
        <div className="p-6 space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                  BADGE_STYLES[project.badge] || BADGE_STYLES.Web
                }`}
              >
                {project.badge}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              {project.type}{project.year && <span className="font-mono ml-2">{project.year}</span>}
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>

          {project.highlights && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Points clés</h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors"
              >
                <GithubIcon size={16} /> Code source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-navy-900 font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors"
              >
                <ExternalLink size={16} /> Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projets" className="py-24 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Mes Projets"
          subtitle="Projets académiques et personnels — cliquez pour les détails"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/karim-dkt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 rounded-lg text-sm transition-colors"
          >
            <GithubIcon size={18} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
