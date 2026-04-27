'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/shared/Logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquea scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    // Scroll suave a sección
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/6'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" role="navigation" aria-label="Navegación principal">
          <Logo size="sm" variant="dark" animate />

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-neutral-400 hover:text-brand-cream transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-coral rounded-full transition-all duration-200 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
              className="inline-flex items-center gap-2 bg-brand-coral text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-coral-dark transition-all duration-200 hover:shadow-coral"
            >
              Reservar diagnóstico gratis
            </a>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/8 text-brand-cream transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Menú mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-black pt-16 px-4 flex flex-col border-r border-white/5"
          >
            <nav className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-display font-bold text-brand-cream py-4 border-b border-white/8 hover:text-brand-coral transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
                className="flex items-center justify-center w-full bg-brand-coral text-white text-base font-semibold px-6 py-4 rounded-2xl hover:bg-brand-coral-dark transition-all duration-200"
              >
                Reservar diagnóstico gratis
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
