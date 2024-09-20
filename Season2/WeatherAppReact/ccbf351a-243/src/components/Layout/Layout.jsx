import styles from './layout.module.css';

export const Layout = ({ children, className }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  )
};