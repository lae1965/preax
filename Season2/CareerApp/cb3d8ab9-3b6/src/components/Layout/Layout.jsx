import styles from './layout.module.css'

export const Layout = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.layout} ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}