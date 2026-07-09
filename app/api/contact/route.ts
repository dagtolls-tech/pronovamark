import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Esquema compatible con el CTAFinal (tipo: marca-personal | negocio-online)
const contactSchema = z.object({
  tipo: z.enum(['marca-personal', 'negocio-online']).optional(),
  nombre: z.string().min(2).max(80),
  negocio: z.string().min(2).max(120),
  contacto: z.string().min(5).max(100),
  necesidad: z.string().max(500).optional(),
  website: z.string().max(0).optional(), // honeypot
})

// Cliente Resend — la API key vive en variable de entorno (Vercel)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const TO_EMAIL = 'pronovamark@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM || 'Pronovamark <onboarding@resend.dev>'
// Cuando verifiques pronovamark.com en Resend, cambia RESEND_FROM en Vercel a:
//   Pronovamark <web@pronovamark.com>

const tipoLabel: Record<string, string> = {
  'marca-personal': 'Marca Personal',
  'negocio-online': 'Negocio Online',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Honeypot — si está relleno, finge éxito sin hacer nada
    if (data.website) {
      return NextResponse.json({ ok: true })
    }

    // Si no hay API key configurada, logueamos y devolvemos OK
    // (así el formulario sigue funcionando en local sin email)
    if (!resend) {
      console.warn('[LEAD SIN ENVIAR — falta RESEND_API_KEY]', data)
      return NextResponse.json({ ok: true })
    }

    const tipoTexto = data.tipo ? tipoLabel[data.tipo] : 'No especificado'
    const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })

    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#FAF7F2;color:#0A0A0A;">
        <div style="background:#0A0A0A;border-radius:16px;padding:24px;margin-bottom:20px;">
          <h1 style="color:#FAF7F2;margin:0 0 6px;font-size:22px;">Nuevo diagnóstico solicitado</h1>
          <p style="color:#E8665A;margin:0;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Pronovamark · ${fecha}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #E8E3DA;">
          <tr>
            <td style="padding:14px 18px;font-weight:600;color:#58524A;font-size:13px;width:130px;border-bottom:1px solid #F4F1EC;">Tipo</td>
            <td style="padding:14px 18px;color:#0A0A0A;font-size:15px;border-bottom:1px solid #F4F1EC;">${tipoTexto}</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-weight:600;color:#58524A;font-size:13px;border-bottom:1px solid #F4F1EC;">Nombre</td>
            <td style="padding:14px 18px;color:#0A0A0A;font-size:15px;border-bottom:1px solid #F4F1EC;">${escapeHtml(data.nombre)}</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-weight:600;color:#58524A;font-size:13px;border-bottom:1px solid #F4F1EC;">Negocio / Marca</td>
            <td style="padding:14px 18px;color:#0A0A0A;font-size:15px;border-bottom:1px solid #F4F1EC;">${escapeHtml(data.negocio)}</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-weight:600;color:#58524A;font-size:13px;border-bottom:1px solid #F4F1EC;">Contacto</td>
            <td style="padding:14px 18px;color:#0A0A0A;font-size:15px;border-bottom:1px solid #F4F1EC;">
              <strong>${escapeHtml(data.contacto)}</strong>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-weight:600;color:#58524A;font-size:13px;vertical-align:top;">¿Qué necesita?</td>
            <td style="padding:14px 18px;color:#0A0A0A;font-size:15px;line-height:1.6;">
              ${data.necesidad ? escapeHtml(data.necesidad).replace(/\n/g, '<br>') : '<em style="color:#7C766E;">No especificado</em>'}
            </td>
          </tr>
        </table>

        <p style="margin:20px 0 0;font-size:12px;color:#7C766E;text-align:center;">
          Responde a este email para contactar directamente con el lead.
        </p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.contacto.includes('@') ? data.contacto : undefined,
      subject: `🟢 Diagnóstico: ${data.negocio} (${tipoTexto})`,
      html,
    })

    if (error) {
      console.error('[RESEND ERROR]', error)
      return NextResponse.json({ error: 'No se pudo enviar el email' }, { status: 500 })
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

export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}

// Escapa HTML para evitar que un lead malicioso inyecte código en el email
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
