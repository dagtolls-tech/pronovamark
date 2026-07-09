import type { Metadata } from 'next'

const siteUrl = 'https://www.pronovamark.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pronovamark | Contenido viral + embudos de venta para tu negocio',
    template: '%s | Pronovamark',
  },
  description:
    'Agencia de marketing en redes para marcas personales y negocios online. Creamos contenido viral en Instagram y TikTok + embudos de venta con IA que convierten tu audiencia en clientes. Diagnóstico gratuito.',
  keywords: [
    'agencia marketing redes sociales',
    'contenido viral Instagram TikTok',
    'embudos de venta IA',
    'marketing para marcas personales',
    'marketing para negocios online',
    'monetizar marca personal',
    'agencia marketing Costa Blanca',
    'agencia marketing Alicante',
    'crecimiento Instagram',
    'automatizaciones IA marketing',
    'marketing restaurantes clínicas gimnasios',
  ],
  authors: [{ name: 'Pronovamark', url: siteUrl }],
  creator: 'Pronovamark',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Pronovamark',
    title: 'Pronovamark | Contenido viral + embudos de venta para tu negocio',
    description:
      'Agencia de marketing en redes para marcas personales y negocios online. Contenido viral + embudos de venta con IA. Costa Blanca · Toda Alicante.',
    // Imagen OG generada dinámicamente por app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pronovamark | Contenido viral + embudos de venta',
    description:
      'Convertimos vistas en clientes. Contenido viral + embudos con IA para marcas personales y negocios online.',
    // Imagen Twitter generada dinámicamente por app/opengraph-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Iconos generados dinámicamente por app/icon.tsx y app/apple-icon.tsx
  verification: {
    // TODO: añadir Google Search Console verification cuando lo configures
    google: '',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pronovamark',
  url: siteUrl,
  description:
    'Agencia de marketing en redes para marcas personales y negocios online. Contenido viral en Instagram y TikTok + embudos de venta con IA. Operamos 100% online desde la Costa Blanca, trabajamos con clientes de toda Alicante y España.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Alicante',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'pronovamark@gmail.com',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.instagram.com/pronovamark/',
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Alicante, Costa Blanca, España',
  },
  serviceType: [
    'Marketing en redes sociales',
    'Gestión de Instagram',
    'Gestión de TikTok',
    'Contenido viral',
    'Embudos de venta',
    'Automatizaciones con IA',
  ],
}
