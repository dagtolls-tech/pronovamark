import Link from 'next/link'
import { Instagram, Music2, Linkedin, Mail } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { CONTACT_EMAIL, INSTAGRAM_URL, TIKTOK_URL, LINKEDIN_URL } from '@/lib/constants'

const footerLinks = {
  servicios: [
    { label: 'Crecimiento orgánico', href: '#servicios' },
    { label: 'Embudos con IA', href: '#servicios' },
    { label: 'Estrategia y reportes', href: '#servicios' },
  ],
  empresa: [
    { label: 'Casos de éxito', href: '/casos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/aviso-legal' },
    { label: 'Política de privacidad', href: '/politica-privacidad' },
    { label: 'Política de cookies', href: '/politica-privacidad#cookies' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: INSTAGRAM_URL, icon: Instagram, external: true },
  { label: 'TikTok', href: TIKTOK_URL, icon: Music2, external: true },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: Linkedin, external: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-neutral-800" role="contentinfo">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sección principal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 py-14">

          {/* Columna marca */}
          <div className="space-y-5">
            <Logo variant="light" size="md" />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Agencia de marketing en redes para negocios físicos y online. Contenido viral + embudos de venta con IA.
            </p>
            <p className="text-neutral-500 text-xs">
              📍 Costa Blanca · Toda Alicante · 100% online
            </p>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-brand-coral transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-brand-cream text-sm font-semibold mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-cream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-brand-cream text-sm font-semibold mb-4 uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-cream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-brand-cream text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand-cream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {year} Pronovamark. Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex items-center gap-3" aria-label="Redes sociales">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-brand-coral flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-4 h-4 text-neutral-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
