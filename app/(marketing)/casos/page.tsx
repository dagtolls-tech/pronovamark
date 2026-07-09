import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, TrendingUp, Users, Eye, Bot, Instagram, ArrowRight, Quote } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Casos de éxito | Pronovamark',
  description:
    'Caso de éxito Cati Villaoslada (Óptica Ibiza): de 200 a +2.300 seguidores, vídeos con 60K-100K visitas y una automatización con IA que genera más citas y reservas.',
  alternates: { canonical: 'https://www.pronovamark.com/casos' },
}

const METRICS = [
  { icon: Users, from: '200', to: '+2.300', label: 'seguidores' },
  { icon: Eye, from: '', to: '60K–100K', label: 'visitas por vídeo' },
  { icon: Bot, from: '', to: 'IA 24/7', label: 'más citas y reservas' },
]

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="bg-brand-black">

        {/* Cabecera */}
        <section className="pt-28 pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(ellipse, rgba(232,102,90,0.2) 0%, transparent 70%)' }}
            />
          </div>
          <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-coral text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-brand-coral" />
              Casos de éxito
            </span>
            <h1 className="font-editorial font-bold text-brand-cream tracking-tight leading-[0.98]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}>
              Marcas reales.{' '}
              <span className="italic text-brand-coral">Resultados reales.</span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
              Así desarrollamos cada proyecto: contenido que se ve, embudos que venden y automatización que trabaja por ti mientras tú te centras en tu negocio.
            </p>
          </div>
        </section>

        {/* CASO 1 — Cati Villaoslada */}
        <section id="cati" className="pb-20 lg:pb-28">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="rounded-[28px] overflow-hidden border border-white/8"
              style={{ background: 'linear-gradient(160deg, #161010 0%, #0A0A0A 55%)' }}>

              {/* Cabecera del caso */}
              <div className="p-7 sm:p-10 lg:p-12 border-b border-white/8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                    style={{ background: 'rgba(232,102,90,0.15)', border: '1px solid rgba(232,102,90,0.3)', color: '#E8665A' }}>
                    Caso 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10">
                    <Instagram className="w-3 h-3" /> Óptica · Marca Personal
                  </span>
                </div>

                <h2 className="font-editorial font-bold text-brand-cream tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
                  Cati Villaoslada
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base mt-1">Una marca de Óptica Ibiza</p>

                {/* Cita / copy del caso */}
                <div className="relative mt-8 max-w-3xl">
                  <Quote className="w-8 h-8 text-brand-coral/40 mb-3" />
                  <p className="font-editorial text-brand-cream text-lg sm:text-2xl leading-snug">
                    De 200 a más de <span className="text-brand-coral">+2.300 seguidores</span> y vídeos con
                    <span className="text-brand-coral"> 60K y 100K visitas</span> recurrentes, y una automatización con IA
                    con <span className="text-brand-coral">más citas y productos reservados</span>.
                  </p>
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mt-5">
                    Elevamos nuestro negocio al siguiente nivel con mi Marca Personal y un marketing digital profesional y honesto.
                  </p>
                  <p className="text-neutral-500 text-sm mt-4 font-semibold">— Cati Villaoslada, Óptica Ibiza</p>
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8 border-b border-white/8">
                {METRICS.map((m) => (
                  <div key={m.label} className="p-6 sm:p-8 flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-coral/12 flex items-center justify-center mb-4">
                      <m.icon className="w-5 h-5 text-brand-coral" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      {m.from && (
                        <>
                          <span className="font-editorial font-bold text-neutral-600 text-xl line-through">{m.from}</span>
                          <ArrowRight className="w-4 h-4 text-brand-coral" />
                        </>
                      )}
                      <span className="font-editorial font-bold text-brand-cream" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                        {m.to}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Antes / Después */}
              <div className="p-7 sm:p-10 lg:p-12">
                <h3 className="font-editorial font-bold text-brand-cream text-xl sm:text-2xl mb-2">Antes y después</h3>
                <p className="text-neutral-500 text-sm mb-8">La prueba está en los números. Esto es lo que cambió.</p>

                <div className="grid lg:grid-cols-2 gap-6 items-start">

                  {/* ANTES */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500">Antes</span>
                      <span className="flex-1 h-px bg-white/8" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Placeholder Instagram antes */}
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 flex flex-col items-center text-center min-h-[180px] justify-center">
                        <Instagram className="w-6 h-6 text-neutral-600 mb-3" />
                        <p className="font-editorial font-bold text-brand-cream text-3xl">172</p>
                        <p className="text-neutral-500 text-xs mt-1">seguidores en Instagram</p>
                        <span className="mt-3 text-[10px] text-neutral-600 uppercase tracking-wider">Punto de partida</span>
                      </div>
                      {/* Placeholder TikTok antes */}
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 flex flex-col items-center text-center min-h-[180px] justify-center">
                        <TrendingUp className="w-6 h-6 text-neutral-600 mb-3" />
                        <p className="font-editorial font-bold text-brand-cream text-3xl">17</p>
                        <p className="text-neutral-500 text-xs mt-1">seguidores en TikTok</p>
                        <span className="mt-3 text-[10px] text-neutral-600 uppercase tracking-wider">Sin vídeos aún</span>
                      </div>
                    </div>
                  </div>

                  {/* DESPUÉS */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-coral">Después</span>
                      <span className="flex-1 h-px bg-brand-coral/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/casos/cati/despues-instagram.jpg"
                        alt="Instagram de Cati Villaoslada con más de 2.300 seguidores y vídeos virales"
                        className="rounded-2xl border border-white/10 w-full h-auto"
                        loading="lazy"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/casos/cati/despues-tiktok.jpg"
                        alt="TikTok de Cati Villaoslada con vídeos de más de 199 mil visitas"
                        className="rounded-2xl border border-white/10 w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA del caso */}
              <div className="px-7 sm:px-10 lg:px-12 pb-10">
                <div className="rounded-2xl bg-brand-coral p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-editorial font-bold text-white text-lg sm:text-2xl leading-snug max-w-xl">
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

            {/* Más casos próximamente */}
            <p className="text-center text-neutral-600 text-sm mt-10">
              Más casos de éxito muy pronto.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
