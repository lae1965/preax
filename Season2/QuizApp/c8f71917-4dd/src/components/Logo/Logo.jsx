import styles from './Logo.module.css';
import { Quiz } from '../Icons/Quiz';

export const Logo = () => (
  <a href='/' className={styles.logo}>
    <Quiz />
  </a>
);
