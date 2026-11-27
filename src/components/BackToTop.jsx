import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <a
      href="#accueil"
      aria-label="Revenir en haut de la page"
      className="fixed bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg hover:bg-route focus:outline-none focus-visible:ring-4 focus-visible:ring-route/30"
    >
      <ArrowUp size={20} />
    </a>
  )
}
