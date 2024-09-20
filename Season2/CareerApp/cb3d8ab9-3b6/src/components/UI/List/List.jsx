import styles from './list.module.css'

export const List = ({ children, className, ...props }) => {
  return (
    <ul className={`${styles.list} ${className}`} {...props}>
      {children}
    </ul>
  )
}