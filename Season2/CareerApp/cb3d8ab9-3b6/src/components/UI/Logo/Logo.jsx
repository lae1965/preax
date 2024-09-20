import { Link } from '../'
import styles from './logo.module.css'

export const Logo = ({ className }) => {
  return (
    <Link target={'_parent'} className={`${styles.link} ${className}`}>
      <span className={styles.logo}>Career</span><span className={`${styles.logo} ${styles.primary}`}>App</span>
    </Link>
  )
}