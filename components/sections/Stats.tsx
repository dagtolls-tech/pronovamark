'use client'

import { Eye, TrendingUp, Video, Headphones } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const STATS = [
  { icon: Eye, value: '?', label: 'Views generadas', sub: 'Próximamente' },
  { icon: TrendingUp, value: '?', label: 'Ingresos generados', sub: 'Próximamente' },
  { icon: Video, value: '?', label: 'Vídeos producidos', sub: 'Próximamente' },
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
            Aún empezamos.{' '}
            <span className="italic text-brand-coral">Pronto, los datos.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-5 leading-relaxed">
            Estamos construyendo nuestra base de clientes. Aquí iremos publicando los resultados reales conforme los generamos.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" stagger={0.1}>
          {STATS.map((stat) => (
            <AnimatedItem key={stat.label}>
              <div
                className="relative rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between min-h-[180px] overflow-hidden group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
                data-cursor-hover
              >
                {/* Glow al hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(232,102,90,0.15) 0%, transparent 60%)' }}
                />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/12 flex items-center justify-center mb-5">
                    <stat.icon className="w-5 h-5 text-brand-coral" />
                  </div>
                  <p className="font-editorial font-bold text-brand-cream tracking-tight"
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1 }}>
                    {stat.value}
                  </p>
                </div>
                <div className="relative mt-4">
                  <p className="text-sm font-semibold text-brand-cream">{stat.label}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{stat.sub}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
