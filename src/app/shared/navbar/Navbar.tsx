import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Image
        src={'https://academy.kodigo.org/pluginfile.php/1/theme_moove/logo/1717596360/logo.png'}
        alt='Kodigo'
        className={styles.kodigoImg}
        width={953}
        height={237}
        priority
        />
        <ul>
            <li>
                <Link href={'/bootcamps'} className={styles.Bootcamps}>Bootcamps</Link>
            </li>
            <li>
                <Link href={'/'} className={styles.SignIn}>Sign In</Link>
            </li>
            <li>
                <Link href={'/sign-up'} className={styles.SignUp}>Sign Up</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar