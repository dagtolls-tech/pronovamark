import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { AnimatedSection, AnimatedGroup, AnimatedItem } from '@/components/shared/AnimatedSection'
import { CASES } from '@/lib/constants'

export function Cases() {
  const featuredCases = CASES.filter((c) => c.featured)

  return (
    <section id="casos" className="bg-[#0F0F0F] py-20 lg:py-28" aria-labelledby="cases-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
            Casos de éxito
          </span>
          <h2 id="cases-heading" className="font-display font-bold text-display-lg text-brand-cream mb-4">
            Resultados reales,{' '}
            <span className="text-brand-coral">no promesas</span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Estos son los números de negocios como el tuyo. Sin trampa ni cartón.
          </p>
        </AnimatedSection>

        <AnimatedGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" stagger={0.12}>
          {featuredCases.map((c) => (
            <AnimatedItem key={c.slug}>
              <article
                className="rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Imagen placeholder */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="flex flex-col items-center gap-2 text-neutral-700">
                    <TrendingUp className="w-7 h-7" />
                    {/* TODO: reemplazar con next/image real */}
                    <span className="text-xs font-medium">Imagen próximamente</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-neutral-300">{c.sector}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-display font-bold text-brand-cream text-lg leading-tight">{c.name}</h3>
                    <p className="text-sm text-neutral-600 mt-0.5">{c.location}</p>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5 italic">
                    &ldquo;{c.problem}&rdquo;
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <p className="font-display font-bold text-brand-coral text-base leading-tight">{m.value}</p>
                        <p className="text-[10px] text-neutral-600 mt-0.5 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/casos/${c.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 hover:text-brand-coral transition-colors group"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="text-center" delay={0.3}>
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 border border-white/12 text-neutral-300 font-semibold px-6 py-3 rounded-full hover:border-white/25 hover:text-white transition-all duration-200 text-sm"
          >
            Ver todos los casos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
