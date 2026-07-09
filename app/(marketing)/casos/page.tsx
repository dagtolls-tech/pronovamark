import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Users, Eye, Bot, Instagram, ArrowRight, Quote } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { BeforeAfter } from '@/components/shared/BeforeAfter'

export const metadata: Metadata = {
  title: 'Casos de éxito | Pronovamark',
  description:
    'Caso de éxito Cati Villaoslada (Óptica Ibiza): de 200 a +2.300 seguidores, vídeos con 60K-100K visitas y una automatización con IA que genera más citas y reservas.',
  alternates: { canonical: 'https://www.pronovamark.com/casos' },
}

const METRICS = [
  { icon: Users, value: '200 → +2.300', label: 'seguidores' },
  { icon: Eye, value: '60K–100K', label: 'visitas por vídeo' },
  { icon: Bot, value: 'IA 24/7', label: 'más citas y reservas' },
]

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="bg-brand-black">

        {/* Cabecera compacta */}
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

        {/* CASO 1 — Cati Villaoslada */}
        <section id="cati" className="pb-20 lg:pb-24">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] overflow-hidden border border-white/8"
              style={{ background: 'linear-gradient(160deg, #161010 0%, #0A0A0A 55%)' }}>

              <div className="p-6 sm:p-8 lg:p-10">

                {/* Cabecera del caso */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                    style={{ background: 'rgba(232,102,90,0.15)', border: '1px solid rgba(232,102,90,0.3)', color: '#E8665A' }}>
                    Caso 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10">
                    <Instagram className="w-3 h-3" /> Óptica · Marca Personal
                  </span>
                </div>

                <h2 className="font-editorial font-bold text-brand-cream tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}>
                  Cati Villaoslada
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base">Una marca de Óptica Ibiza</p>

                {/* Métricas — fila compacta */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">
                  {METRICS.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white/[0.04] border border-white/8 p-3 sm:p-4">
                      <m.icon className="w-4 h-4 text-brand-coral mb-2" />
                      <p className="font-editorial font-bold text-brand-cream leading-none" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.5rem)' }}>
                        {m.value}
                      </p>
                      <p className="text-neutral-500 text-[10px] sm:text-xs mt-1 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* ANTES / DESPUÉS — grande */}
                <div className="mt-8">
                  <BeforeAfter
                    beforeSrc="/casos/cati/antes-instagram.jpg"
                    beforeAlt="Instagram de Óptica Ibiza con 172 seguidores antes de trabajar con Pronovamark"
                    beforeStat="172"
                    beforeCaption="seguidores · punto de partida"
                    afterSrc="/casos/cati/despues-instagram.jpg"
                    afterAlt="Instagram de Cati Villaoslada con +2.300 seguidores y vídeos virales"
                  />
                </div>

                {/* Cita / copy */}
                <div className="relative mt-8 max-w-3xl">
                  <Quote className="w-7 h-7 text-brand-coral/40 mb-3" />
                  <p className="font-editorial text-brand-cream text-lg sm:text-xl leading-snug">
                    De 200 a más de <span className="text-brand-coral">+2.300 seguidores</span> y vídeos con
                    <span className="text-brand-coral"> 60K y 100K visitas</span> recurrentes, y una automatización con IA
                    con <span className="text-brand-coral">más citas y productos reservados</span>. Elevamos nuestro negocio
                    al siguiente nivel con mi Marca Personal y un marketing digital profesional y honesto.
                  </p>
                  <p className="text-neutral-500 text-sm mt-3 font-semibold">— Cati Villaoslada, Óptica Ibiza</p>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-2xl bg-brand-coral p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-editorial font-bold text-white text-lg sm:text-xl leading-snug max-w-xl">
                    ¿Quieres resultados así para tu marca?
                  </p>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 bg-white text-brand-black text-sm font-bold pl-5 pr-3 py-3 rounded-full hover:bg-brand-black hover:text-brand-cream transition-all group"
                  >
                    Reservar diagnóstico gratis
                    <span className="w-6 h-6 rounded-full bg-brand-coral/20 flex items-center justify-center group-hover:bg-white/15">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-neutral-600 text-sm mt-8">Más casos de éxito muy pronto.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
