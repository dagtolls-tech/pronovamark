'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, Globe, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const contactSchema = z.object({
  tipo: z.enum(['negocio-online', 'negocio-fisico'], { required_error: 'Selecciona una opción' }),
  nombre: z.string().min(2, 'Dinos cómo te llamas').max(80),
  negocio: z.string().min(2, 'Cuéntanos qué negocio o marca tienes').max(120),
  contacto: z.string().min(5, 'Necesitamos un email o móvil para llamarte').max(100),
  necesidad: z.string().max(300).optional(),
  website: z.string().max(0, 'Error de validación').optional(),
})

type ContactFormData = z.infer<typeof contactSchema>
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function CTAFinal() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const tipoSeleccionado = watch('tipo')

  const onSubmit = async (data: ContactFormData) => {
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

  const placeholderNegocio = tipoSeleccionado === 'negocio-online'
    ? 'Tu marca, canal o proyecto online'
    : 'Restaurante La Marina, Clínica Belleza...'

  return (
    <section id="contacto" className="bg-[#0F0F0F] py-20 lg:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
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
            <ul className="space-y-3">
              {[
                'Análisis de tu situación actual en redes',
                'Plan de acción personalizado para ti',
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
                    Cuéntanos sobre ti
                  </h3>
                  <p className="text-neutral-500 text-sm mb-5">
                    Sin compromiso. Te llamamos en menos de 24h.
                  </p>

                  {/* Selector tipo — Marca Personal / Negocio */}
                  <div className="mb-5">
                    <p className="text-sm font-medium text-neutral-400 mb-2.5">¿Qué describes mejor tu caso? *</p>
                    <div className="grid grid-cols-2 gap-3">
                      {/* Negocio Online */}
                      <button
                        type="button"
                        onClick={() => setValue('tipo', 'negocio-online', { shouldValidate: true })}
                        className={`flex flex-col items-center gap-2 rounded-2xl p-4 border transition-all duration-200 text-center ${
                          tipoSeleccionado === 'negocio-online'
                            ? 'border-brand-coral bg-brand-coral/10 text-brand-cream'
                            : 'border-white/10 bg-white/3 text-neutral-400 hover:border-white/20 hover:text-neutral-300'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${tipoSeleccionado === 'negocio-online' ? 'bg-brand-coral/20' : 'bg-white/6'}`}>
                          <Globe className={`w-5 h-5 ${tipoSeleccionado === 'negocio-online' ? 'text-brand-coral' : 'text-neutral-500'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight">Negocio Online</p>
                          <p className="text-xs text-neutral-500 mt-0.5 leading-tight">Creador, coach, e-commerce...</p>
                        </div>
                      </button>

                      {/* Negocio Físico */}
                      <button
                        type="button"
                        onClick={() => setValue('tipo', 'negocio-fisico', { shouldValidate: true })}
                        className={`flex flex-col items-center gap-2 rounded-2xl p-4 border transition-all duration-200 text-center ${
                          tipoSeleccionado === 'negocio-fisico'
                            ? 'border-brand-coral bg-brand-coral/10 text-brand-cream'
                            : 'border-white/10 bg-white/3 text-neutral-400 hover:border-white/20 hover:text-neutral-300'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${tipoSeleccionado === 'negocio-fisico' ? 'bg-brand-coral/20' : 'bg-white/6'}`}>
                          <MapPin className={`w-5 h-5 ${tipoSeleccionado === 'negocio-fisico' ? 'text-brand-coral' : 'text-neutral-500'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight">Negocio Físico</p>
                          <p className="text-xs text-neutral-500 mt-0.5 leading-tight">Restaurante, clínica, gimnasio...</p>
                        </div>
                      </button>
                    </div>
                    {errors.tipo && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.tipo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Honeypot */}
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
                          errors.nombre ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
                        }`}
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    {/* Negocio / Marca */}
                    <div>
                      <label htmlFor="negocio" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        {tipoSeleccionado === 'negocio-online' ? 'Tu marca o proyecto *' : 'Tu negocio *'}
                      </label>
                      <input
                        {...register('negocio')}
                        id="negocio"
                        type="text"
                        placeholder={placeholderNegocio}
                        autoComplete="organization"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 text-brand-cream placeholder:text-neutral-600 ${
                          errors.negocio ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
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
                        placeholder="carlos@ejemplo.com · 600 000 000"
                        autoComplete="email"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 text-brand-cream placeholder:text-neutral-600 ${
                          errors.contacto ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-brand-coral/40'
                        }`}
                      />
                      {errors.contacto && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.contacto.message}
                        </p>
                      )}
                    </div>

                    {/* Necesidad */}
                    <div>
                      <label htmlFor="necesidad" className="block text-sm font-medium text-neutral-400 mb-1.5">
                        ¿Qué necesitas? <span className="text-neutral-500 font-normal">(opcional)</span>
                      </label>
                      <textarea
                        {...register('necesidad')}
                        id="necesidad"
                        rows={2}
                        placeholder="Quiero más clientes, tengo poca visibilidad..."
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-brand-cream placeholder:text-neutral-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral/40 resize-none"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Algo fue mal. Inténtalo de nuevo o escríbenos a pronovamark@gmail.com
                    </div>
                  )}

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

                  <p className="text-center text-xs text-neutral-500 mt-3">
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
