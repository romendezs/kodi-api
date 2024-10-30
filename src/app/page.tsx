import styles from './page.module.css'
import SignIn from './sign-in/Sign-In'

export default function Home() {
  return (
    <div className={styles.page}>
      <SignIn/>
    </div>
  )
}
