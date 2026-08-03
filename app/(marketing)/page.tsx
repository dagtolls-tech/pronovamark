import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Cases } from '@/components/sections/Cases'
import { FooterMinimal } from '@/components/sections/FooterMinimal'
import { FloatingCTA } from '@/components/shared/FloatingCTA'

export const metadata: Metadata = {
  title: 'Pronovamark | Contenido creativo y embudos de venta para tu negocio',
  description:
    'Agencia de marketing en redes para marcas personales y negocios online. Contenido viral en Instagram y TikTok + embudos de venta con IA. Diagnóstico gratuito.',
  alternates: {
    canonical: 'https://www.pronovamark.com',
  },
}

export default function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Stats />
        <Cases />
      </main>
      <FooterMinimal />
      <FloatingCTA />
    </>
  )
}
