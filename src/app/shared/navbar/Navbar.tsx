import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { auth } from '../../firebase/firebase'
import { signOut, User } from 'firebase/auth'

interface NavbarProps {
    user: User | null
    setNotification: (message: string) => void
}

const Navbar = ({ user, setNotification }: NavbarProps) => {
    const handleLogout = async () => {
        await signOut(auth)
        setNotification('Has cerrado sesión exitosamente.')
    }

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
                {user ? (
                    <>
                        <li>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={'/sign-in'} className={styles.SignIn}>Sign In</Link>
                        </li>
                        <li>
                            <Link href={'/sign-up'} className={styles.SignUp}>Sign Up</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;