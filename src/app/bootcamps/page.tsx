// src/app/bootcamps/page.tsx
"use client"; // Asegúrate de que esto esté presente

import React, { useEffect, useState } from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import Product from './product/Product';
import styles from './Bootcamps.module.css';
import { auth } from '../firebases'; 
import { onAuthStateChanged, User } from 'firebase/auth'; 
import { useRouter } from 'next/navigation'; 
import Notification from '../shared/notificacion/Notification'; // Importa el componente de notificación

const Bootcamps = () => {
    const [user, setUser  ] = useState<User | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser  (user); // Guardar el usuario autenticado
            } else {
                setNotification('Necesita iniciar sesión para ver el contenido.'); // Establecer notificación
                router.push('/sign-in'); // Redirigir a la página de inicio de sesión
            }
        });

        return () => unsubscribe(); // Limpia el suscriptor
    }, [router]);

    // Función para cerrar la notificación
    const handleCloseNotification = () => {
        setNotification(null); // Cierra la notificación
    };

    return (
        <>
            <Navbar user={user} setNotification={setNotification} /> {/* Pasar la función de notificación */}
            {notification && (
                <Notification 
                    message={notification} 
                    onClose={handleCloseNotification} // Pasar la función onClose
                />
            )}
            {user && (
                <section className={styles.container}>
                    <h1>Start your career with us, now!</h1>
                    <h2>Bienvenido a Kodigo, {user.displayName || user.email}!</h2> {/* Mensaje de bienvenida */}
                    <Product name='Full Stack Junior' description='...' />
                    {/* Otros productos */}
                </section>
            )}
            <Footer />
        </>
    );
};

export default Bootcamps;