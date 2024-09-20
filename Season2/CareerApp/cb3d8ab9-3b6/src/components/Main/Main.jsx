import styles from './main.module.css'

export const Main = ({ children, className, ...props }) => {
  return (
    <main className={`${styles.main} ${className}`} {...props}>
      {children}
    </main>
  )
}
