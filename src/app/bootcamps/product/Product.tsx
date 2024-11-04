'use client'
import styles from './Product.module.css'
import Image from 'next/image'
import { auth } from '@/app/firebase/firebase'

interface Product {
  name: string;
  description: string;
}

const Product = (props: Product) => {

  const sendEmail = async () => {
    try {
      const email = auth.currentUser ? auth.currentUser.email : null
      const bootcamp = props.name
      const description = props.description
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email , bootcamp : bootcamp, description: description}),
      },
    )
      const data = await response.json()
      console.log(data.message)
    } catch (error) {
      console.error('Error al enviar el correo:', error)
    }
  }

  return (
    <div className={styles.product}>
      <Image
        src={'https://res.cloudinary.com/dbk8reius/image/upload/v1730268078/experiencia-programacion-persona-que-trabaja-codigos-computadora-scaled-1-2048x1366_nvvvnl.webp'}
        alt="Developer"
        width={2048}
        height={1366}
        className={styles.productImg}
      />
      <h2 className={styles.productTitle}>{props.name}</h2>
      <p className={styles.productDescription}>{props.description}</p>
      <button className={styles.productButton} onClick={sendEmail}>Suscribir</button>
    </div>
  )
}

export default Product
