import { useEffect } from 'react'

// Marks [data-reveal] elements with .is-in the first time they scroll into view.
export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    root.classList.add('reveal-ready')
    return () => io.disconnect()
  }, [])
}
