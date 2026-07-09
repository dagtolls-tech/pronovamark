'use client'

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Solo en desktop con puntero fino
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const loop = () => {
      // Punto: sigue casi instantáneo
      dotX += (mouseX - dotX) * 0.55
      dotY += (mouseY - dotY) * 0.55
      // Anillo: sigue con retraso suave
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Anillo — color y forma constantes */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] rounded-full"
        style={{
          width: 32,
          height: 32,
          border: '1.5px solid rgba(250,247,242,0.55)',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Punto central — color y forma constantes */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[91] rounded-full"
        style={{
          width: 5,
          height: 5,
          backgroundColor: '#FAF7F2',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
    </>
  )
}
