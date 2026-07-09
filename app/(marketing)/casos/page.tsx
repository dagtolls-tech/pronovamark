import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Casos de éxito | Pronovamark',
  description:
    'Casos de éxito de Pronovamark: marcas personales y negocios online que crecen en redes con contenido viral y embudos de venta.',
  alternates: { canonical: 'https://www.pronovamark.com/casos' },
  robots: { index: false, follow: true }, // sin indexar mientras esté en construcción
}

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-brand-black flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <span className="inline-flex items-center gap-2 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-brand-coral" />
            Casos de éxito
            <span className="w-8 h-px bg-brand-coral" />
          </span>
          <h1 className="font-editorial font-bold text-brand-cream tracking-tight leading-[0.98]"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            Muy <span className="italic text-brand-coral">pronto.</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg mt-5 leading-relaxed">
            Estamos preparando esta sección para enseñarte, paso a paso, cómo desarrollamos cada caso de éxito. Vuelve pronto.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-cream font-semibold text-sm mt-8 border border-white/15 hover:border-white/30 hover:bg-white/5 rounded-full px-5 py-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
