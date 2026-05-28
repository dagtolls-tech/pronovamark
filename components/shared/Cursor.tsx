'use client'

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

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
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hovering ? 1.7 : 1})`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const isInteractive = t.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover]')
      setHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [hovering])

  if (!enabled) return null

  return (
    <>
      {/* Anillo */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] rounded-full transition-[width,height,background-color,border-color] duration-200"
        style={{
          width: 32,
          height: 32,
          border: hovering ? '1.5px solid rgba(232,102,90,0.9)' : '1.5px solid rgba(250,247,242,0.55)',
          backgroundColor: hovering ? 'rgba(232,102,90,0.08)' : 'transparent',
          mixBlendMode: hovering ? 'normal' : 'difference',
          willChange: 'transform',
        }}
      />
      {/* Punto central */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[91] rounded-full"
        style={{
          width: 5,
          height: 5,
          backgroundColor: hovering ? '#E8665A' : '#FAF7F2',
          mixBlendMode: hovering ? 'normal' : 'difference',
          willChange: 'transform',
        }}
      />
    </>
  )
}
