import type { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/shared/Marquee'
import { Problem } from '@/components/sections/Problem'
import { Stats } from '@/components/sections/Stats'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { Cases } from '@/components/sections/Cases'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyUs } from '@/components/sections/WhyUs'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Pronovamark | Contenido creativo y embudos de venta para tu negocio',
  description:
    'Agencia de marketing en redes para negocios físicos y online. Contenido viral en Instagram y TikTok + embudos de venta con IA. Diagnóstico gratuito.',
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
        <Marquee text="PRONOVAMARK" speed={38} variant="dark" />
        <Problem />
        <Stats />
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
