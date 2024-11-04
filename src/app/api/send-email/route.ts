// /app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(request: Request) {

  const { email, bootcamp, description } = await request.json()

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
    subject: `Congrats for Subscribing to ${bootcamp} Bootcamp`,
    text: 'Este es el contenido del correo en texto plano.',
    html: `<div> <h1>You have subscribed to ${bootcamp} Bootcamp <h1/> <br/>
          <p>Description: ${description}</p>  
          </div>`,
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
