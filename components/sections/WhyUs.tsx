'use client'

import { Store, Layers, LineChart, Handshake } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { WHY_US } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Store, Layers, LineChart, Handshake }

export function WhyUs() {
  return (
    <section id="por-que" className="bg-[#0F0F0F] py-20 lg:py-28" aria-labelledby="whyus-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Por qué Pronovamark
          </span>
          <h2 id="whyus-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            No somos otra agencia{' '}
            <span className="text-brand-coral">genérica</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Hay miles de agencias que prometen lo mismo. La diferencia está en que solo trabajamos con negocios físicos y entendemos sus problemas reales.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {WHY_US.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <AnimatedItem key={item.icon}>
                <div
                  className="flex gap-5 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,102,90,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-coral/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-coral/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-coral" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-cream text-lg mb-2 leading-tight">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            )
          })}
        </AnimatedGroup>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.3}>
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-5 py-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-2xl" role="img" aria-label="Bandera España">🇪🇸</span>
            <div>
              <p className="text-sm font-semibold text-brand-cream">Agencia en Benidorm, Alicante</p>
              <p className="text-xs text-neutral-500">Trabajamos con negocios de toda España</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
