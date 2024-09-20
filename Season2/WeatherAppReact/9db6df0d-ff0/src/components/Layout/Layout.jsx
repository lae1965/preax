import styles from './layout.module.css';

export const Layout = ({ overflow, children }) => {
  return <div className={`${styles.layout} ${overflow ? styles.overflow : ''}`}>{children}</div>;
};
