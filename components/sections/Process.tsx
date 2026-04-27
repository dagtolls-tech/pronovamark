'use client'

import { Search, Lightbulb, Video, Zap } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Search, Lightbulb, Video, Zap }

export function Process() {
  return (
    <section id="proceso" className="bg-[#0F0F0F] py-20 lg:py-28 relative overflow-hidden" aria-labelledby="process-heading">
      {/* Grid decorativo de fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Cómo lo hacemos
          </span>
          <h2 id="process-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            Un proceso claro,{' '}
            <span className="text-brand-coral">sin sorpresas</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Desde el primer diagnóstico hasta los primeros clientes, sabemos exactamente qué hacemos y cuándo.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Línea conectora desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px z-0" aria-hidden="true">
            <div className="h-full bg-gradient-to-r from-transparent via-brand-coral/25 to-transparent" />
          </div>

          <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10" stagger={0.12}>
            {PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon]
              return (
                <AnimatedItem key={step.number}>
                  <div className="relative flex flex-col items-start lg:items-center lg:text-center group">
                    <div className="relative mb-5">
                      <div
                        className="w-[88px] h-[88px] rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 group-hover:border-brand-coral/50"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <Icon className="w-7 h-7 text-brand-coral mb-1" />
                        <span className="text-xs font-bold text-neutral-600 font-mono">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-brand-cream text-lg mb-2 leading-tight">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedItem>
              )
            })}
          </AnimatedGroup>
        </div>

        <AnimatedSection className="text-center mt-14" delay={0.3}>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-coral-dark transition-all duration-300 hover:shadow-coral text-sm"
          >
            Empieza con el diagnóstico gratuito
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
