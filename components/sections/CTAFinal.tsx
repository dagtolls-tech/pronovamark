'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const contactSchema = z.object({
  nombre: z.string().min(2, 'Dinos cómo te llamas').max(80),
  negocio: z.string().min(2, 'Cuéntanos qué negocio tienes').max(120),
  contacto: z
    .string()
    .min(5, 'Necesitamos un email o móvil para llamarte')
    .max(100),
  necesidad: z.string().max(300).optional(),
  // Campo honeypot anti-spam — debe estar vacío siempre
  website: z.string().max(0, 'Error de validación').optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function CTAFinal() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Si el honeypot está relleno, es spam — no hacer nada
    if (data.website) return

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Error al enviar')

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-[#0F0F0F] py-20 lg:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy izquierda */}
          <AnimatedSection>
            <span className="inline-block text-brand-coral text-sm font-semibold tracking-wider uppercase mb-4">
              Diagnóstico gratuito
            </span>
            <h2 id="cta-heading" className="font-display font-bold text-display-lg text-brand-cream mb-5 leading-tight">
              Reserva tu diagnóstico y sal con un plan claro.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              En 30 minutos te decimos exactamente qué está fallando en tu presencia digital y qué haríamos para solucionarlo. Sin rodeos, sin compromisos.
            </p>

            {/* Promesas de la llamada */}
            <ul className="space-y-3">
              {[
                'Análisis de tu situación actual en redes',
                'Plan de acción personalizado para tu negocio',
                'Estimación de resultados realista',
                'Sin compromiso ni presión de venta',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Formulario derecha */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-3xl p-7 sm:p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h3 className="font-display font-bold text-brand-cream text-2xl">¡Recibido!</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Te contactamos en menos de 24 horas para cuadrar la llamada. Revisa también el spam por si acaso.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-brand-coral font-medium underline underline-offset-2 mt-2"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <h3 className="font-display font-bold text-brand-cream text-xl mb-1">
                    Cuéntanos sobre tu negocio
                  </h3>
                  <p className="text-neutral-500 text-sm mb-6">
                    Sin compromiso. Te llamamos en menos de 24h.
                  </p>

                  <div className="space-y-4">
                    {/* Honeypot — oculto para humanos, visible para bots */}
                    <input
                      {...register('website')}
                      type="text"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute opacity-0 pointer-events-none w-0 h-0"
                      autoComplete="off"
                    />

                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        Tu nombre *
                      </label>
                      <input
                        {...register('nombre')}
                        id="nombre"
                        type="text"
                        placeholder="Carlos Martínez"
                        autoComplete="name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 text-brand-cream placeholder:text-neutral-600 ${
                          errors.nombre
                            ? 'border-red-500/40 bg-red-500/5'
                            : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
                        }`}
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    {/* Negocio */}
                    <div>
                      <label htmlFor="negocio" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        Tu negocio *
                      </label>
                      <input
                        {...register('negocio')}
                        id="negocio"
                        type="text"
                        placeholder="Restaurante La Marina, Benidorm"
                        autoComplete="organization"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 text-brand-cream placeholder:text-neutral-600 ${
                          errors.negocio
                            ? 'border-red-500/40 bg-red-500/5'
                            : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
                        }`}
                      />
                      {errors.negocio && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.negocio.message}
                        </p>
                      )}
                    </div>

                    {/* Email o móvil */}
                    <div>
                      <label htmlFor="contacto" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        Email o móvil *
                      </label>
                      <input
                        {...register('contacto')}
                        id="contacto"
                        type="text"
                        placeholder="carlos@restaurante.com · 600 000 000"
                        autoComplete="email"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 text-brand-cream placeholder:text-neutral-600 ${
                          errors.contacto
                            ? 'border-red-500/40 bg-red-500/5'
                            : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
                        }`}
                      />
                      {errors.contacto && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.contacto.message}
                        </p>
                      )}
                    </div>

                    {/* Necesidad (opcional) */}
                    <div>
                      <label htmlFor="necesidad" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        ¿Qué necesitas? <span className="text-neutral-400 font-normal">(opcional)</span>
                      </label>
                      <textarea
                        {...register('necesidad')}
                        id="necesidad"
                        rows={2}
                        placeholder="Quiero más clientes en mi restaurante, ahora mismo tenemos poca visibilidad..."
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-brand-cream placeholder:text-neutral-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral/40 resize-none"
                      />
                    </div>
                  </div>

                  {/* Error global */}
                  {status === 'error' && (
                    <div className="mt-4 flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Algo fue mal. Inténtalo de nuevo o escríbenos a pronovamark@gmail.com
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-5 bg-brand-coral text-white font-semibold py-4 rounded-xl hover:bg-brand-coral-dark transition-all duration-300 hover:shadow-coral flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Solicitar diagnóstico gratuito
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-400 mt-3">
                    Sin compromiso · Respondemos en menos de 24h · Tus datos son seguros
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
