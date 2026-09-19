'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react'

const POST_CALL_DURATION = 98
const STORAGE_KEY = 'pronovamark-postcall-video'

function easeProgress(real: number): number {
  if (real <= 0) return 0
  if (real >= 1) return 1
  return Math.pow(real, 0.4)
}

const FAQ_ITEMS = [
  {
    n: 1,
    question: '¿Necesito tener ya muchos seguidores?',
    keyword: 'seguidores',
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
    question: '¿Y si no se me da bien estar frente a la cámara?',
    keyword: 'frente a la cámara',
    video: '/post-llamada/faq-4.mp4',
    poster: '/post-llamada/faq-4-poster.jpg',
  },
]

function FaqVideoPlayer({ src, poster, overlayText, className = '' }: { src: string; poster?: string; overlayText?: string; className?: string }) {
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

      {!playing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10" onClick={togglePlay}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
          </div>
          {overlayText && (
            <p className="mt-4 px-6 text-center text-white font-extrabold text-base sm:text-xl lg:text-2xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {overlayText}
            </p>
          )}
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-300"
        style={{ opacity: showControls || !playing ? 1 : 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
      >
        <div className="px-3 pt-6">
          <div className="h-1 bg-white/20 rounded-full cursor-pointer" onClick={handleSeek}>
            <div className="h-full bg-white rounded-full transition-[width] duration-100 ease-linear" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
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
        if (t > 3 && t < POST_CALL_DURATION - 5) {
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
      const real = v.currentTime / (v.duration || 1)
      setProgress(easeProgress(real))
      try { localStorage.setItem(STORAGE_KEY, String(v.currentTime)) } catch {}
    }
    v.addEventListener('timeupdate', onTime)
    return () => v.removeEventListener('timeupdate', onTime)
  }, [])

  const handleUnmute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.muted = false
    setProgress(0)
    setMuted(false)
    setShowMuteOverlay(false)
    if (overlayTimeout.current) clearTimeout(overlayTimeout.current)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    v.currentTime = 0
    const startPlayback = () => {
      v.removeEventListener('seeked', startPlayback)
      setTimeout(() => v.play().catch(() => {}), 80)
    }
    v.addEventListener('seeked', startPlayback)
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
    <div className="min-h-screen bg-brand-black relative overflow-hidden">
      <style>{`
        @keyframes waveArc1 { 0%,100% { opacity: 0.4; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes waveArc2 { 0%,100% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes waveArc3 { 0%,100% { opacity: 0.2; transform: scale(0.95); } 50% { opacity: 0.9; transform: scale(1); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }
      `}</style>

      {/* Geometric pattern background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="hexGrid" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
              <path d="M60 0L120 26L120 78L60 104L0 78L0 26Z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M60 0L120 26" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M120 26L120 78" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M120 78L60 104" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="60" cy="0" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="120" cy="26" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="120" cy="78" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="60" cy="104" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="78" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="26" r="3" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="26" x2="120" y2="78" stroke="white" strokeWidth="0.3" />
              <line x1="120" y1="26" x2="0" y2="78" stroke="white" strokeWidth="0.3" />
              <line x1="60" y1="0" x2="60" y2="104" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
        </svg>
        {/* Red ambient glow from top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(ellipse, rgba(212,32,32,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-20">
        {/* Logo */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="relative inline-block">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[70px] rounded-full blur-2xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(241,48,48,0.35) 0%, transparent 75%)' }}
              aria-hidden="true"
            />
            <span className="relative font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
              PRONOVAMARK<span className="text-brand-coral">.</span>
            </span>
          </div>
        </div>

        {/* Último paso label with red glow */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(212,32,32,0.3) 0%, transparent 70%)', animation: 'pulseGlow 3s ease-in-out infinite' }}
              aria-hidden="true"
            />
            <span className="relative inline-flex items-center gap-2.5 text-brand-cream/80 text-xs font-semibold tracking-[0.25em] uppercase border border-brand-coral/30 rounded-full px-5 py-2.5" style={{ boxShadow: '0 0 20px rgba(212,32,32,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-brand-coral" style={{ boxShadow: '0 0 8px rgba(212,32,32,0.6)' }} />
              Último paso
            </span>
          </div>
        </div>

        {/* Title — large like YTA Consulting */}
        <h1
          className="text-center font-sans font-extrabold text-brand-cream tracking-[-0.02em] mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1 }}
        >
          Mira Esta Página Antes<br className="hidden sm:block" /> de{' '}
          <span className="bg-gradient-to-b from-[#FF7A7A] to-[#C41818] bg-clip-text text-transparent">Nuestra Llamada</span>
        </h1>

        {/* Paso 1 — Main video with Hero-style player */}
        <div className="mb-16 sm:mb-20">
          <p className="text-center text-neutral-400 text-sm sm:text-base mb-6">
            <span className="font-bold text-brand-cream">Paso 1:</span> Mira este vídeo
          </p>

          {/* Red glow behind video */}
          <div className="relative w-full max-w-3xl mx-auto">
            <div
              className="absolute -inset-8 sm:-inset-12 rounded-[40px] blur-[80px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,32,32,0.12) 0%, rgba(212,32,32,0.04) 50%, transparent 80%)' }}
              aria-hidden="true"
            />
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{
              aspectRatio: '16 / 9',
              background: '#0a0a0a',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.6), 0 0 80px rgba(212,32,32,0.1), 0 0 160px rgba(212,32,32,0.05)',
            }}
          >
            <video
              ref={videoRef}
              src="/post-llamada/post-call.mp4"
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
                <div className="rounded-xl sm:rounded-2xl border-2 border-white/30 bg-black/60 backdrop-blur-sm px-6 py-5 sm:px-14 sm:py-9 text-center max-w-[85%] sm:max-w-none">
                  <p className="text-white font-bold text-sm sm:text-xl mb-3 sm:mb-5">Tu vídeo ha comenzado</p>
                  <div className="relative w-14 h-14 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-5">
                    <svg className="w-full h-full text-white" viewBox="0 0 80 80" fill="none">
                      <path d="M28 30L20 36H12V44H20L28 50V30Z" fill="white" />
                      <path d="M36 28C42 32 42 48 36 52" stroke="white" strokeWidth={3} strokeLinecap="round"
                        style={{ animation: 'waveArc1 0.8s ease-in-out infinite', transformOrigin: '36px 40px' }} />
                      <path d="M44 22C54 28 54 52 44 58" stroke="white" strokeWidth={3} strokeLinecap="round"
                        style={{ animation: 'waveArc2 0.7s ease-in-out infinite 0.15s', transformOrigin: '44px 40px' }} />
                      <path d="M52 16C66 24 66 56 52 64" stroke="white" strokeWidth={3} strokeLinecap="round"
                        style={{ animation: 'waveArc3 0.9s ease-in-out infinite 0.3s', transformOrigin: '52px 40px' }} />
                      <line x1="10" y1="10" x2="70" y2="70" stroke="white" strokeWidth={3.5} strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xs sm:text-lg">Haz clic para escuchar</p>
                </div>
              </div>
            )}

            {/* Mute toggle button */}
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

            {/* Progress bar — eased like Hero */}
            {videoState === 'playing' && !showMuteOverlay && (
              <div className="absolute bottom-0 left-0 right-0 h-[6px] sm:h-2 z-10 bg-white/15">
                <div
                  className="h-full bg-white transition-[width] duration-300 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            )}
          </div>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.n} className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: 'linear-gradient(160deg, #131313 0%, #0A0A0A 60%)' }}>
                <div className="relative">
                  <FaqVideoPlayer src={faq.video} poster={faq.poster} overlayText={faq.question} />
                  <div className="absolute top-3 left-3 z-30 pointer-events-none">
                    <span className="text-white/60 text-[11px] font-semibold tracking-wider uppercase">Pregunta {faq.n}</span>
                  </div>
                </div>

                <div className="px-5 py-5 sm:py-6">
                  <p className="text-brand-cream font-bold text-base sm:text-lg leading-snug text-center">
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
