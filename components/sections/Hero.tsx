'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'

const ease = [0.22, 1, 0.36, 1] as const
const VIDEO_DURATION = 307
const STORAGE_KEY = 'pronovamark-hero-video'

function easeProgress(real: number): number {
  if (real <= 0) return 0
  if (real >= 1) return 1
  if (real < 0.08) return real * 5.5
  if (real < 0.2) return 0.44 + (real - 0.08) * 2.5
  if (real < 0.4) return 0.74 + (real - 0.2) * 0.7
  return 0.88 + (real - 0.4) * 0.2
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoState, setVideoState] = useState<'idle' | 'playing' | 'resume'>('idle')
  const [muted, setMuted] = useState(true)
  const [showMuteOverlay, setShowMuteOverlay] = useState(false)
  const [progress, setProgress] = useState(0)
  const [savedTime, setSavedTime] = useState(0)
  const overlayTimeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const t = parseFloat(saved)
        if (t > 3 && t < VIDEO_DURATION - 5) {
          setSavedTime(t)
          setVideoState('resume')
          return
        }
      }
    } catch {}
    setVideoState('idle')
  }, [])

  useEffect(() => {
    if (videoState !== 'idle') return
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.playsInline = true
    v.play().then(() => {
      setVideoState('playing')
      setMuted(true)
      setShowMuteOverlay(true)
      overlayTimeout.current = setTimeout(() => setShowMuteOverlay(false), 8000)
    }).catch(() => {})
    return () => { if (overlayTimeout.current) clearTimeout(overlayTimeout.current) }
  }, [videoState])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => {
      const real = v.currentTime / v.duration
      setProgress(easeProgress(real))
      try { localStorage.setItem(STORAGE_KEY, String(v.currentTime)) } catch {}
    }
    v.addEventListener('timeupdate', onTime)
    return () => v.removeEventListener('timeupdate', onTime)
  }, [])

  const handleUnmute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    setProgress(0)
    v.muted = false
    setMuted(false)
    setShowMuteOverlay(false)
    if (overlayTimeout.current) clearTimeout(overlayTimeout.current)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }, [])

  const handleToggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleResume = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = savedTime
    v.muted = true
    v.play().then(() => {
      setVideoState('playing')
      setMuted(true)
      setShowMuteOverlay(true)
      overlayTimeout.current = setTimeout(() => setShowMuteOverlay(false), 8000)
    }).catch(() => {})
  }, [savedTime])

  const handleRestart = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.muted = true
    v.play().then(() => {
      setVideoState('playing')
      setMuted(true)
      setShowMuteOverlay(true)
      overlayTimeout.current = setTimeout(() => setShowMuteOverlay(false), 8000)
    }).catch(() => {})
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Glow sutil de fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[120px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(241,48,48,0.12) 0%, rgba(120,40,30,0.06) 50%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-5 pb-16 sm:pt-6 sm:pb-20">
        {/* Logo PRONOVAMARK */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative mb-8 sm:mb-10"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[70px] rounded-full blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(241,48,48,0.35) 0%, transparent 75%)' }}
            aria-hidden="true"
          />
          <span className="relative font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
            PRONOVAMARK<span className="text-brand-coral">.</span>
          </span>
        </motion.div>

        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative rounded-full p-[1.5px] overflow-hidden inline-flex items-center justify-center mb-5 sm:mb-6"
        >
          <div
            className="absolute top-1/2 left-1/2 w-[1500px] h-[1500px] animate-border-beam"
            style={{
              background:
                'conic-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, #F13030 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 60%, #F13030 80%, rgba(0,0,0,0) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 inline-flex items-center gap-3 bg-[#0c0c0c] rounded-full pl-2 pr-4 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/casos/cati/cati-avatar.png"
              alt="Cati Villaoslada, cliente de Pronovamark"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 object-cover flex-shrink-0"
            />
            <span className="text-[12px] sm:text-[13px] text-neutral-300 font-medium">
              <span className="font-bold text-brand-cream">+1.000.000</span> de visualizaciones para nuestros clientes
            </span>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-center max-w-4xl"
        >
          <h1
            id="hero-heading"
            className="font-sans font-extrabold text-brand-cream tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(1.8rem, 6.5vw, 3.4rem)',
              lineHeight: 1.15,
            }}
          >
            Multiplicamos <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">x10</span> las Visitas en Tus Redes Sociales...{' '}
            <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">Sin excusas</span>
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-display mt-5 sm:mt-6 text-white text-center max-w-sm sm:max-w-lg font-bold tracking-tight text-balance"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.45 }}
        >
          El método viral para{' '}
          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#F97316] text-white -rotate-1 mx-0.5" style={{ boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}>vender más</span>{' '}
          en redes sociales sin anuncios. Nosotros{' '}
          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#2563EB] text-white rotate-1 mx-0.5" style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }}>nos encargamos</span>{' '}
          de todo.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 sm:mt-8 w-full max-w-3xl"
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{
              aspectRatio: '16 / 9',
              background: '#0a0a0a',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(241,48,48,0.08)',
            }}
          >
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              muted
              preload="auto"
            />

            {/* Resume overlay */}
            {videoState === 'resume' && (
              <div className="absolute inset-0 z-20 flex items-center justify-center" style={{ background: 'rgba(10,10,10,0.85)' }}>
                <div className="rounded-2xl p-8 sm:p-10 text-center max-w-md w-full mx-4"
                  style={{ background: 'linear-gradient(135deg, #D42020 0%, #B91C1C 100%)' }}>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-6">
                    Ya has comenzado a ver este vídeo
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <button
                      onClick={handleResume}
                      className="flex items-center gap-2.5 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      ¿Continuar viendo?
                    </button>
                    <button
                      onClick={handleRestart}
                      className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white/90 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      ¿Comenzar desde el principio?
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mute overlay — "Tu vídeo ha comenzado" */}
            {showMuteOverlay && videoState === 'playing' && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                onClick={handleUnmute}
              >
                <div className="rounded-2xl border-2 border-white/30 bg-black/60 backdrop-blur-sm px-8 py-6 sm:px-10 sm:py-8 text-center">
                  <p className="text-white font-bold text-base sm:text-lg mb-4">Tu vídeo ha comenzado</p>
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l-2.25 2.25M19.5 12H4.5" style={{ display: 'none' }} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
                    <line x1="3" y1="3" x2="21" y2="21" strokeWidth={2} />
                  </svg>
                  <p className="text-white font-bold text-sm sm:text-base">Haz clic para escuchar</p>
                </div>
              </div>
            )}

            {/* Mute toggle button (after overlay dismissed) */}
            {videoState === 'playing' && !showMuteOverlay && (
              <button
                onClick={handleToggleMute}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                {muted ? (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                )}
              </button>
            )}

            {/* Progress bar */}
            {videoState === 'playing' && (
              <div className="absolute bottom-0 left-0 right-0 h-[6px] sm:h-2 z-10 bg-white/15">
                <div
                  className="h-full bg-white transition-[width] duration-300 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 sm:mt-8"
        >
          <a
            href="/survey"
            data-cursor-hover
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-[18px] rounded-xl font-editorial font-bold text-white text-base sm:text-lg uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_44px_rgba(230,35,35,0.55)]"
            style={{
              background: 'linear-gradient(135deg, #F13030 0%, #C41818 100%)',
              boxShadow:
                '0 8px 32px rgba(230,35,35,0.45), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            AGENDAR LLAMADA
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
