import { useState, useEffect } from 'react'

export function useCounter(target, duration = 1600, inView = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return count
}
