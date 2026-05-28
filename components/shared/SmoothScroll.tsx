'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    // Respeta usuarios que prefieren menos movimiento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,                       // viaje suave (1.0–1.3 = ideal Lathos-like)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out exponencial
      smoothWheel: true,
      wheelMultiplier: 0.95,                // ligeramente más lento que el wheel nativo
      touchMultiplier: 1.6,                 // móvil normal-rápido
      lerp: 0.085,                          // interpolación suave
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercepta los anchor #links para que vayan suaves con Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -80, duration: 1.4 })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return null
}
