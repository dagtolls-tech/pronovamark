'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PhoneMockup } from '@/components/shared/PhoneMockup'
import { HERO_STATS } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1]

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease }}
      className="flex flex-col items-center sm:items-start"
    >
      <span className="text-2xl sm:text-3xl font-display font-bold text-brand-cream">{value}</span>
      <span className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">{label}</span>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Decoración de fondo — gradientes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(232,102,90,0.15) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(232,102,90,0.12) 0%, transparent 70%)' }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative flex-1 max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 py-16 lg:py-24">

        {/* Columna izquierda — copy */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-neutral-400">Agencia en Benidorm · Trabajamos en toda España</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="font-display font-bold text-display-lg text-brand-cream mb-6"
          >
            Convertimos vistas en{' '}
            <span className="relative inline-block">
              <span className="text-brand-coral">clientes</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease }}
                className="absolute -bottom-1 left-0 right-0 h-[4px] bg-brand-coral/40 rounded-full origin-left"
              />
            </span>{' '}
            para tu negocio físico
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Creamos contenido viral para Instagram y TikTok, y lo convertimos en reservas y clientes reales.{' '}
            <span className="text-brand-cream font-medium">Tú céntrate en tu negocio.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12"
          >
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-300 w-full sm:w-auto justify-center"
              style={{ boxShadow: '0 0 0 0 rgba(232,102,90,0)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(232,102,90,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 rgba(232,102,90,0)')}
            >
              Reserva tu diagnóstico gratuito
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#casos"
              onClick={(e) => { e.preventDefault(); document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 text-brand-cream font-semibold px-7 py-4 rounded-full text-base border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Ver casos reales
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-row items-center justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-white/8"
          >
            {HERO_STATS.map((stat, i) => (
              <StatItem key={stat.label} {...stat} delay={0.65 + i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Columna derecha — Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="flex-1 max-w-sm lg:max-w-none flex justify-center lg:justify-end items-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Flecha scroll */}
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
