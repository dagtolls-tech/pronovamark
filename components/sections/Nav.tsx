'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    // Cerrar menú móvil. El scroll suave lo gestiona Lenis interceptando el <a href="#...">.
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Nav flotante estilo Lathos */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6"
      >
        <nav
          className="max-w-[1180px] mx-auto h-14 sm:h-16 flex items-center justify-between pl-4 pr-2 sm:pl-5 sm:pr-2 rounded-full"
          style={{
            background: 'rgba(250,247,242,0.94)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(10,10,10,0.06)',
            boxShadow: '0 10px 40px rgba(10,10,10,0.18), 0 2px 8px rgba(10,10,10,0.08)',
          }}
          role="navigation" aria-label="Navegación principal"
        >
          {/* Logo izquierda — marquee horizontal PRONOVAMARK girando a la izquierda */}
          <Link
            href="/"
            className="relative flex items-center overflow-hidden group h-9 sm:h-10 w-[150px] sm:w-[200px] flex-shrink-0"
            aria-label="Pronovamark - Inicio"
          >
            <div
              className="flex whitespace-nowrap animate-marquee will-change-transform"
              style={{ animationDuration: '14s' }}
              aria-hidden="true"
            >
              {/* Copia 1 */}
              <div className="flex shrink-0 items-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={`a-${i}`} className="flex items-center mx-2 sm:mx-3">
                    <span className="font-editorial font-bold italic text-brand-black tracking-tight"
                      style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', lineHeight: 1 }}>
                      PRONOVAMARK
                    </span>
                    <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0" />
                  </span>
                ))}
              </div>
              {/* Copia 2 (loop) */}
              <div className="flex shrink-0 items-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={`b-${i}`} className="flex items-center mx-2 sm:mx-3">
                    <span className="font-editorial font-bold italic text-brand-black tracking-tight"
                      style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', lineHeight: 1 }}>
                      PRONOVAMARK
                    </span>
                    <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0" />
                  </span>
                ))}
              </div>
            </div>
            {/* Fade-out laterales */}
            <span className="pointer-events-none absolute left-0 top-0 bottom-0 w-4"
              style={{ background: 'linear-gradient(to right, rgba(250,247,242,0.94), transparent)' }}
            />
            <span className="pointer-events-none absolute right-0 top-0 bottom-0 w-4"
              style={{ background: 'linear-gradient(to left, rgba(250,247,242,0.94), transparent)' }}
            />
          </Link>

          {/* Links centro — desktop */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold text-neutral-700 hover:text-brand-black px-4 py-2 rounded-full hover:bg-black/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA derecha — desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 bg-brand-black text-brand-cream text-[13px] font-semibold pl-4 pr-3 py-2.5 rounded-full hover:bg-brand-coral transition-all duration-200 group"
            >
              Reservar diagnóstico
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile: CTA mini + burger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 bg-brand-black text-brand-cream text-[11px] font-semibold px-3 py-2 rounded-full"
            >
              Reservar
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-brand-black transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-black pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-editorial text-4xl font-bold text-brand-cream py-4 border-b border-white/10 hover:text-brand-coral transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <ArrowUpRight className="w-5 h-5 opacity-50" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <a
                href="#contacto"
                onClick={() => handleNavClick('#contacto')}
                className="flex items-center justify-center gap-2 w-full bg-brand-coral text-white text-base font-semibold px-6 py-4 rounded-full hover:bg-brand-coral-dark transition-all"
              >
                Reservar diagnóstico gratis
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
