import styles from './Logo.module.css';

import { LogoSVG } from '../Icons/LogoSVG';
import { usePage } from '../../hooks/usePage';

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Logo: React.FC<LogoProps> = () => {
  const { setPage } = usePage();

  return (
    <a
      href='/'
      className={styles.logo}
      onClick={() => {
        setPage('main');
      }}
    >
      <div className={styles.logoWrapper}>
        <LogoSVG />
      </div>
      <p className={styles.text}>DreamTime</p>
    </a>
  );
};
