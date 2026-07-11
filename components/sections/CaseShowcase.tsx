'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Maximize2, X } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

type Shot = {
  key: string
  cropSrc: string
  fullSrc: string
  alt: string
  label: string
  sublabel: string
  variant: 'antes' | 'despues'
}

const SHOTS: Shot[] = [
  {
    key: 'antes',
    cropSrc: '/casos/cati/antes-instagram.jpg',
    fullSrc: '/casos/cati/antes-full.jpg',
    alt: 'Instagram de Óptica Ibiza con 172 seguidores antes de Pronovamark',
    label: 'Antes',
    sublabel: '172 seguidores · sin tracción',
    variant: 'antes',
  },
  {
    key: 'despues',
    cropSrc: '/casos/cati/despues-instagram.jpg',
    fullSrc: '/casos/cati/despues-full.jpg',
    alt: 'Instagram de Cati Villaoslada con +2.300 seguidores y vídeos virales',
    label: 'Después',
    sublabel: '+2.300 y +416K visitas 🚀',
    variant: 'despues',
  },
]

export function CaseShowcase() {
  const [open, setOpen] = useState<Shot | null>(null)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:gap-4 sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:scrollbar-hide">

        {/* Vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="w-full max-w-[280px] sm:max-w-none sm:snap-start sm:shrink-0 sm:w-[calc((100%-2rem)/3)]"
        >
          <button
            type="button"
            onClick={togglePlay}
            data-cursor-hover
            aria-label={playing ? 'Pausar vídeo' : 'Reproducir vídeo'}
            className="group relative block w-full rounded-2xl overflow-hidden aspect-[9/16] border border-white/10"
            style={{ background: '#0A0A0A' }}
          >
            <video
              ref={videoRef}
              src="/casos/cati/reel-cati.mp4"
              poster="/casos/cati/reel-cati-poster.jpg"
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {!playing && (
              /* Botón de play — solo antes de reproducir, en cualquier dispositivo */
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(10,10,10,0.25)' }}>
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-brand-coral/30 animate-ping" style={{ animationDuration: '2.5s' }} />
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#E8665A', boxShadow: '0 8px 24px rgba(232,102,90,0.5)' }}>
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            )}

            {/* Mientras reproduce: solo en PC, al pasar el cursor se ilumina el borde (indica que se puede pausar) */}
            {playing && (
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 2px #E8665A, 0 0 30px rgba(232,102,90,0.45)' }} />
            )}
          </button>
        </motion.div>

        {/* Antes / Después con hover + click */}
        {SHOTS.map((shot, i) => (
          <motion.figure
            key={shot.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.12 + i * 0.12, ease }}
            className="w-full max-w-[280px] sm:max-w-none sm:snap-start sm:shrink-0 sm:w-[calc((100%-2rem)/3)]"
          >
            <button
              type="button"
              onClick={() => setOpen(shot)}
              data-cursor-hover
              className="group relative block w-full rounded-2xl overflow-hidden aspect-[9/16] bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1"
              style={{
                border: shot.variant === 'despues' ? '1px solid rgba(232,102,90,0.3)' : '1px solid rgba(255,255,255,0.1)',
              }}
              aria-label={`Ver captura ${shot.label} en completo`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.cropSrc}
                alt={shot.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ objectPosition: '50% 0%' }}
                loading="lazy"
              />

              {/* Borde llamativo al hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 2px #E8665A, 0 0 30px rgba(232,102,90,0.45)' }} />

              {/* Hint "ver completo" */}
              <span className="pointer-events-none absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <Maximize2 className="w-3.5 h-3.5 text-brand-cream" />
              </span>

              {/* Etiqueta persuasiva */}
              <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 rounded-2xl px-4 py-1.5 ${
                shot.variant === 'despues'
                  ? 'bg-brand-coral text-white'
                  : 'bg-black/70 backdrop-blur-sm text-brand-cream border border-white/15'
              }`}
                style={shot.variant === 'despues' ? { boxShadow: '0 6px 20px rgba(232,102,90,0.5)' } : undefined}>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase leading-none">{shot.label}</span>
                <span className={`text-[10px] font-semibold leading-none ${shot.variant === 'despues' ? 'text-white/90' : 'text-neutral-300'}`}>
                  {shot.sublabel}
                </span>
              </span>
            </button>
          </motion.figure>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(6px)' }}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Cerrar"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-brand-cream transition-colors"
              data-cursor-hover
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={open.fullSrc}
                alt={open.alt}
                className="rounded-[26px] border-2 max-h-[86vh] w-auto"
                style={{ borderColor: open.variant === 'despues' ? 'rgba(232,102,90,0.6)' : 'rgba(255,255,255,0.2)' }}
              />
              <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold tracking-[0.18em] uppercase ${
                open.variant === 'despues' ? 'bg-brand-coral text-white' : 'bg-brand-cream text-brand-black'
              }`}>
                {open.label}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
