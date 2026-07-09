import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { CASES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Casos de éxito | Pronovamark',
  description:
    'Marcas personales y negocios online que multiplicaron sus clientes con Pronovamark. Resultados reales y medibles.',
  alternates: { canonical: 'https://www.pronovamark.com/casos' },
}

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-brand-black py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-coral text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            <h1 className="font-display font-bold text-display-lg text-brand-cream mb-4">
              Casos de éxito
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl">
              Marcas personales y negocios online que decidieron crecer. Estos son sus números.
            </p>
          </div>
        </section>

        {/* Grid de casos */}
        <section className="bg-brand-cream py-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASES.map((c) => (
                <article key={c.slug} className="bg-white rounded-3xl overflow-hidden shadow-card border border-neutral-200/60 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Imagen placeholder */}
                  <div className="h-44 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-neutral-400">
                      <TrendingUp className="w-8 h-8" />
                      {/* TODO: reemplazar con next/image real */}
                      <span className="text-xs">Imagen próximamente</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-brand-coral uppercase tracking-wide">
                        {c.sector} · {c.location}
                      </span>
                      <h2 className="font-display font-bold text-brand-black text-lg mt-1 leading-tight">{c.name}</h2>
                    </div>

                    <p className="text-neutral-500 text-sm italic mb-4">&ldquo;{c.problem}&rdquo;</p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="bg-brand-cream rounded-xl p-2 text-center">
                          <p className="font-display font-bold text-brand-black text-sm">{m.value}</p>
                          <p className="text-[10px] text-neutral-500 leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/casos/${c.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:text-brand-coral transition-colors group"
                    >
                      Ver caso completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-100 py-16">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-display-md text-brand-black mb-4">
              ¿Tu negocio podría ser el próximo caso?
            </h2>
            <p className="text-neutral-500 mb-6 max-w-xl mx-auto">
              Reserva un diagnóstico gratuito y descubre qué haríamos por ti.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-brand-black text-brand-cream font-semibold px-7 py-4 rounded-full hover:bg-brand-coral transition-all duration-300 hover:shadow-coral"
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
