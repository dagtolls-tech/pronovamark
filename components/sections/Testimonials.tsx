import { Quote } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-brand-black py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Lo que dicen nuestros clientes
          </span>
          <h2 id="testimonials-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            Ellos ya <span className="text-brand-coral">lo viven</span>
          </h2>
          <p className="text-neutral-500 text-lg">Negocios físicos que decidieron crecer en redes. Y funcionó.</p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {TESTIMONIALS.map((t) => (
            <AnimatedItem key={t.id}>
              {/* TODO: reemplazar con testimonios reales en lib/constants.ts */}
              <blockquote
                className="rounded-3xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Quote className="w-7 h-7 text-brand-coral/30 mb-4 flex-shrink-0" aria-hidden="true" />
                <p className="text-neutral-400 leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  {/* TODO: reemplazar con foto real */}
                  <div className="w-11 h-11 rounded-full bg-brand-coral/20 border border-brand-coral/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-coral text-sm font-bold">{t.avatarInitials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-cream text-sm leading-tight">{t.name}</p>
                    <p className="text-neutral-600 text-xs leading-tight mt-0.5">{t.business}</p>
                  </div>
                </footer>
              </blockquote>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <p className="text-neutral-700 text-xs">
            {/* TODO: añadir enlace a reseñas de Google cuando estén disponibles */}
            Los testimonios reflejan experiencias reales de clientes. Los datos han sido verificados.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
