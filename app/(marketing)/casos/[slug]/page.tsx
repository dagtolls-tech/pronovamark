import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { CASES } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const caso = CASES.find((c) => c.slug === params.slug)
  if (!caso) return { title: 'Caso no encontrado' }

  return {
    title: `${caso.name} — Caso de éxito | Pronovamark`,
    description: `${caso.sector} en ${caso.location}. ${caso.metrics.map((m) => `${m.value} ${m.label}`).join(', ')}.`,
    alternates: { canonical: `https://www.pronovamark.com/casos/${caso.slug}` },
  }
}

export default function CasoPage({ params }: Props) {
  const caso = CASES.find((c) => c.slug === params.slug)
  if (!caso) notFound()

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero del caso */}
        <section className="bg-brand-black py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-coral text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a casos
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
                {caso.sector} · {caso.location}
              </span>
              <h1 className="font-display font-bold text-display-lg text-brand-cream mb-4">
                {caso.name}
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {caso.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Métricas destacadas */}
        <section className="bg-brand-coral py-12">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {caso.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display font-bold text-brand-cream text-4xl mb-1">{m.value}</p>
                  <p className="text-brand-cream/80 text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cuerpo del caso */}
        <section className="bg-brand-cream py-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Imagen placeholder */}
              <div className="bg-neutral-100 rounded-3xl h-80 flex flex-col items-center justify-center text-neutral-400 gap-3 border border-neutral-200">
                <TrendingUp className="w-12 h-12" />
                {/* TODO: reemplazar con next/image y captura/foto real del caso */}
                <p className="text-sm font-medium">Imagen del caso · próximamente</p>
                <p className="text-xs text-neutral-300">{caso.imageAlt}</p>
              </div>

              {/* Contenido */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-brand-black text-2xl mb-3">El problema</h2>
                  <p className="text-neutral-600 leading-relaxed">{caso.problem}</p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-brand-black text-2xl mb-3">La solución</h2>
                  <p className="text-neutral-600 leading-relaxed">{caso.solution}</p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-brand-black text-2xl mb-4">Los resultados</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {caso.metrics.map((m) => (
                      <div key={m.label} className="bg-brand-cream rounded-2xl p-4 border border-neutral-200 text-center">
                        <p className="font-display font-bold text-brand-black text-2xl mb-1">{m.value}</p>
                        <p className="text-xs text-neutral-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-black py-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-display-md text-brand-cream mb-4">
              ¿Quieres resultados como estos?
            </h2>
            <p className="text-neutral-400 mb-6 max-w-lg mx-auto">
              Reserva un diagnóstico gratuito y descubre qué podríamos hacer por tu negocio.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-brand-coral text-white font-semibold px-7 py-4 rounded-full hover:bg-brand-coral-dark transition-all duration-200 hover:shadow-coral"
            >
              Reservar diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
