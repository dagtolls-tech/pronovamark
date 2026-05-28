'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.65, 0, 0.35, 1] as const

export function Intro() {
  const [show, setShow] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    // Si el usuario prefiere menos movimiento, salta intro
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setReduced(true)
      setShow(false)
      return
    }
    // Bloquea scroll mientras se muestra
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, 1400)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  if (reduced) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
          aria-hidden="true"
        >
          {/* Círculo coral que se expande */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 0.6, 0.15] }}
            transition={{ duration: 1.2, ease, times: [0, 0.6, 1] }}
            className="absolute w-[180px] h-[180px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(232,102,90,0.6) 0%, transparent 70%)' }}
          />

          {/* Logo pm */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10"
          >
            <div
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-brand-black border border-white/15"
              style={{ boxShadow: '0 12px 60px rgba(232,102,90,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <span className="font-display font-bold text-brand-cream text-3xl tracking-tight">pm</span>
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-brand-coral" />
            </div>
          </motion.div>

          {/* Wordmark debajo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="absolute mt-[150px]"
          >
            <span className="font-display font-bold text-brand-cream text-sm tracking-[0.4em] uppercase">
              Pronovamark
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
