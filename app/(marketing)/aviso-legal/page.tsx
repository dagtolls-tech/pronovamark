import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Aviso legal | Pronovamark',
  description: 'Aviso legal de Pronovamark, agencia de marketing digital.',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-brand-cream py-16">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-coral text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <h1 className="font-display font-bold text-4xl text-brand-black mb-2">Aviso Legal</h1>
            <p className="text-neutral-400 text-sm mb-10">Última actualización: enero 2025</p>

            <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 text-[15px] leading-relaxed">

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">1. Datos identificativos</h2>
                <p>
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                  {/* TODO: reemplazar con datos reales del titular/empresa cuando estén disponibles */}
                  <li><strong>Titular:</strong> [Nombre o razón social del titular] — TODO: completar</li>
                  <li><strong>Domicilio:</strong> Benidorm, Alicante, España — TODO: dirección completa</li>
                  <li><strong>NIF/CIF:</strong> TODO: completar</li>
                  <li><strong>Email:</strong> pronovamark@gmail.com</li>
                  <li><strong>Web:</strong> www.pronovamark.com</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">2. Objeto</h2>
                <p>
                  El presente aviso legal regula el uso del sitio web www.pronovamark.com (en adelante, &ldquo;el Sitio Web&rdquo;), del que es titular Pronovamark. La utilización del Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">3. Propiedad intelectual e industrial</h2>
                <p>
                  Todos los contenidos del Sitio Web (textos, imágenes, logotipos, diseño, código fuente, etc.) son propiedad de Pronovamark o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">4. Responsabilidad</h2>
                <p>
                  Pronovamark no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del Sitio Web, ni de la información contenida en él, salvo en los casos previstos por la ley.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">5. Ley aplicable y jurisdicción</h2>
                <p>
                  La relación entre Pronovamark y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Benidorm, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
