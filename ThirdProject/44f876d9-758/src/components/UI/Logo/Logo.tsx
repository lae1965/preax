import { HTMLAttributes } from 'react';
import styles from './logo.module.css';
import Quiz from '../../SVG/Quiz';
import { Link } from 'react-router-dom';

interface ILogoProps extends HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <Link to={'/'}>
      <span className={styles.logo} aria-label="logo">
        <Quiz />
      </span>
    </Link>
  );
};

export default Logo;
