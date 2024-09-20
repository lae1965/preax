import { HTMLAttributes } from 'react';
import styles from './logo.module.css';
import Quiz from '../../SVG/Quiz';

interface ILogoProps extends HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <a className={styles.logo} href="/" aria-label="logo">
      <Quiz />
    </a>
  );
};

export default Logo;
