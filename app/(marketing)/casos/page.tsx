import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, Eye, Bot, Instagram, Lock, Sparkles } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { CaseShowcase } from '@/components/sections/CaseShowcase'

export const metadata: Metadata = {
  title: 'Casos de éxito | Pronovamark',
  description:
    'Caso de éxito Cati Villaoslada (Óptica Ibiza): de 200 a +3.500 seguidores en 1 mes, vídeos con 60K-100K visitas y una automatización con IA que genera más citas y reservas.',
  alternates: { canonical: 'https://www.pronovamark.com/casos' },
}

const METRICS = [
  { icon: Users, value: '200 → +3.500', label: 'seguidores · 1 mes' },
  { icon: Eye, value: '60K–100K', label: 'visitas por vídeo' },
  { icon: Bot, value: 'IA 24/7', label: 'más citas y reservas' },
]

// Casos futuros — se muestran "en desarrollo" con diseño de hype
const PROXIMOS = [
  { n: '02', niche: 'Mentor de negocios' },
  { n: '03', niche: 'Creador de contenido' },
  { n: '04', niche: 'E-commerce de moda' },
  { n: '05', niche: 'Infoproductor' },
]

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="bg-brand-black">

        {/* Cabecera — NO cambiar */}
        <section className="pt-24 pb-8 lg:pt-28 lg:pb-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(ellipse, rgba(232,102,90,0.2) 0%, transparent 70%)' }}
            />
          </div>
          <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-coral text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-px bg-brand-coral" />
              Casos de éxito
            </span>
            <h1 className="font-editorial font-bold text-brand-cream tracking-tight leading-[0.98]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
              Marcas reales.{' '}
              <span className="italic text-brand-coral">Resultados reales.</span>
            </h1>
          </div>
        </section>

        {/* CASO 01 — Cati Villaoslada */}
        <section id="cati" className="pb-14 lg:pb-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] overflow-hidden border border-white/8 p-5 sm:p-7 lg:p-9"
              style={{ background: 'linear-gradient(160deg, #161010 0%, #0A0A0A 55%)' }}>

              {/* Cabecera del caso */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                  style={{ background: 'rgba(232,102,90,0.15)', border: '1px solid rgba(232,102,90,0.3)', color: '#E8665A' }}>
                  Caso 01
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10">
                  <Instagram className="w-3 h-3" /> Óptica · Marca Personal
                </span>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-editorial font-bold text-brand-cream tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}>
                    Cati Villaoslada
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base">Una marca de Óptica Ibiza</p>
                </div>
              </div>

              {/* Vídeo + Antes + Después — mismo componente que en la home */}
              <div className="mt-6">
                <CaseShowcase />
              </div>

              {/* Datos + texto clave compacto */}
              <div className="mt-6 grid lg:grid-cols-[1.1fr_1fr] gap-5 items-center">
                {/* Métricas */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {METRICS.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white/[0.04] border border-white/8 p-3 sm:p-4">
                      <m.icon className="w-4 h-4 text-brand-coral mb-2" />
                      <p className="font-editorial font-bold text-brand-cream leading-none" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.35rem)' }}>
                        {m.value}
                      </p>
                      <p className="text-neutral-500 text-[10px] sm:text-xs mt-1 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
                {/* Texto clave */}
                <div>
                  <p className="text-brand-cream text-base sm:text-lg leading-snug font-editorial">
                    De 200 a <span className="text-brand-coral">+3.500 seguidores en 1 mes</span>, reels de
                    <span className="text-brand-coral"> 60K–100K visitas</span> y una IA que
                    <span className="text-brand-coral"> llena la agenda de citas y reservas</span>.
                  </p>
                  <p className="text-neutral-500 text-xs mt-2 font-semibold">— Cati Villaoslada · Óptica Ibiza</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRÓXIMOS CASOS — en desarrollo, con hype */}
        <section className="pb-24 lg:pb-28">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-brand-coral text-xs font-bold tracking-[0.2em] uppercase">Próximamente</span>
              <span className="flex-1 h-px bg-white/8" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {PROXIMOS.map((c) => (
                <div key={c.n}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 aspect-[9/13] p-5 flex flex-col justify-between transition-all duration-300 hover:border-brand-coral/30 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(160deg, #141010 0%, #0A0A0A 60%)' }}
                >
                  {/* shimmer / glow */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,102,90,0.15) 0%, transparent 60%)' }} />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wide uppercase text-neutral-500">Caso {c.n}</span>
                    <Lock className="w-3.5 h-3.5 text-neutral-600" />
                  </div>

                  <div className="relative flex flex-col items-center text-center gap-2 my-auto">
                    <div className="w-11 h-11 rounded-full bg-brand-coral/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-brand-coral" />
                    </div>
                    <p className="font-editorial font-bold text-brand-cream text-sm leading-tight">{c.niche}</p>
                  </div>

                  <div className="relative text-center">
                    <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-brand-coral/80 bg-brand-coral/10 border border-brand-coral/20 rounded-full px-3 py-1">
                      En desarrollo
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-600 text-sm mt-8">
              Nuevos casos en camino. El próximo podría ser el tuyo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
