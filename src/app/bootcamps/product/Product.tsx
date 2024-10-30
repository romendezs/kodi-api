import styles from './Product.module.css'
import Image from 'next/image'

interface Product{
    name:string,
    description:string
}

const Product = (props:Product) => {
  return (
    <div className={styles.product}>
        <Image
        src={'https://res.cloudinary.com/dbk8reius/image/upload/v1730268078/experiencia-programacion-persona-que-trabaja-codigos-computadora-scaled-1-2048x1366_nvvvnl.webp'}
        alt='Developer'
        width={2048}
        height={1366}
        />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button>Subscribe</button>

    </div>
  )
}

export default Product