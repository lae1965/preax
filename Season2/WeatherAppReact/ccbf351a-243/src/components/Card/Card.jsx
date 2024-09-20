import styles from './card.module.css'

export const Card = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}