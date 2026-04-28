'use client'

import { Clock } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const SECTORS = ['Restaurante', 'Clínica Estética', 'Gimnasio']

export function Cases() {
  return (
    <section id="casos" className="bg-[#0F0F0F] py-20 lg:py-28" aria-labelledby="cases-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Casos de éxito
          </span>
          <h2 id="cases-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            Resultados reales,{' '}
            <span className="text-brand-coral">no promesas</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Estos son los números de negocios como el tuyo. Sin trampa ni cartón.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" stagger={0.12}>
          {SECTORS.map((sector) => (
            <AnimatedItem key={sector}>
              <div
                className="rounded-3xl overflow-hidden flex flex-col h-full"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Placeholder imagen */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(232,102,90,0.1)' }}>
                      <Clock className="w-5 h-5 text-brand-coral/60" />
                    </div>
                    <span className="text-xs font-medium text-neutral-700">En desarrollo</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/5 border border-white/8 rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-neutral-600">{sector}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 items-center justify-center text-center gap-3">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
                    style={{ background: 'rgba(232,102,90,0.08)', border: '1px solid rgba(232,102,90,0.15)', color: '#E8665A' }}
                  >
                    <Clock className="w-3 h-3" />
                    Caso en desarrollo
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-[220px]">
                    Próximamente publicaremos resultados reales de clientes de este sector.
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="text-center" delay={0.3}>
          <p className="text-sm text-neutral-700">
            ¿Quieres ser el primero?{' '}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-brand-coral font-semibold hover:underline"
            >
              Reserva tu diagnóstico gratuito
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
