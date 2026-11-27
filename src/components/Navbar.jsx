import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#apropos', label: 'À propos' },
]

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors ${
        scrolled || open ? 'bg-paper/95 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="page h-16 flex items-center justify-between" aria-label="Navigation principale">
        <a href="#accueil" className="rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-route/30">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ href, label }) => {
            const active = activeSection === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative px-3 py-2 text-[15px] font-semibold rounded transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-route/30 ${
                    active ? 'text-route' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {label}
                  {active && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-route rounded" />}
                </a>
              </li>
            )
          })}
          <li className="ml-3">
            <a href="#contact" className="btn-route !min-h-[40px] !px-4 text-[15px]">
              Me contacter
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2.5 -mr-2 rounded text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-route/30"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden page pb-4 flex flex-col gap-1">
          {[...LINKS, { href: '#contact', label: 'Contact' }].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 rounded-lg font-semibold ${
                  activeSection === href.slice(1) ? 'bg-route-soft text-route' : 'text-ink hover:bg-land'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
