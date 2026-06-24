import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import DKTLogo from './DKTLogo'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60)
      if (window.scrollY > 60) setOpen(false)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#accueil" className="flex items-center">
          <DKTLogo className="text-xl" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ href, label }) => {
            const id = href.slice(1)
            const active = activeSection === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-navy-800 border-t border-slate-700/40`}
      >
        <ul className="px-4 py-3 space-y-1">
          {LINKS.map(({ href, label }) => {
            const id = href.slice(1)
            const active = activeSection === id
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-md transition-colors font-medium text-sm ${
                    active
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-300 hover:text-white hover:bg-navy-700'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
