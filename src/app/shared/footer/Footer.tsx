import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src={'https://academy.kodigo.org/pluginfile.php/1/theme_moove/logo/1717596360/logo.png'}
        alt='Kodigo'
        className={styles.kodigoImg}
        width={953}
        height={237}
      />

      {/* Falta agregar redes sociales */}

    </footer>
  )
}

export default Footer