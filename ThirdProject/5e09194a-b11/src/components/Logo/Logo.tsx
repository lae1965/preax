import { HTMLAttributes, ReactElement } from 'react';
import styles from './Logo.module.css';

import { LogoSvg } from '../Svg/LogoSvg';

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {}

export const Logo = ({}: LogoProps): ReactElement => {
  return (
    <a href="/" aria-label="Logo" className={styles.logo}>
      <LogoSvg />
    </a>
  );
};
