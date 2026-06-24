import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-navy-900 rounded-full shadow-lg shadow-primary/30 hover:bg-cyan-400 transition-all hover:scale-110"
      aria-label="Retour en haut"
    >
      <ChevronUp size={20} />
    </button>
  )
}
