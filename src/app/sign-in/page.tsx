'use client'

import { Montserrat } from 'next/font/google'
import Footer from '../shared/footer/Footer'
import Navbar from '../shared/navbar/Navbar'
import styles from './Sign-in.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Notification from '../shared/notificacion/Notification'
import { useForm } from 'react-hook-form'
import { CreateUser } from '../shared/interfaces/CreateUser.interface'

const montserrat = Montserrat({ subsets: ['latin'] })

const SignIn = () => {
    const {register, handleSubmit} = useForm<CreateUser>()
    const [user, setUser ] = useState<User | null>(null)
    
    const [notification, setNotification] = useState<string | null>(null) // Estado para la notificación
    const router = useRouter()
    const provider = new GoogleAuthProvider()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser ) => {
            if (currentUser ) {
                setUser (currentUser )
                setNotification('Inicio de sesión exitoso') // Establece la notificación de éxito
                setTimeout(() => setNotification(null), 5000) // Oculta la notificación después de 5 segundos
                router.push('/bootcamps')
            }
        })

        return () => unsubscribe()
    }, [router])

    const handleEmailSign = async (data:CreateUser) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setNotification('Inicio de sesión exitoso') // Establece la notificación de éxito
            setTimeout(() => setNotification(null), 5000) // Oculta la notificación después de 5 segundos
            router.push('/bootcamps')
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            setNotification('Error al iniciar sesión. Verifica tus credenciales.') // Establece el mensaje de error
            setTimeout(() => setNotification(null), 5000) // Oculta la notificación después de 5 segundos
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider)
            setNotification('Inicio de sesión exitoso')// Establece la notificación de éxito
            setTimeout(() => setNotification(null), 5000) // Oculta la notificación después de 5 segundos
            router.push('/bootcamps')
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error)
            setNotification('Error al iniciar sesión con Google.') // Establece el mensaje de error
            setTimeout(() => setNotification(null), 5000) // Oculta la notificación después de 5 segundos
        }
    }

    const handleCloseNotification = () => {
        setNotification(null) // Cierra la notificación
    }

    return (
        <>
            <Navbar user={user} setNotification={setNotification} /> {/* Pasa setNotification aquí */}
            <main className={styles.main}>
                <form onSubmit={handleSubmit(handleEmailSign)}>
                    <label>Welcome back!</label>
                    <input
                        type="text"
                        placeholder='Email'
                        className={montserrat.className}
                        {...register('email')}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className={montserrat.className}
                        {...register('password')}
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
    )
}

export default SignIn