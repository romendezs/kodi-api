'use client' 

import React, { useEffect, useState } from 'react'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Product from './product/Product'
import styles from './Bootcamps.module.css'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Notification from '../shared/notificacion/Notification' // Importa el componente de notificación

const Bootcamps = () => {
    const [user, setUser  ] = useState<User | null>(null)
    const [notification, setNotification] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser  (user) // Guardar el usuario autenticado
            } else {
                setNotification('Necesita iniciar sesión para ver el contenido.') // Establecer notificación
                router.push('/sign-in') // Redirigir a la página de inicio de sesión
            }
        })

        return () => unsubscribe() // Limpia el suscriptor
    }, [router])

    // Función para cerrar la notificación
    const handleCloseNotification = () => {
        setNotification(null) // Cierra la notificación
    }

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
                    <h1 className={styles.title}>Start your career with us, now!</h1>
                    <h2 className={styles.welcome}>Bienvenido a Kodigo, {user.displayName || user.email}!</h2> {/* Mensaje de bienvenida */}
                    <Product name='Full Stack Junior' 
                    description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore esse quia voluptate, hic illo quos in vel recusandae, porro eos, minus eum quam. Dolorum iusto saepe iste atque voluptatibus
                    . Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dolore aperiam quia dignissimos consectetur illum. Commodi adipisci dignissimos doloribus vel odit molestiae officia facere molestias. Ex corporis enim modi quam.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi reprehenderit necessitatibus minus aut aliquid sapiente pariatur, impedit quod officia ipsa distinctio doloremque voluptas incidunt atque magnam dolor ducimus veniam?' />
                </section>
            )}
            <Footer />
        </>
    )
}

export default Bootcamps