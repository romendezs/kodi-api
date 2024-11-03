// /app/api/send-email/route.ts
import { NextResponse } from 'next/server'


export async function POST(request: Request) {

  const { email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: 'Asunto del correo',
    text: 'Este es el contenido del correo en texto plano.',
    html: '<p>Este es el contenido del correo en <strong>HTML</strong>.</p>',
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Correo enviado:', info.response)
    return NextResponse.json({ message: 'Correo enviado exitosamente.' })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json({ error: 'Error al enviar el correo.' })
  }
}
