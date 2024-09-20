import styles from './link.module.css'

export const Link = ({ href, className, target, children, ...props }) => {
  return (
    <a
      href={href ?? '/'}
      className={`${styles.link} ${className ?? ''}`}
      target={target ?? '_blank'}
      {...props}
    >
      {children}
    </a>
  )
}