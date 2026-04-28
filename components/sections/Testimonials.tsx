'use client'

import { Clock, Star } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

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

        <AnimatedSection>
          <div
            className="max-w-2xl mx-auto rounded-3xl p-10 flex flex-col items-center gap-5 text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Estrellas decorativas */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-coral/30 fill-brand-coral/20" />
              ))}
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{ background: 'rgba(232,102,90,0.08)', border: '1px solid rgba(232,102,90,0.15)', color: '#E8665A' }}
            >
              <Clock className="w-4 h-4" />
              Testimonios en desarrollo
            </div>

            <p className="text-neutral-500 leading-relaxed max-w-md">
              Estamos construyendo nuestra base de clientes. Pronto publicaremos aquí las experiencias reales de los negocios con los que trabajamos.
            </p>

            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-brand-coral-dark transition-all duration-200"
            >
              Sé el primero en trabajar con nosotros
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
