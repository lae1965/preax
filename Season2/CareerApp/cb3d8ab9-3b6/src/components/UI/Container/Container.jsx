import styles from './container.module.css'

export const Container = ({ children, className, props }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}