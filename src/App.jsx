import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Parcours from './components/Parcours'
import About from './components/About'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import { useRevealAll } from './components/Reveal'

const SECTIONS = ['accueil', 'projets', 'competences', 'parcours', 'apropos', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil')
  useRevealAll()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-fg font-sans">
      <a href="#projets" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 btn-accent">
        Aller aux projets
      </a>
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Parcours />
        <About />
      </main>
      <Contact />
      <BackToTop />
    </div>
  )
}
