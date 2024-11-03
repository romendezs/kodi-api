'use client'
import { useState } from 'react';
import styles from './Product.module.css'
import Image from 'next/image'
import { User } from 'firebase/auth';
import { auth } from '@/app/firebase';

interface Product {
  name: string;
  description: string;
}

const Product = (props: Product) => {


  const sendEmail = async () => {
    try {
      const email = auth.currentUser ? auth.currentUser.email : null;
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
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
        src="https://res.cloudinary.com/dbk8reius/image/upload/v1730268078/experiencia-programacion-persona-que-trabaja-codigos-computadora-scaled-1-2048x1366_nvvvnl.webp"
        alt="Developer"
        width={2048}
        height={1366}
      />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button onClick={sendEmail}>Subscribe</button>
    </div>
  )
}

export default Product
