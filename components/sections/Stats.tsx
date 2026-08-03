'use client'

import { AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const STATS = [
  { value: '+1M', label: 'Views generadas' },
  { value: '+2.000€', label: 'Ingresos generados' },
  { value: '+40', label: 'Vídeos producidos' },
  { value: '24/7', label: 'Soporte directo' },
]

export function Stats() {
  return (
    <section id="datos" className="bg-brand-black py-14 lg:py-18 relative overflow-hidden" aria-label="Estadísticas">
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup
          className="grid grid-cols-2 gap-y-10 gap-x-8 sm:gap-x-14 lg:flex lg:justify-between lg:gap-x-6 border-t border-white/10 pt-12"
          stagger={0.1}
        >
          {STATS.map((stat) => (
            <AnimatedItem key={stat.label}>
              <div className="group" data-cursor-hover>
                <p
                  className="font-editorial font-extrabold text-brand-cream tracking-tight transition-colors duration-300 group-hover:text-brand-coral"
                  style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)', lineHeight: 0.95 }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 mt-3">
                  {stat.label}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
