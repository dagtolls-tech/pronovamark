import type { Metadata } from 'next'

const siteUrl = 'https://www.pronovamark.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pronovamark | Agencia de Marketing Digital en Benidorm',
    template: '%s | Pronovamark',
  },
  description:
    'Convertimos seguidores de Instagram y TikTok en clientes reales para negocios físicos. Contenido viral + embudos de IA. Agencia de marketing en Benidorm.',
  keywords: [
    'agencia marketing digital',
    'marketing redes sociales',
    'Instagram TikTok negocios',
    'automatizaciones IA marketing',
    'marketing restaurantes',
    'marketing clínicas estéticas',
    'agencia marketing Benidorm',
    'crecimiento Instagram',
    'embudos de venta',
  ],
  authors: [{ name: 'Pronovamark', url: siteUrl }],
  creator: 'Pronovamark',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Pronovamark',
    title: 'Pronovamark | Convierte seguidores en clientes para tu negocio',
    description:
      'Agencia de marketing digital especializada en negocios físicos. Instagram + TikTok + automatizaciones con IA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pronovamark Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pronovamark | Marketing Digital para Negocios Físicos',
    description:
      'Convertimos seguidores en clientes. Contenido viral + embudos con IA.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // TODO: añadir Google Search Console verification
    google: '',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pronovamark',
  url: siteUrl,
  logo: `${siteUrl}/logos/pronovamark-logo.png`,
  description:
    'Agencia de marketing digital especializada en crecimiento de Instagram y TikTok para negocios físicos, con automatizaciones de IA para convertir seguidores en clientes.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Benidorm',
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
    // TODO: añadir TikTok y LinkedIn cuando estén disponibles
  ],
  areaServed: 'ES',
  serviceType: [
    'Marketing en redes sociales',
    'Gestión de Instagram',
    'Gestión de TikTok',
    'Automatizaciones con IA',
    'Embudos de venta',
  ],
}
