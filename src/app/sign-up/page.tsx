import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import styles from './Sign-up.module.css'

const montserrat = Montserrat(
    {
      subsets: ['latin'],
    }
  )


const SignUp = () => {
  return (
    <>

            <Navbar />

            <main className={styles.main}>

                <form>
                    <label>Get Started!</label>
                    <input type="text" placeholder='Enter an Email' className={montserrat.className} />
                    <input type="password" placeholder='Create a Password' className={montserrat.className}/>
                    <button type="submit" className={montserrat.className}>Submit</button>

                    <Link href={'/'}>You already have an account? Sign in</Link>
                </form>
            </main>


            <Footer />
        </>
  )
}

export default SignUp