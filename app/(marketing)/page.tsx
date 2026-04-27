import type { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { Cases } from '@/components/sections/Cases'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyUs } from '@/components/sections/WhyUs'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Pronovamark | Agencia de Marketing Digital para Negocios Físicos',
  description:
    'Convertimos seguidores de Instagram y TikTok en clientes reales para tu negocio físico. Contenido viral + embudos con IA. Diagnóstico gratuito.',
  alternates: {
    canonical: 'https://www.pronovamark.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Problem />
        <Process />
        <Services />
        <Cases />
        <Testimonials />
        <WhyUs />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
