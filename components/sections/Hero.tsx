'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const floatingShapes = [
  { w: 56, h: 56, r: 18, bg: 'rgba(232,102,90,0.18)', top: '12%', left: '6%', delay: 0 },
  { w: 36, h: 36, r: 12, bg: 'rgba(232,102,90,0.10)', top: '28%', left: '2%', delay: 0.2 },
  { w: 72, h: 72, r: 24, bg: 'rgba(255,255,255,0.04)', top: '55%', left: '4%', delay: 0.4 },
  { w: 44, h: 44, r: 14, bg: 'rgba(232,102,90,0.12)', top: '75%', left: '9%', delay: 0.1 },
  { w: 28, h: 28, r: 50, bg: 'rgba(232,102,90,0.20)', top: '88%', left: '18%', delay: 0.3 },
  { w: 60, h: 60, r: 20, bg: 'rgba(232,102,90,0.14)', top: '10%', right: '7%', delay: 0.15 },
  { w: 40, h: 40, r: 13, bg: 'rgba(255,255,255,0.05)', top: '30%', right: '3%', delay: 0.35 },
  { w: 80, h: 80, r: 28, bg: 'rgba(232,102,90,0.08)', top: '52%', right: '5%', delay: 0.05 },
  { w: 32, h: 32, r: 50, bg: 'rgba(232,102,90,0.22)', top: '70%', right: '11%', delay: 0.25 },
  { w: 50, h: 50, r: 16, bg: 'rgba(255,255,255,0.03)', top: '85%', right: '20%', delay: 0.45 },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(232,102,90,0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(232,102,90,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 + s.delay, ease }}
            className="absolute"
            style={{
              width: s.w,
              height: s.h,
              borderRadius: s.r,
              background: s.bg,
              top: s.top,
              left: ('left' in s) ? s.left : undefined,
              right: ('right' in s) ? s.right : undefined,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-neutral-400">Agencia de contenido · Trabajamos en toda España</span>
        </motion.div>

        {/* Central visual block */}
        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">

          {/* Background headline text (z-0) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none z-0 px-4"
            aria-hidden="true"
          >
            <span className="font-display font-bold text-brand-cream leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', lineHeight: 1.05 }}>
              Convertimos vistas en
            </span>
            <span className="font-display font-black italic text-brand-coral leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1 }}>
              CLIENTES
            </span>
            <span className="font-display font-bold text-brand-cream leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', lineHeight: 1.05 }}>
              reales
            </span>
          </motion.div>

          {/* iPhone (z-10, glass screen so text behind shows through) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative z-10 my-4"
            style={{ width: 220, flexShrink: 0 }}
          >
            {/* Phone shell */}
            <div
              className="relative rounded-[40px] overflow-hidden"
              style={{
                width: 220,
                height: 460,
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.18)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)',
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full z-20"
                style={{ background: 'rgba(10,10,10,0.7)' }} />

              {/* Glass screen — semi-transparent so BG text shows through */}
              <div
                className="absolute inset-0 rounded-[39px]"
                style={{
                  background: 'rgba(10,10,10,0.38)',
                  backdropFilter: 'blur(1.5px)',
                }}
              />

              {/* Screen content — overlaid on glass */}
              <div className="absolute inset-0 rounded-[39px] flex flex-col items-center justify-center gap-3 px-5 z-10">

                {/* PM logo chip */}
                <div className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-3 py-1.5">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-white"
                    style={{ background: '#E8665A' }}>
                    P
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-300">pronovamark</span>
                </div>

                {/* Metric */}
                <div className="text-center">
                  <p className="font-display font-black text-brand-cream" style={{ fontSize: 36, lineHeight: 1 }}>+5M</p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">views generadas</p>
                </div>

                {/* Notification card */}
                <div className="w-full rounded-2xl px-3 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <p className="text-[9px] font-semibold text-brand-coral mb-1">Instagram · ahora</p>
                  <p className="text-[9px] text-neutral-400 leading-snug">@cliente_real comenzó a seguirte. Ya sois 2.847.</p>
                </div>

                {/* Bar chart mini */}
                <div className="flex items-end gap-1 h-10">
                  {[30, 55, 42, 68, 80, 58, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.06, ease }}
                      style={{
                        width: 12,
                        height: `${h}%`,
                        background: i === 6 ? '#E8665A' : 'rgba(232,102,90,0.25)',
                        borderRadius: 3,
                        transformOrigin: 'bottom',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full z-20"
                style={{ background: 'rgba(255,255,255,0.25)' }} />
            </div>
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="text-base sm:text-lg text-neutral-400 mt-8 max-w-lg text-center leading-relaxed"
        >
          Contenido viral en Instagram y TikTok + sistemas de IA que convierten esa audiencia en reservas y ventas.{' '}
          <span className="text-brand-cream font-medium">Para negocios y marcas personales.</span>
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
            style={{ boxShadow: '0 0 0 0 rgba(232,102,90,0)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(232,102,90,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(232,102,90,0)')}
          >
            Reservar diagnóstico gratis
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#casos"
            onClick={(e) => { e.preventDefault(); document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 text-neutral-400 font-medium text-sm hover:text-brand-cream transition-colors duration-200"
          >
            Ver casos reales →
          </a>
        </motion.div>

        {/* Trust mini-badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {['Sin permanencias', 'Respuesta en 24h', '+5M views generadas'].map((b) => (
            <span key={b} className="text-xs text-neutral-600 bg-white/4 border border-white/8 rounded-full px-3 py-1">
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600"
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
