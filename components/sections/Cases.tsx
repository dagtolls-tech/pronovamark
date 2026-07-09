import Link from 'next/link'
import { Play, ArrowUpRight, Clapperboard, Lock, Sparkles, Users, Eye, Bot } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const PROXIMOS = [
  { n: '02', niche: 'Mentor de negocios' },
  { n: '03', niche: 'Creador de contenido' },
  { n: '04', niche: 'E-commerce de moda' },
  { n: '05', niche: 'Infoproductor' },
]

export function Cases() {
  return (
    <section id="casos" className="bg-brand-black py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cases-heading">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-brand-coral" />
              Casos de éxito
            </span>
            <h2 id="cases-heading" className="font-editorial font-bold text-brand-cream tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', lineHeight: 0.98 }}>
              Mira lo que hacemos por{' '}
              <span className="italic text-brand-coral">marcas como la tuya.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base lg:text-lg max-w-sm leading-relaxed">
            Perfiles reales que transformamos. El antes y el después de trabajar con nosotros.
          </p>
        </AnimatedSection>

        {/* CASO 01 — Cati */}
        <AnimatedSection>
          <div className="rounded-[28px] border border-white/10 p-5 sm:p-7 lg:p-8"
            style={{ background: 'linear-gradient(160deg, #131313 0%, #0A0A0A 60%)' }}>

            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
              <span className="text-brand-coral text-xs font-bold tracking-[0.2em] uppercase">Caso 01</span>
            </div>

            {/* Vídeo + Antes + Después — 3 paneles verticales del mismo tamaño (estilo Elevate) */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">

              {/* Vídeo */}
              <div className="snap-start shrink-0 w-[72vw] xs:w-[60vw] sm:w-[calc((100%-2rem)/3)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10"
                  style={{ background: 'linear-gradient(160deg, #1c1310 0%, #0A0A0A 60%)' }}>
                  <div className="absolute inset-0 pointer-events-none opacity-60"
                    style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(232,102,90,0.2) 0%, transparent 60%)' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-brand-coral/30 animate-ping" style={{ animationDuration: '2.5s' }} />
                      <div className="relative w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: '#E8665A', boxShadow: '0 8px 24px rgba(232,102,90,0.5)' }}>
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}>
                    <p className="text-[13px] font-bold text-brand-cream">Reel del caso</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Vídeo próximamente</p>
                  </div>
                </div>
              </div>

              {/* Antes */}
              <figure className="snap-start shrink-0 w-[72vw] xs:w-[60vw] sm:w-[calc((100%-2rem)/3)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0d0d0d]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/casos/cati/antes-instagram.jpg"
                    alt="Instagram de Óptica Ibiza con 172 seguidores antes de Pronovamark"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 0%' }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.15em] uppercase text-brand-cream bg-black/65 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/15">
                    Antes
                  </span>
                </div>
              </figure>

              {/* Después */}
              <figure className="snap-start shrink-0 w-[72vw] xs:w-[60vw] sm:w-[calc((100%-2rem)/3)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-brand-coral/30 bg-[#0d0d0d]"
                  style={{ boxShadow: '0 12px 40px rgba(232,102,90,0.22)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/casos/cati/despues-instagram.jpg"
                    alt="Instagram de Cati Villaoslada con +2.300 seguidores y vídeos virales"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 0%' }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.15em] uppercase text-white bg-brand-coral rounded-full px-4 py-1.5">
                    Después
                  </span>
                </div>
              </figure>
            </div>

            {/* Números — tarjetas blancas */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">
              {/* Seguidores + EN 1 MES */}
              <div className="rounded-2xl bg-brand-cream p-3 sm:p-5 flex flex-col">
                <Users className="w-4 h-4 text-brand-coral mb-2" />
                <p className="font-editorial font-bold text-brand-black leading-none" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}>
                  200 → +2.300
                </p>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">seguidores</p>
                <p className="font-editorial font-bold text-brand-coral uppercase tracking-tight mt-2 leading-none"
                  style={{ fontSize: 'clamp(0.95rem, 1.9vw, 1.35rem)' }}>
                  En 1 mes
                </p>
              </div>
              {/* Visitas */}
              <div className="rounded-2xl bg-brand-cream p-3 sm:p-5 flex flex-col">
                <Eye className="w-4 h-4 text-brand-coral mb-2" />
                <p className="font-editorial font-bold text-brand-black leading-none" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}>
                  60K–100K
                </p>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">visitas por vídeo</p>
              </div>
              {/* IA */}
              <div className="rounded-2xl bg-brand-cream p-3 sm:p-5 flex flex-col">
                <Bot className="w-4 h-4 text-brand-coral mb-2" />
                <p className="font-editorial font-bold text-brand-black leading-none" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.6rem)' }}>
                  IA 24/7
                </p>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">más citas y reservas</p>
              </div>
            </div>

            {/* Testimonio con palabras clave */}
            <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div className="max-w-2xl">
                <p className="font-editorial text-brand-cream text-base sm:text-xl leading-snug">
                  De 200 a <span className="text-brand-coral">+2.300 seguidores en 1 mes</span>, reels de
                  <span className="text-brand-coral"> 60K–100K visitas</span> y una IA que
                  <span className="text-brand-coral"> llena la agenda de citas y reservas</span>. Elevamos el negocio
                  al siguiente nivel con mi Marca Personal y un marketing honesto.
                </p>
                <p className="text-neutral-500 text-sm mt-3 font-semibold">— Cati Villaoslada · Óptica Ibiza</p>
              </div>
              <Link
                href="/casos"
                className="inline-flex items-center justify-center gap-2 bg-brand-coral text-white text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral-dark transition-all group whitespace-nowrap flex-shrink-0"
              >
                <Clapperboard className="w-4 h-4" />
                Ver el proceso
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Próximos casos — en desarrollo */}
        <AnimatedSection className="mt-6" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PROXIMOS.map((c) => (
              <div key={c.n}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[3/4] p-5 flex flex-col justify-between transition-all duration-300 hover:border-brand-coral/40 hover:-translate-y-1"
                style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 60%)' }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,102,90,0.15) 0%, transparent 60%)' }} />
                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wide uppercase text-neutral-500">Caso {c.n}</span>
                  <Lock className="w-3.5 h-3.5 text-neutral-600" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-2 my-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand-coral" />
                  </div>
                  <p className="font-editorial font-bold text-brand-cream text-sm leading-tight">{c.niche}</p>
                </div>
                <div className="relative text-center">
                  <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-brand-coral/80 bg-brand-coral/10 border border-brand-coral/20 rounded-full px-3 py-1">
                    En desarrollo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA inferior */}
        <AnimatedSection className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center" delay={0.2}>
          <p className="text-neutral-400 text-sm sm:text-base">Contenido que convierte seguidores en clientes.</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand-cream text-brand-black text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral hover:text-white transition-all group"
          >
            Quiero mis casos de éxito
            <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-white/15">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
