'use client'

import { Eye, TrendingUp, Video, Headphones } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const STATS = [
  { icon: Eye, value: '+1M', label: 'Views generadas', sub: 'En redes sociales' },
  { icon: TrendingUp, value: '+2.000€', label: 'Ingresos generados', sub: 'Para nuestros clientes' },
  { icon: Video, value: '+40', label: 'Vídeos producidos', sub: 'Contenido que convierte' },
  { icon: Headphones, value: '24/7', label: 'Soporte directo', sub: 'Siempre disponibles' },
]

export function Stats() {
  return (
    <section id="datos" className="bg-brand-black py-20 lg:py-28 relative overflow-hidden" aria-labelledby="stats-heading">
      {/* Decoración */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(232,102,90,0.18) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mb-14">
          <span className="inline-block text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Los números
          </span>
          <h2 id="stats-heading" className="font-editorial font-bold text-brand-cream tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.05 }}>
            Números que{' '}
            <span className="italic text-brand-coral">hablan por nosotros.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-5 leading-relaxed">
            No vendemos humo. Estos son los resultados que generamos con contenido estratégico y embudos que convierten. Y esto es solo el principio.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/10 pt-12" stagger={0.1}>
          {STATS.map((stat) => (
            <AnimatedItem key={stat.label}>
              <div className="group" data-cursor-hover>
                <p className="font-editorial font-extrabold text-brand-cream tracking-tight transition-colors duration-300 group-hover:text-brand-coral"
                  style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)', lineHeight: 0.95 }}>
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
