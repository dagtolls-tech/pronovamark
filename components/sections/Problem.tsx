'use client'

import { Clock, Sparkles, Workflow, ArrowUpRight } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'

const PILLARS = [
  {
    icon: Sparkles,
    title: 'Contenido creativo que convierte',
    description: 'Creamos vídeos diseñados para viralizar, no para llenar el feed. Cada pieza tiene un objetivo claro: atraer al cliente correcto.',
  },
  {
    icon: Workflow,
    title: 'Embudos de venta automatizados',
    description: 'Convertimos cada visita y mensaje en una conversación con un cliente potencial. Sin perder un solo lead, sin que tú estés pendiente.',
  },
  {
    icon: Clock,
    title: 'Tiempo, el que no tienes',
    description: 'Tú diriges el negocio. Nosotros gestionamos estrategia, producción, publicación, comunidad y ventas en redes. Llave en mano.',
  },
]

export function Problem() {
  return (
    <section id="problema" className="bg-brand-cream py-24 lg:py-32 relative overflow-hidden" aria-labelledby="problem-heading">
      {/* Patrón sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-brand-coral" />
            El problema
          </span>
          <h2 id="problem-heading" className="font-editorial font-bold text-brand-black tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', lineHeight: 0.98 }}>
            Tienes una marca con algo que vender.
            <br />
            <span className="italic text-neutral-500">Lo que no tienes es </span>
            <span className="italic text-brand-coral">tiempo</span>
            <span className="italic text-neutral-500"> para redes.</span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg mt-7 leading-relaxed max-w-2xl">
            Las marcas personales y los negocios online se enfrentan al mismo techo: para crecer en redes hace falta producir contenido a diario, entender algoritmos, contestar mensajes en minutos, montar embudos, medir, ajustar. Imposible si de verdad quieres escalar tu proyecto.
          </p>
          <p className="text-brand-black text-lg sm:text-xl mt-5 font-editorial font-semibold leading-snug max-w-2xl">
            Nosotros nos encargamos de todo eso para que tú no tengas que tocarlo.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid md:grid-cols-3 gap-4 sm:gap-5" stagger={0.12}>
          {PILLARS.map((p) => (
            <AnimatedItem key={p.title}>
              <article
                className="group bg-white rounded-3xl p-7 lg:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,10,0.06)',
                  boxShadow: '0 2px 12px rgba(10,10,10,0.04)',
                }}
                data-cursor-hover
              >
                <div className="w-11 h-11 rounded-xl bg-brand-black flex items-center justify-center mb-6">
                  <p.icon className="w-5 h-5 text-brand-cream" />
                </div>
                <h3 className="font-editorial font-bold text-brand-black text-xl lg:text-2xl mb-3 leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="mt-6 flex items-center gap-1.5 text-brand-coral text-xs font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lo gestionamos nosotros
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="mt-14" delay={0.4}>
          <div className="flex flex-wrap items-center justify-between gap-6 bg-brand-black rounded-3xl px-7 py-7 lg:px-10 lg:py-8">
            <p className="font-editorial font-semibold text-brand-cream text-lg lg:text-xl leading-snug max-w-2xl">
              ¿Quieres ver cómo lo haríamos contigo?{' '}
              <span className="text-brand-coral italic">Diagnóstico gratuito en 30 minutos.</span>
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-brand-coral text-white text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral-dark transition-all group"
              data-cursor-hover
            >
              Reservar ahora
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
