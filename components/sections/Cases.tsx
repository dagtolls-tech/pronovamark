'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Play, ArrowRight, ArrowLeft, ArrowUpRight, Clapperboard } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

// Casos. El primero es real (Cati Villaoslada) y enlaza a su apartado en /casos.
// El resto son placeholders hasta publicar más casos.
type CaseCard = {
  niche: string
  handle: string
  hint: string
  href: string
}

const CASES: CaseCard[] = [
  { niche: 'Óptica · Marca Personal', handle: '@cati_optica', hint: 'De 200 a +2.300 seguidores en 1 mes', href: '/casos#cati' },
  { niche: 'Mentor de negocios', handle: '@mentorpro', hint: 'Autoridad + embudo a mentoría', href: '/casos' },
  { niche: 'Creador de contenido', handle: '@creador', hint: 'Crecimiento + monetización', href: '/casos' },
  { niche: 'E-commerce de moda', handle: '@tumarca', hint: 'Contenido viral + ventas web', href: '/casos' },
  { niche: 'Infoproductor', handle: '@expertx', hint: 'Lanzamiento de curso online', href: '/casos' },
]

// Ancho de tarjeta: 1 en móvil, 2 en tablet, exactamente 3 en desktop
const CARD_W = 'w-[78vw] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]'

function VideoCard({ c, index }: { c: CaseCard; index: number }) {
  return (
    <article className={`snap-start shrink-0 ${CARD_W} group`}>
      {/* Botón captativo encima de cada vídeo */}
      <Link
        href={c.href}
        data-cursor-hover
        className="mb-3 flex h-10 items-center justify-center gap-2 rounded-full bg-brand-black text-brand-cream text-[11px] sm:text-xs font-semibold px-3 hover:bg-brand-coral transition-colors duration-300 group/btn"
      >
        <Clapperboard className="w-3.5 h-3.5 text-brand-coral group-hover/btn:text-white transition-colors flex-shrink-0" />
        Mira el proceso detrás de este caso
        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Link>

      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          aspectRatio: '9 / 16',
          background: 'linear-gradient(160deg, #17110f 0%, #0A0A0A 60%)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Glow coral sutil de fondo */}
        <div className="absolute inset-0 pointer-events-none opacity-60"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(232,102,90,0.18) 0%, transparent 60%)' }}
        />

        {/* Top bar — badge nicho */}
        <div className="absolute top-0 inset-x-0 p-3.5 flex items-start z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase"
            style={{ background: 'rgba(232,102,90,0.15)', border: '1px solid rgba(232,102,90,0.3)', color: '#E8665A' }}>
            Caso {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Botón play central */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative">
            {/* Anillo pulse */}
            <span className="absolute inset-0 rounded-full bg-brand-coral/30 animate-ping" style={{ animationDuration: '2.5s' }} />
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: '#E8665A', boxShadow: '0 8px 24px rgba(232,102,90,0.5)' }}>
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Etiqueta "en producción" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[54px] z-10">
          <span className="text-[10px] font-semibold text-neutral-400 tracking-wide whitespace-nowrap">
            ● Caso en producción
          </span>
        </div>

        {/* Bottom — info + scrubber */}
        <div className="absolute bottom-0 inset-x-0 p-4 z-10"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)' }}>
          <p className="text-[13px] font-bold text-brand-cream leading-tight">{c.niche}</p>
          <p className="text-[11px] text-neutral-400 mt-0.5">{c.handle} · {c.hint}</p>

          {/* Scrubber falso */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[9px] font-mono text-neutral-500">0:00</span>
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div className="h-full rounded-full" style={{ width: '32%', background: '#E8665A' }} />
            </div>
            <span className="text-[9px] font-mono text-neutral-500">0:38</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Cases() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    // Avanza una "página" completa (los 3 siguientes) para que la 2ª tanda
    // caiga limpia en: caso 4, caso 5 y la tarjeta "próximo caso".
    const amount = el.clientWidth * dir
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="casos" className="bg-brand-cream py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cases-heading">
      {/* Patrón sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-brand-coral" />
              Casos de éxito
            </span>
            <h2 id="cases-heading" className="font-editorial font-bold text-brand-black tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', lineHeight: 0.98 }}>
              Mira lo que hacemos por{' '}
              <span className="italic text-brand-coral">marcas como la tuya.</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-base lg:text-lg max-w-sm leading-relaxed">
            Contenido real, resultados reales. Desliza para ver los proyectos con los que estamos trabajando.
          </p>
        </AnimatedSection>

        {/* Controles carrusel — desktop */}
        <AnimatedSection className="hidden sm:flex items-center justify-end gap-2 mb-5" delay={0.1}>
          <button
            onClick={() => scroll(-1)}
            aria-label="Ver casos anteriores"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-black/8 text-brand-black hover:bg-brand-black hover:text-brand-cream transition-all duration-200 shadow-sm"
            data-cursor-hover
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Ver más casos"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-brand-black text-brand-cream hover:bg-brand-coral transition-all duration-200 shadow-sm"
            data-cursor-hover
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>

      {/* Carrusel — scroll horizontal con snap (3 visibles en desktop) */}
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {CASES.map((c, i) => (
            <VideoCard key={c.handle} c={c} index={i} />
          ))}

          {/* Card CTA final — mismo tamaño que las demás */}
          <article className={`snap-start shrink-0 ${CARD_W}`}>
            {/* Espaciador para alinear con el botón de las tarjetas de vídeo */}
            <div className="h-10 mb-3" aria-hidden="true" />
            <a
              href="#contacto"
              className="relative flex flex-col items-center justify-center text-center rounded-[24px] overflow-hidden h-full p-6 group"
              style={{
                aspectRatio: '9 / 16',
                background: 'linear-gradient(160deg, #E8665A 0%, #C94D42 100%)',
                boxShadow: '0 20px 50px rgba(232,102,90,0.35)',
              }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-editorial font-bold text-white text-2xl leading-tight mb-3">
                ¿Quieres ser nuestro próximo caso?
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Reserva tu diagnóstico gratuito y empieza a generar clientes desde tus redes.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 bg-white text-brand-black text-sm font-bold px-5 py-2.5 rounded-full">
                Reservar gratis
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </article>
        </div>
      </div>

      {/* CTA inferior */}
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center" delay={0.2}>
          <p className="text-neutral-600 text-sm sm:text-base">
            Contenido que convierte seguidores en clientes.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand-black text-brand-cream text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral transition-all group"
            data-cursor-hover
          >
            Quiero mis casos de éxito
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
