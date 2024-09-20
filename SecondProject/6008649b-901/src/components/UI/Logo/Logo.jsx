import React from 'react';
import LogoSVG from '../../../assets/svg/LogoSVG';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoSvg}>
        <LogoSVG />
      </div>
      <span className={styles.text}>Дневник</span>
    </div>
  );
};

export default Logo;
