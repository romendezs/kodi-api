// src/shared/navbar/Navbar.tsx
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { auth } from '../../firebases'; 
import { signOut, User } from 'firebase/auth';

interface NavbarProps {
    user: User | null; // Asegúrate de que esta propiedad esté definida
    setNotification: (message: string) => void; // Añadir prop para manejar la notificación
}

const Navbar = ({ user, setNotification }: NavbarProps) => {
    const handleLogout = async () => {
        await signOut(auth);
        setNotification("Has cerrado sesión exitosamente."); // Establecer notificación de éxito
    };

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