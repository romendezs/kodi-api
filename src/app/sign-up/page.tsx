"use client"; // Asegúrate de que esto esté presente

import { useState } from 'react';
import { auth } from "../firebases"; 
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'; // Importa User
import { useRouter } from 'next/navigation'; 
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import styles from './Sign-up.module.css';
import Notification from '../shared/notificacion/Notification'; // Importa el componente de notificación

const montserrat = Montserrat({
    subsets: ['latin'],
});

const SignUp = () => {
    const router = useRouter();
    const [user, setUser ] = useState<User | null>(null); // Define el tipo correctamente
    const [notification, setNotification] = useState<string | null>(null); // Estado para la notificación

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Usuario logueado: ', user);
            setUser (user); // Actualiza el estado del usuario
            setNotification("Registro exitoso. Bienvenido!"); // Establece la notificación de éxito
            setTimeout(() => setNotification(null), 3000); // Oculta la notificación después de 3 segundos
            router.push('/bootcamps'); 
        } catch (error) {
            console.error("Error al iniciar sesión con Google: ", error);
            setNotification("Error al iniciar sesión con Google."); // Establece la notificación de error
        }
    };

    const handleCloseNotification = () => {
        setNotification(null); // Cierra la notificación
    };

    return (
        <>
            <Navbar user={user} setNotification={setNotification} /> {/* Pasa la propiedad user aquí */}
            <main className={styles.main}>
                <form>
                    <label>Get Started!</label>
                    <input type="text" placeholder='Enter an Email' className={montserrat.className} />
                    <input type="password" placeholder='Create a Password' className={montserrat.className} />
                    <button type="submit" className={montserrat.className}>Submit</button>
                    <button type="button" onClick={handleGoogleSignIn} className={montserrat.className}>
                        Sign in with Google
                    </button>
                    <Link href={'/'}>You already have an account? Sign in</Link>
                </form>
            </main>
            <Footer />
            {notification && (
                <Notification 
                    message={notification} 
                    onClose={handleCloseNotification} // Pasar la función onClose
                />
            )}
        </>
    );
}

export default SignUp;