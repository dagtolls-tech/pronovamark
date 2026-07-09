import Link from 'next/link'
import { Play, ArrowUpRight, Clapperboard, Lock, Sparkles, Users, Eye, Bot } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const METRICS = [
  { icon: Users, value: '200 → +2.300', label: 'seguidores · 1 mes' },
  { icon: Eye, value: '60K–100K', label: 'visitas por vídeo' },
  { icon: Bot, value: 'IA 24/7', label: 'más citas y reservas' },
]

const PROXIMOS = [
  { n: '02', niche: 'Mentor de negocios' },
  { n: '03', niche: 'Creador de contenido' },
  { n: '04', niche: 'E-commerce de moda' },
  { n: '05', niche: 'Infoproductor' },
]

export function Cases() {
  return (
    <section id="casos" className="bg-brand-cream py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cases-heading">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — NO cambiar */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
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
            Contenido real, resultados reales. El antes y el después de trabajar con nosotros.
          </p>
        </AnimatedSection>

        {/* CASO 01 — Cati (destacado): vídeo + antes/después horizontal */}
        <AnimatedSection>
          <div className="rounded-[28px] overflow-hidden border border-white/8 p-5 sm:p-7 lg:p-8"
            style={{ background: 'linear-gradient(160deg, #161010 0%, #0A0A0A 55%)' }}>

            {/* Cabecera del caso */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                style={{ background: 'rgba(232,102,90,0.15)', border: '1px solid rgba(232,102,90,0.3)', color: '#E8665A' }}>
                Caso 01
              </span>
              <div>
                <span className="font-editorial font-bold text-brand-cream text-lg sm:text-xl leading-none">Cati Villaoslada</span>
                <span className="text-neutral-500 text-xs sm:text-sm ml-2">· Óptica · Marca Personal</span>
              </div>
            </div>

            {/* Vídeo + antes/después horizontal */}
            <div className="grid lg:grid-cols-[240px_1fr] gap-4 sm:gap-5 items-stretch">

              {/* Vídeo (reel) */}
              <div className="w-full max-w-[240px] mx-auto lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 h-full"
                  style={{ background: 'linear-gradient(160deg, #1c1310 0%, #0A0A0A 60%)' }}>
                  <div className="absolute inset-0 pointer-events-none opacity-60"
                    style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(232,102,90,0.2) 0%, transparent 60%)' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-brand-coral/30 animate-ping" style={{ animationDuration: '2.5s' }} />
                      <div className="relative w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ background: '#E8665A', boxShadow: '0 8px 24px rgba(232,102,90,0.5)' }}>
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3.5"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }}>
                    <p className="text-[12px] font-bold text-brand-cream">Reel del caso</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Vídeo próximamente</p>
                  </div>
                </div>
              </div>

              {/* Antes / Después — horizontales, apilados al lado del vídeo */}
              <div className="flex flex-col gap-4 justify-center">
                {/* Antes */}
                <figure className="relative">
                  <span className="absolute z-10 top-2.5 left-2.5 text-[10px] font-bold tracking-[0.15em] uppercase text-brand-cream bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/15">
                    Antes
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/casos/cati/antes-instagram.jpg"
                    alt="Instagram de Óptica Ibiza con 172 seguidores antes de Pronovamark"
                    className="rounded-2xl border border-white/10 w-full h-auto block"
                    loading="lazy"
                  />
                </figure>
                {/* Después */}
                <figure className="relative">
                  <span className="absolute z-10 top-2.5 left-2.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-brand-coral rounded-full px-3 py-1">
                    Después
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/casos/cati/despues-instagram.jpg"
                    alt="Instagram de Cati Villaoslada con +2.300 seguidores y vídeos virales"
                    className="rounded-2xl border border-brand-coral/25 w-full h-auto block"
                    loading="lazy"
                    style={{ boxShadow: '0 12px 40px rgba(232,102,90,0.18)' }}
                  />
                </figure>
              </div>
            </div>

            {/* Datos + texto clave + botón */}
            <div className="mt-6 grid lg:grid-cols-[1fr_auto] gap-5 items-center">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-white/[0.04] border border-white/8 p-3 sm:p-4">
                    <m.icon className="w-4 h-4 text-brand-coral mb-2" />
                    <p className="font-editorial font-bold text-brand-cream leading-none" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)' }}>
                      {m.value}
                    </p>
                    <p className="text-neutral-500 text-[10px] sm:text-xs mt-1 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/casos"
                className="inline-flex items-center justify-center gap-2 bg-brand-coral text-white text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral-dark transition-all group whitespace-nowrap"
              >
                <Clapperboard className="w-4 h-4" />
                Mira el proceso detrás de este caso
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Próximos casos — en desarrollo con hype */}
        <AnimatedSection className="mt-6" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PROXIMOS.map((c) => (
              <div key={c.n}
                className="group relative rounded-2xl overflow-hidden border border-white/8 aspect-[4/3] sm:aspect-[3/4] p-5 flex flex-col justify-between transition-all duration-300 hover:border-brand-coral/30 hover:-translate-y-1"
                style={{ background: 'linear-gradient(160deg, #161010 0%, #0A0A0A 60%)' }}
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
          <p className="text-neutral-600 text-sm sm:text-base">Contenido que convierte seguidores en clientes.</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand-black text-brand-cream text-sm font-semibold pl-5 pr-3 py-3 rounded-full hover:bg-brand-coral transition-all group"
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
