import { Client } from '@notionhq/client'
import { NextResponse } from 'next/server'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const DATABASE_ID = process.env.NOTION_DATABASE_ID!

const RETO_MAP: Record<string, string> = {
  'No consigo ganar seguidores.': 'No consigo ganar seguidores',
  'Mis videos tienen pocas visitas.': 'Pocas visitas en videos',
  'Me cuesta vender por falta de autoridad y posicionamiento.': 'Falta de autoridad y posicionamiento',
  'Gasto dinero en anuncios y no veo resultados.': 'Anuncios sin resultados',
  'Ya tengo una audiencia pero no sé cómo venderles.': 'Audiencia sin ventas',
}

const FACTURACION_MAP: Record<string, string> = {
  '+10,000€ / mes': '+10.000€/mes',
  '3,000€ - 10,000€ / mes': '3.000€ - 10.000€/mes',
  '1,000€ - 3,000€ / mes': '1.000€ - 3.000€/mes',
  '- 1,000€': '- 1.000€',
}

const INVERSION_MAP: Record<string, string> = {
  '+ 5,000€': '+ 5.000€',
  '2,000€ - 5,000€': '2.000€ - 5.000€',
  '1,000€ - 2,000€': '1.000€ - 2.000€',
  '- 1,000€': '- 1.000€',
}

const SECTOR_MAP: Record<string, string> = {
  'Marketing': 'Marketing',
  'Salud': 'Salud',
  'Real State': 'Real State',
  'Psicología & desarrollo pesonal': 'Psicología',
  'Finanzas y negocios': 'Finanzas y negocios',
  'Otros negocios': 'Otros negocios',
}

const DECISION_MAP: Record<string, string> = {
  'Depende de mi al 100%': 'Depende de mi al 100%',
  'Tengo que consultarlo con alguien': 'Tengo que consultarlo',
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { answers } = body as { answers: Record<number, string> }

    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        'Nombre': { title: [{ text: { content: answers[1] || '' } }] },
        'Sector': { select: { name: SECTOR_MAP[answers[0]] || answers[0] || '' } },
        'Teléfono': { phone_number: answers[2] || null },
        'Email': { email: answers[3] || null },
        'Instagram': { rich_text: [{ text: { content: answers[4] || '' } }] },
        'Mayor Reto': { select: { name: RETO_MAP[answers[5]] || answers[5] || '' } },
        'Facturación Mensual': { select: { name: FACTURACION_MAP[answers[6]] || answers[6] || '' } },
        'Inversión Disponible': { select: { name: INVERSION_MAP[answers[7]] || answers[7] || '' } },
        'Decisión': { select: { name: DECISION_MAP[answers[8]] || answers[8] || '' } },
        '3 Razones': { rich_text: [{ text: { content: answers[9] || '' } }] },
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Notion API error:', err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
