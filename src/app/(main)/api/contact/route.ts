import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Tüm alanlar zorunludur.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('İletişim formu (API anahtarı yok):', { name, email, subject, message })
    return NextResponse.json({ success: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: 'BT Öğretmeni Blog <onboarding@resend.dev>',
      to: ['ecevahir@gmail.com'],
      subject: `[Blog İletişim] ${subject}`,
      html: `<p><strong>Gönderen:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br>')}</p>`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
