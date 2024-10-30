import { Montserrat } from 'next/font/google'
import Footer from '../shared/footer/Footer'
import Navbar from '../shared/navbar/Navbar'
import styles from './Sign-in.module.css'
import Link from 'next/link'

const montserrat = Montserrat(
    {
      subsets: ['latin'],
    }
  )

const SignIn = () => {
    return (
        <>

            <Navbar />

            <main className={styles.main}>

                <form>
                    <label>Welcome back!</label>
                    <input type="text" placeholder='Email' className={montserrat.className} />
                    <input type="password" placeholder='Password' className={montserrat.className}/>
                    <button type="submit" className={montserrat.className}>Submit</button>

                    <Link href={'/sign-up'}>You don&apos;t have an account? Create one</Link>
                </form>
            </main>


            <Footer />
        </>
    )
}

export default SignIn