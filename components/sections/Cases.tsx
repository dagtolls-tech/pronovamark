'use client'

import { Sparkles, ArrowUpRight } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const CASE_SLOTS = [
  { sector: 'Restauración', tag: 'En desarrollo' },
  { sector: 'Estética & Bienestar', tag: 'En desarrollo' },
  { sector: 'Marca Personal', tag: 'En desarrollo' },
  { sector: 'Fitness & Gimnasios', tag: 'En desarrollo' },
  { sector: 'E-commerce', tag: 'En desarrollo' },
  { sector: 'Servicios profesionales', tag: 'En desarrollo' },
]

export function Cases() {
  return (
    <section id="casos" className="bg-brand-cream py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cases-heading">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-brand-coral" />
              Casos de éxito
            </span>
            <h2 id="cases-heading" className="font-editorial font-bold text-brand-black tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', lineHeight: 0.98 }}>
              Resultados que vienen.{' '}
              <span className="italic text-neutral-400">Pronto, aquí.</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-base lg:text-lg max-w-md leading-relaxed">
            Estamos arrancando con nuestros primeros clientes. Cuando los resultados estén, los enseñamos sin filtros.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" stagger={0.08}>
          {CASE_SLOTS.map((c, i) => (
            <AnimatedItem key={c.sector + i}>
              <article
                className="group relative bg-white rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,10,0.06)',
                  boxShadow: '0 4px 20px rgba(10,10,10,0.05)',
                }}
                data-cursor-hover
              >
                <div className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #F4F1EC 0%, #E8E3DA 100%)',
                  }}
                >
                  <div className="relative">
                    <div
                      className="w-20 h-32 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                      style={{
                        background: 'linear-gradient(135deg, #FAF7F2, #FFFFFF)',
                        boxShadow: '0 12px 32px rgba(10,10,10,0.12), inset 0 0 0 1px rgba(10,10,10,0.04)',
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-brand-coral/60" />
                    </div>
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-black text-brand-cream text-[10px] font-bold tracking-wider uppercase whitespace-nowrap"
                      style={{ boxShadow: '0 4px 12px rgba(10,10,10,0.2)' }}
                    >
                      {c.tag}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[11px] text-brand-coral font-bold tracking-[0.15em] uppercase mb-2">
                    Sector
                  </p>
                  <h3 className="font-editorial font-bold text-brand-black text-xl leading-tight tracking-tight">
                    {c.sector}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mt-3 flex-1">
                    Caso de éxito en producción. Pronto publicaremos métricas y testimonios reales.
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-neutral-400 text-[11px] font-semibold tracking-wider uppercase">
                    Próximamente
                  </div>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="mt-14 text-center" delay={0.3}>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-brand-black text-brand-cream text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral transition-all group"
            data-cursor-hover
          >
            ¿Quieres ser nuestro próximo caso?
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
