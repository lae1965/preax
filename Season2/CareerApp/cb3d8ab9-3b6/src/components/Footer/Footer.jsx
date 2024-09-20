import { Container, Link } from '../UI'

import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <span className={styles.text}>Проект выполнен в рамках стажировки <Link href={'https://preax.ru/'} className={styles.link}>PREAX</Link></span>
      </Container>
    </footer>
  )
}