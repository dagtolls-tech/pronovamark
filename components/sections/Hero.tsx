'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
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
              'radial-gradient(ellipse, rgba(232,102,90,0.12) 0%, rgba(120,40,30,0.06) 50%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-5 pb-16 sm:pt-6 sm:pb-20">
        {/* Logo PRONOVAMARK minimalista — con luz cálida pequeña detrás */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative mb-8 sm:mb-10"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[70px] rounded-full blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(232,102,90,0.35) 0%, transparent 75%)' }}
            aria-hidden="true"
          />
          <span className="relative font-editorial font-bold text-brand-cream text-lg sm:text-xl tracking-[0.22em] uppercase">
            PRONOVAMARK<span className="text-brand-coral">.</span>
          </span>
        </motion.div>

        {/* Social proof pill — borde giratorio (igual que YTA Consulting) */}
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
                'conic-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, #E8665A 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 60%, #E8665A 80%, rgba(0,0,0,0) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 inline-flex items-center gap-3 bg-[#0c0c0c] rounded-full pl-2 pr-4 py-2">
            {/* Avatar cliente */}
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
            Multiplicamos <span className="text-brand-coral">x10</span> las Visitas en tus Redes Sociales...{' '}
            <span className="text-brand-coral">Sin excusas</span>
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-sans mt-5 sm:mt-6 text-neutral-400 text-center max-w-sm sm:max-w-md font-normal text-balance"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)', lineHeight: 1.5 }}
        >
          Nosotros nos encargamos <span className="font-bold text-white">de todo</span>. Y te acompañamos en{' '}
          <span className="font-bold text-white">todo momento</span>.
        </motion.p>

        {/* Hueco para vídeo */}
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
              background: 'linear-gradient(145deg, #141414 0%, #0d0d0d 100%)',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(232,102,90,0.08)',
            }}
          >
            {/* Placeholder — se reemplazará con vídeo real */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: 'rgba(232,102,90,0.15)',
                    border: '2px solid rgba(232,102,90,0.3)',
                  }}
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-brand-coral ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-neutral-600 text-xs sm:text-sm font-medium">Vídeo próximamente</p>
              </div>
            </div>
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
