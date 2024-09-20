import styles from './Logo.module.css';
import { Logo as LogoSVG } from '../SVG/Logo';
import { LogoSmall as LogoSmallSVG } from '../SVG/LogoSmall';

export const Logo = () => {
  return (
    <a href='/'>
      <div className={styles.logoBig}>
        <LogoSVG />
      </div>
      <div className={styles.logoSmall}>
        <LogoSmallSVG />
      </div>
    </a>
  );
};
