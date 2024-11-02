// src/app/sign-in/page.tsx
"use client"; // Asegúrate de que sea un Componente Cliente

import { Montserrat } from 'next/font/google';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';
import styles from './Sign-in.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '../firebases'; 
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Notification from '../shared/notificacion/Notification'; // Importa el componente de notificación

const montserrat = Montserrat({ subsets: ['latin'] });

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser ] = useState<User | null>(null);
    const [notification, setNotification] = useState<string | null>(null); // Estado para la notificación
    const router = useRouter();
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser ) => {
            if (currentUser ) {
                setUser (currentUser );
                setNotification("Inicio de sesión exitoso"); // Establece la notificación de éxito
                setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
                router.push('/bootcamps');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setNotification("Inicio de sesión exitoso"); // Establece la notificación de éxito
            setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
            router.push('/bootcamps');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setNotification("Error al iniciar sesión. Verifica tus credenciales."); // Establece el mensaje de error
            setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            setNotification("Inicio de sesión exitoso"); // Establece la notificación de éxito
            setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
            router.push('/bootcamps');
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
            setNotification("Error al iniciar sesión con Google."); // Establece el mensaje de error
            setTimeout(() => setNotification(null), 5000); // Oculta la notificación después de 5 segundos
        }
    };

    const handleCloseNotification = () => {
        setNotification(null); // Cierra la notificación
    };

    return (
        <>
            <Navbar user={user} setNotification={setNotification} /> {/* Pasa setNotification aquí */}
            <main className={styles.main}>
                <form onSubmit={handleSubmit}>
                    <label>Welcome back!</label>
                    <input
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={montserrat.className}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={montserrat.className}
                    />
                    <button type="submit" className={montserrat.className}>Submit</button>
                    <button type="button" onClick={handleGoogleSignIn} className={montserrat.className}>
                        Sign in with Google
                    </button>
                    <Link href={'/sign-up'}>You don&apos;t have an account? Create one</Link>
                </form>
            </main>
            <Footer />
            {notification && (
                <Notification 
                    message={notification} 
                    onClose={handleCloseNotification} 
                />
            )}
        </>
    );
};

export default SignIn;