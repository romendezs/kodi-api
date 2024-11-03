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
      <button className={styles.productButton}>Suscribir</button>
    </div>
  );
};

export default Product;
