import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  nombre: z.string().min(2).max(80),
  negocio: z.string().min(2).max(120),
  contacto: z.string().min(5).max(100),
  necesidad: z.string().max(300).optional(),
  website: z.string().max(0).optional(), // honeypot
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Si el honeypot tiene contenido, es spam — respuesta 200 silenciosa
    if (data.website) {
      return NextResponse.json({ ok: true })
    }

    // ──────────────────────────────────────────────────────────────
    // OPCIÓN A: Enviar email con Resend
    // TODO: descomentar y configurar cuando tengas la API key de Resend
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'web@pronovamark.com',
    //   to: 'pronovamark@gmail.com',
    //   subject: `Nuevo diagnóstico: ${data.negocio}`,
    //   html: `
    //     <h2>Nueva solicitud de diagnóstico</h2>
    //     <p><strong>Nombre:</strong> ${data.nombre}</p>
    //     <p><strong>Negocio:</strong> ${data.negocio}</p>
    //     <p><strong>Contacto:</strong> ${data.contacto}</p>
    //     <p><strong>Necesidad:</strong> ${data.necesidad || 'No especificada'}</p>
    //   `,
    // })
    // ──────────────────────────────────────────────────────────────

    // ──────────────────────────────────────────────────────────────
    // OPCIÓN B: Enviar a webhook de n8n/Make
    // TODO: descomentar y añadir la URL de tu webhook
    //
    // const webhookUrl = process.env.WEBHOOK_URL
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    // }
    // ──────────────────────────────────────────────────────────────

    // En desarrollo: log del lead recibido
    if (process.env.NODE_ENV === 'development') {
      console.log('[LEAD RECIBIDO]', {
        nombre: data.nombre,
        negocio: data.negocio,
        contacto: data.contacto,
        necesidad: data.necesidad,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Datos inválidos', details: error.errors }, { status: 400 })
    }
    console.error('[CONTACT API ERROR]', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

// Solo aceptamos POST
export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
