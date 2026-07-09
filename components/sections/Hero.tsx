'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Heart, Music2 } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

// Tarjetas placeholder estilo Reels — gradiente, emoji, métricas mock
type Reel = {
  emoji: string
  gradient: string
  views: string
  label: string
}

const REELS: Reel[] = [
  { emoji: '🍔', gradient: 'linear-gradient(135deg,#ff6b6b,#feca57)', views: '1.2M', label: 'Restaurante' },
  { emoji: '💪', gradient: 'linear-gradient(135deg,#0f3460,#e94560)', views: '847K', label: 'Gimnasio' },
  { emoji: '💅', gradient: 'linear-gradient(135deg,#ff9a9e,#fad0c4)', views: '2.3M', label: 'Estética' },
  { emoji: '🎨', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', views: '534K', label: 'Creador' },
  { emoji: '🍕', gradient: 'linear-gradient(135deg,#f12711,#f5af19)', views: '3.1M', label: 'Pizzería' },
  { emoji: '✂️', gradient: 'linear-gradient(135deg,#232526,#414345)', views: '912K', label: 'Barbería' },
  { emoji: '🏠', gradient: 'linear-gradient(135deg,#00b09b,#96c93d)', views: '628K', label: 'Inmobiliaria' },
  { emoji: '🚗', gradient: 'linear-gradient(135deg,#373b44,#4286f4)', views: '1.5M', label: 'Concesionario' },
  { emoji: '🧘', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', views: '402K', label: 'Yoga' },
  { emoji: '☕', gradient: 'linear-gradient(135deg,#6f4e37,#c9a17a)', views: '785K', label: 'Cafetería' },
  { emoji: '🦷', gradient: 'linear-gradient(135deg,#e0eafc,#cfdef3)', views: '291K', label: 'Dentista' },
  { emoji: '👟', gradient: 'linear-gradient(135deg,#ee0979,#ff6a00)', views: '4.2M', label: 'E-commerce' },
  { emoji: '🐶', gradient: 'linear-gradient(135deg,#f6d365,#fda085)', views: '1.8M', label: 'Veterinaria' },
  { emoji: '📸', gradient: 'linear-gradient(135deg,#141e30,#243b55)', views: '676K', label: 'Fotógrafo' },
  { emoji: '🌿', gradient: 'linear-gradient(135deg,#11998e,#38ef7d)', views: '519K', label: 'Floristería' },
  { emoji: '🍰', gradient: 'linear-gradient(135deg,#ff9a9e,#fecfef)', views: '2.7M', label: 'Pastelería' },
]

function ReelCard({ reel }: { reel: Reel }) {
  return (
    <div
      className="relative w-full rounded-[18px] overflow-hidden flex-shrink-0"
      style={{
        aspectRatio: '9 / 16',
        background: reel.gradient,
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* Emoji central enorme */}
      <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl select-none">
        {reel.emoji}
      </div>
      {/* Overlay degradado abajo */}
      <div className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }} />
      {/* UI mock — esquina sup. izq */}
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm flex items-center gap-1">
        <Play className="w-2.5 h-2.5 text-white fill-white" />
        <span className="text-[9px] font-bold text-white">{reel.views}</span>
      </div>
      {/* UI mock — abajo */}
      <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold text-white drop-shadow-md">@{reel.label.toLowerCase().replace(/\s/g, '')}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <Music2 className="w-2 h-2 text-white" />
            <span className="text-[8px] font-medium text-white/90">sonido viral</span>
          </div>
        </div>
        <Heart className="w-3 h-3 text-white fill-brand-coral" />
      </div>
    </div>
  )
}

// Genera columna de reels (duplicado para loop infinito)
function ReelColumn({
  reels,
  direction,
  speed,
  className = '',
}: {
  reels: Reel[]
  direction: 'up' | 'down'
  speed: number
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ contain: 'paint layout' }}
    >
      <div
        className={direction === 'up' ? 'animate-reel-up' : 'animate-reel-down'}
        style={{
          animationDuration: `${speed}s`,
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Set 1 */}
        <div className="flex flex-col gap-3 pb-3">
          {reels.map((r, i) => (
            <ReelCard key={`a-${i}`} reel={r} />
          ))}
        </div>
        {/* Set 2 (duplicado para loop) */}
        <div className="flex flex-col gap-3 pb-3">
          {reels.map((r, i) => (
            <ReelCard key={`b-${i}`} reel={r} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  // 6 columnas (3 móvil, 6 desktop) con offsets diferentes
  const cols = [
    { dir: 'up' as const, speed: 38, reels: REELS.slice(0, 8) },
    { dir: 'down' as const, speed: 45, reels: REELS.slice(4, 12) },
    { dir: 'up' as const, speed: 32, reels: REELS.slice(8, 16) },
    { dir: 'down' as const, speed: 42, reels: [...REELS.slice(2, 10)].reverse() },
    { dir: 'up' as const, speed: 36, reels: REELS.slice(6, 14) },
    { dir: 'down' as const, speed: 50, reels: [...REELS.slice(0, 8)].reverse() },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Capa 1 — columnas de reels scrolleando */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Móvil: más opacidad para que se vean los reels (sin oscurecer tanto) */}
        <div className="absolute inset-0 grid grid-cols-3 sm:hidden gap-2 px-2 opacity-95">
          {cols.slice(0, 3).map((c, i) => (
            <ReelColumn key={`m-${i}`} reels={c.reels} direction={c.dir} speed={c.speed} />
          ))}
        </div>
        {/* Tablet/Desktop */}
        <div className="absolute inset-0 hidden sm:grid sm:grid-cols-4 lg:grid-cols-6 gap-3 px-3 opacity-[0.72]">
          {cols.map((c, i) => (
            <ReelColumn
              key={i}
              reels={c.reels}
              direction={c.dir}
              speed={c.speed}
              className={i >= 4 ? 'hidden lg:block' : ''}
            />
          ))}
        </div>
      </div>

      {/* Capa 2 MÓVIL — viñeta más suave (deja ver los vídeos) */}
      <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at center 55%, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.85) 100%)',
        }}
      />

      {/* Capa 2 DESKTOP — viñeta más suave (deja ver más los vídeos) */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at center, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.68) 55%, rgba(10,10,10,0.92) 100%)',
        }}
      />

      {/* Capa 3 DESKTOP — foco teatral sobre el titular (moderado) */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
        {/* Halo crema suave detrás del texto (luz ambiente) */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] h-[560px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, rgba(250,247,242,0.20) 0%, rgba(250,247,242,0.08) 42%, transparent 72%)',
          }}
        />
        {/* Glow coral cálido por debajo del titular */}
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full blur-3xl opacity-80"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,102,90,0.38) 0%, transparent 66%)',
          }}
        />
        {/* Cono de luz descendente (foco teatral) */}
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[72%] h-[64%]"
          style={{
            background: 'radial-gradient(ellipse 55% 92% at 50% 0%, rgba(255,238,210,0.18) 0%, transparent 76%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Capa 4 MÓVIL — foco tipo teatro detrás del titular */}
      <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
        {/* Halo blanco cálido (luz de escenario) */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[55%] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, rgba(250,247,242,0.22) 0%, rgba(250,247,242,0.08) 35%, transparent 70%)',
          }}
        />
        {/* Glow coral cálido por debajo */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[40%] rounded-full blur-3xl opacity-70"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,102,90,0.30) 0%, transparent 65%)',
          }}
        />
        {/* Cono de luz desde arriba (efecto foco teatral) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%]"
          style={{
            background: 'radial-gradient(ellipse 60% 90% at 50% 0%, rgba(255,235,200,0.20) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease }}
          className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-7 sm:mb-9 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold text-brand-cream tracking-wide">
            Agencia de marketing en redes · Costa Blanca
          </span>
        </motion.div>

        {/* Cartel sombreado con headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7, ease }}
          className="relative max-w-4xl text-center"
        >
          {/* MÓVIL — versión resumida e impactante */}
          <h1
            id="hero-heading"
            className="sm:hidden font-editorial font-bold text-brand-cream tracking-[-0.03em]"
            style={{
              fontSize: 'clamp(2.6rem, 13vw, 4rem)',
              lineHeight: 0.92,
              textShadow:
                '0 0 24px rgba(250,247,242,0.45), 0 4px 24px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Contenido <span className="italic text-brand-coral">viral.</span>
            <br />
            Clientes <span className="italic">reales.</span>
          </h1>

          {/* DESKTOP / TABLET — versión completa */}
          <h1
            aria-hidden="true"
            className="hidden sm:block font-editorial font-bold text-brand-cream leading-[0.95] tracking-[-0.025em]"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.6rem)',
              textShadow:
                '0 0 32px rgba(250,247,242,0.18), 0 4px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            Contenido <span className="italic text-brand-coral">creativo y viral.</span>
            <br />
            Embudos de venta para{' '}
            <span className="italic">entregarte clientes.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.95, ease }}
            className="mt-5 sm:mt-7 text-[15px] sm:text-lg text-brand-cream/85 max-w-md sm:max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-0"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            <span className="sm:hidden">
              Para marcas personales y negocios online. <span className="text-brand-coral font-semibold">Tú creas. Nosotros vendemos.</span>
            </span>
            <span className="hidden sm:inline">
              Especialistas en marcas personales y negocios online.{' '}
              <span className="text-brand-coral font-semibold">Tú céntrate en tu marca</span>, nosotros en atraerte clientes.
            </span>
          </motion.p>
        </motion.div>

        {/* CTA tipo TrumpRx — píldora sombreada */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.1, ease }}
          className="mt-10 sm:mt-12 w-full max-w-md"
        >
          <a
            href="#contacto"
            className="group w-full flex items-center justify-between gap-2 pl-6 pr-2 py-2 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(250,247,242,0.96)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(232,102,90,0.3), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            <span className="font-editorial font-semibold text-brand-black text-base sm:text-lg">
              Reservar diagnóstico gratis
            </span>
            <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-coral text-white group-hover:bg-brand-coral-dark transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
          <p className="text-center text-[11px] text-neutral-400 mt-3 font-medium">
            Sin compromiso · Respondemos en menos de 24h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
