'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.65, 0, 0.35, 1] as const

export function Intro() {
  const [show, setShow] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setReduced(true)
      setShow(false)
      return
    }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, 1600)
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
          transition={{ duration: 0.7, ease }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
          aria-hidden="true"
        >
          {/* pm + punto coral, fade-in suave + leve scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="relative"
          >
            <span
              className="font-display font-bold text-brand-cream tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}
            >
              pm
            </span>
            {/* Punto coral arriba a la derecha de la 'm' */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute rounded-full bg-brand-coral"
              style={{
                width: 8,
                height: 8,
                top: '-2px',
                right: '-10px',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
