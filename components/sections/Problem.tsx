'use client'

import { Eye, Wallet, UserX } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { PAIN_POINTS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Eye, Wallet, UserX }

export function Problem() {
  return (
    /* Sección INVERTIDA → fondo crema/claro para contraste visual mid-page */
    <section id="problema" className="bg-brand-cream py-20 lg:py-28" aria-labelledby="problem-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Te suena esto, ¿verdad?
          </span>
          <h2 id="problem-heading" className="font-display font-bold text-display-lg text-brand-black mb-6">
            Tu negocio funciona bien.{' '}
            <span className="text-brand-coral">Las redes, no tanto.</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Publicas con regularidad, pruebas cosas, quizás hasta pagas anuncios. Pero los clientes no llegan como esperabas. No es tu culpa: publicar contenido y hacer marketing de verdad son cosas muy distintas.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-3 gap-5 mb-16" stagger={0.12}>
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon]
            return (
              <AnimatedItem key={point.icon}>
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 h-full hover:border-brand-coral/40 hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-coral" />
                  </div>
                  <h3 className="font-display font-bold text-brand-black text-lg mb-2">{point.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </AnimatedItem>
            )
          })}
        </AnimatedGroup>

        <AnimatedSection className="text-center">
          <div className="inline-flex items-center gap-3 bg-brand-black rounded-2xl px-6 py-4">
            <span className="text-2xl">→</span>
            <p className="text-brand-cream font-medium">
              Nosotros lo resolvemos con{' '}
              <span className="text-brand-coral font-bold">contenido que atrae + sistemas que convierten.</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
