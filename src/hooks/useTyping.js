import { useState, useEffect, useRef } from 'react'

export function useTyping(words, typingDelay = 100, erasingDelay = 50, pauseDelay = 2000) {
  const [text, setText] = useState('')
  const s = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    let timer

    function tick() {
      const { wordIdx, charIdx, deleting } = s.current
      const word = words[wordIdx]

      if (!deleting) {
        s.current.charIdx++
        setText(word.slice(0, s.current.charIdx))
        if (s.current.charIdx === word.length) {
          s.current.deleting = true
          timer = setTimeout(tick, pauseDelay)
        } else {
          timer = setTimeout(tick, typingDelay)
        }
      } else {
        s.current.charIdx--
        setText(word.slice(0, s.current.charIdx))
        if (s.current.charIdx === 0) {
          s.current.deleting = false
          s.current.wordIdx = (s.current.wordIdx + 1) % words.length
        }
        timer = setTimeout(tick, erasingDelay)
      }
    }

    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return text
}
