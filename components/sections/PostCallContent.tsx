'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

const FAQ_ITEMS = [
  {
    n: 1,
    question: '¿Necesito tener una audiencia previa construida?',
    keyword: 'audiencia',
    video: '/post-llamada/faq-1.mp4',
    poster: '/post-llamada/faq-1-poster.jpg',
  },
  {
    n: 2,
    question: '¿Cómo de rápido puedo ver resultados?',
    keyword: 'resultados',
    video: '/post-llamada/faq-2.mp4',
    poster: '/post-llamada/faq-2-poster.jpg',
  },
  {
    n: 3,
    question: '¿Qué es exactamente lo que gestionan?',
    keyword: 'gestionan',
    video: '/post-llamada/faq-3.mp4',
    poster: '/post-llamada/faq-3-poster.jpg',
  },
  {
    n: 4,
    question: '¿Necesito ser bueno hablando a cámara?',
    keyword: 'a cámara',
    video: '/post-llamada/faq-4.mp4',
    poster: '/post-llamada/faq-4-poster.jpg',
  },
]

function VideoPlayer({ src, poster, className = '' }: { src: string; poster?: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => setProgress(v.currentTime / (v.duration || 1))
    const onEnd = () => setPlaying(false)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('ended', onEnd)
    return () => { v.removeEventListener('timeupdate', onTime); v.removeEventListener('ended', onEnd) }
  }, [])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleFullscreen = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      el.requestFullscreen().catch(() => {})
    }
  }, [])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    v.currentTime = pct * v.duration
    setProgress(pct)
  }, [])

  const handleMouseMove = useCallback(() => {
    setShowControls(true)
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    hideTimeout.current = setTimeout(() => { if (videoRef.current && !videoRef.current.paused) setShowControls(false) }, 3000)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border border-white/[0.08] group cursor-pointer ${className}`}
      style={{
        aspectRatio: '16 / 9',
        background: '#0a0a0a',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.6)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { if (playing) setShowControls(false) }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
        onClick={togglePlay}
      />

      {/* Big play button when paused */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center z-10" onClick={togglePlay}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Controls bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-300"
        style={{ opacity: showControls || !playing ? 1 : 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
      >
        {/* Progress bar */}
        <div className="px-3 pt-6">
          <div className="h-1 bg-white/20 rounded-full cursor-pointer" onClick={handleSeek}>
            <div className="h-full bg-white rounded-full transition-[width] duration-100 ease-linear" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between px-3 py-2">
          <button onClick={togglePlay} className="w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
            {playing ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
          </button>

          <div className="flex items-center gap-1">
            <button onClick={toggleMute} className="w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button onClick={handleFullscreen} className="w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function highlightKeyword(text: string, keyword: string) {
  const idx = text.toLowerCase().indexOf(keyword.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">{text.slice(idx, idx + keyword.length)}</span>
      {text.slice(idx + keyword.length)}
    </>
  )
}

export function PostCallContent() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Subtle glow — less red, more dark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(ellipse, rgba(241,48,48,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-20">
        {/* Logo */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
            PRONOVAMARK<span className="text-brand-coral">.</span>
          </span>
        </div>

        {/* Último paso label */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2.5 text-brand-cream/80 text-xs font-semibold tracking-[0.25em] uppercase border border-white/10 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-brand-coral" />
            Último paso
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-center font-sans font-extrabold text-brand-cream tracking-[-0.02em] mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', lineHeight: 1.15 }}
        >
          Mira Esta Página Antes de{' '}
          <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">Nuestra Llamada</span>
        </h1>

        {/* Paso 1 */}
        <div className="mb-16 sm:mb-20">
          <p className="text-center text-neutral-400 text-sm sm:text-base mb-6">
            <span className="font-bold text-brand-cream">Paso 1:</span> Mira este vídeo
          </p>
          <VideoPlayer src="/post-llamada/post-call.mp4" />
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-white/10 mx-auto mb-16 sm:mb-20" />

        {/* Paso 2 */}
        <div>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center text-brand-cream/80 text-xs font-semibold tracking-[0.25em] uppercase border border-white/10 rounded-full px-5 py-2.5">
              FAQ
            </span>
          </div>

          <p className="text-center text-neutral-400 text-sm sm:text-base mb-4">
            <span className="font-bold text-brand-cream">Paso 2:</span> Mira las FAQ
          </p>

          <h2
            className="text-center font-sans font-extrabold text-brand-cream tracking-[-0.02em] mb-10 sm:mb-12"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', lineHeight: 1.15 }}
          >
            Preguntas Frecuentes{' '}
            <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">Respondidas...</span>
          </h2>

          {/* FAQ grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.n} className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: 'linear-gradient(160deg, #131313 0%, #0A0A0A 60%)' }}>
                <div className="relative">
                  <VideoPlayer src={faq.video} poster={faq.poster} />
                  <div className="absolute top-3 left-3 z-30 pointer-events-none">
                    <span className="text-white/60 text-[11px] font-semibold tracking-wider uppercase">Pregunta {faq.n}</span>
                  </div>
                </div>

                <div className="px-5 py-4">
                  <p className="text-brand-cream font-bold text-sm sm:text-base leading-snug text-center">
                    {highlightKeyword(faq.question, faq.keyword)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
