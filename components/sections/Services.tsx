'use client'

import { TrendingUp, Bot, BarChart3, Check } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { TrendingUp, Bot, BarChart3 }

export function Services() {
  return (
    <section id="servicios" className="bg-brand-black py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Qué ofrecemos
          </span>
          <h2 id="services-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            Todo lo que necesitas,{' '}
            <span className="text-brand-coral">nada que no necesitas</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            No tenemos un catálogo de 20 servicios. Tres que funcionan juntos para traerte clientes. Sin paquetes inflados.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            const isMiddle = i === 1

            return (
              <AnimatedItem key={service.id}>
                <div
                  className="relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={
                    isMiddle
                      ? { background: '#E8665A', boxShadow: '0 24px 60px rgba(232,102,90,0.3)' }
                      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
                  }
                >
                  {isMiddle && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-coral text-[11px] font-bold tracking-wide px-4 py-1 rounded-full uppercase">
                      Más solicitado
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isMiddle ? 'bg-white/20' : 'bg-brand-coral/10'}`}>
                    <Icon className={`w-6 h-6 ${isMiddle ? 'text-white' : 'text-brand-coral'}`} />
                  </div>

                  <span className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isMiddle ? 'text-white/70' : 'text-brand-coral'}`}>
                    {service.subtitle}
                  </span>

                  <h3 className={`font-display font-bold text-xl mb-3 leading-tight ${isMiddle ? 'text-white' : 'text-brand-cream'}`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isMiddle ? 'text-white/70' : 'text-neutral-500'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mt-auto" role="list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isMiddle ? 'text-white' : 'text-brand-coral'}`} />
                        <span className={`text-sm ${isMiddle ? 'text-white/80' : 'text-neutral-400'}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            )
          })}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <p className="text-neutral-600 text-sm">
            ¿No sabes cuál necesitas? En el diagnóstico te decimos exactamente qué tiene sentido.{' '}
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-coral font-semibold underline underline-offset-2 hover:text-brand-coral-light transition-colors"
            >
              Es gratis.
            </button>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
