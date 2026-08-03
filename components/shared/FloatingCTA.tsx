'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const casos = document.getElementById('casos')
    if (!casos) return

    const onScroll = () => {
      setVisible(casos.getBoundingClientRect().top <= window.innerHeight)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 sm:bottom-7">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9, transition: { duration: 0.25 } }}
            transition={{ type: 'spring', stiffness: 380, damping: 22, mass: 0.8 }}
          >
            <a
              href="#contacto"
              data-cursor-hover
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-editorial font-bold text-white text-sm sm:text-base uppercase tracking-[0.06em] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_44px_rgba(230,35,35,0.55)]"
              style={{
                background: 'linear-gradient(135deg, #F13030 0%, #C41818 100%)',
                boxShadow:
                  '0 8px 32px rgba(230,35,35,0.45), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              AGENDAR LLAMADA
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
