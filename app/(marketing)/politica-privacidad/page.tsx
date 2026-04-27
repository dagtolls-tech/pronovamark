import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Política de privacidad | Pronovamark',
  description: 'Política de privacidad y cookies de Pronovamark, conforme al RGPD.',
  robots: { index: false, follow: false },
}

export default function PoliticaPrivacidadPage() {
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

            <h1 className="font-display font-bold text-4xl text-brand-black mb-2">Política de Privacidad</h1>
            <p className="text-neutral-400 text-sm mb-10">Última actualización: enero 2025 · Conforme al RGPD (UE) 2016/679</p>

            <div className="space-y-8 text-neutral-700 text-[15px] leading-relaxed">

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">1. Responsable del tratamiento</h2>
                <ul className="space-y-1 text-sm">
                  {/* TODO: completar con datos reales del responsable */}
                  <li><strong>Identidad:</strong> [Nombre o razón social] — TODO: completar</li>
                  <li><strong>Domicilio:</strong> Benidorm, Alicante, España — TODO: dirección completa</li>
                  <li><strong>Email:</strong> pronovamark@gmail.com</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">2. Finalidad del tratamiento</h2>
                <p>Los datos personales recabados a través del formulario de contacto se tratan con las siguientes finalidades:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                  <li>Gestionar y responder a tu solicitud de diagnóstico o información.</li>
                  <li>Enviarte información comercial sobre nuestros servicios, si has dado tu consentimiento.</li>
                  <li>Cumplir con las obligaciones legales aplicables.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">3. Legitimación</h2>
                <p>
                  La base legal para el tratamiento es tu consentimiento (artículo 6.1.a RGPD), prestado al rellenar el formulario. Para el envío de comunicaciones comerciales, la base es igualmente el consentimiento explícito.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">4. Destinatarios</h2>
                <p>
                  Los datos no se ceden a terceros salvo obligación legal. Utilizamos proveedores de servicios de email (como Resend o similar) que actúan como encargados del tratamiento y cuentan con las garantías adecuadas conforme al RGPD.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">5. Conservación de datos</h2>
                <p>
                  Los datos se conservan durante el tiempo necesario para gestionar tu solicitud y, en su caso, durante el tiempo en que se mantenga la relación comercial. Tras ello, se bloquean durante los plazos legalmente exigidos.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">6. Tus derechos</h2>
                <p>Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                  <li>Acceder a tus datos personales.</li>
                  <li>Rectificar los datos inexactos.</li>
                  <li>Solicitar la supresión cuando ya no sean necesarios.</li>
                  <li>Oponerte al tratamiento o solicitar su limitación.</li>
                  <li>Portabilidad de los datos.</li>
                  <li>Retirar el consentimiento en cualquier momento.</li>
                </ul>
                <p className="mt-3">
                  Puedes ejercer estos derechos escribiendo a <a href="mailto:pronovamark@gmail.com" className="text-brand-coral underline underline-offset-2">pronovamark@gmail.com</a>. Si consideras que el tratamiento no es conforme, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-coral underline underline-offset-2">Agencia Española de Protección de Datos (AEPD)</a>.
                </p>
              </div>

              <div id="cookies">
                <h2 className="font-display font-bold text-brand-black text-xl mb-3">7. Política de cookies</h2>
                <p>
                  Este sitio web utiliza cookies técnicas propias estrictamente necesarias para su funcionamiento. No utiliza cookies de terceros con fines publicitarios ni de seguimiento sin consentimiento previo.
                </p>
                {/* TODO: cuando implementes analítica (ej. Plausible, GA4 cookieless), actualizar este apartado */}
                <p className="mt-2 text-sm text-neutral-500">
                  En caso de que en el futuro se incorporen cookies no esenciales, se solicitará tu consentimiento previo mediante un banner específico.
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
