import React, { useContext } from 'react';
import LogoSVG from '../../../assets/svg/LogoSVG';

import styles from './Logo.module.css';
import { IsShowContext } from '../../../utils/context';

const Logo = () => {
  const { setIsShowAddNote } = useContext(IsShowContext);

  return (
    <button onClick={() => setIsShowAddNote(false)} className={styles.logo}>
      <div className={styles.logoSvg}>
        <LogoSVG />
      </div>
      <span className={styles.text}>Дневник</span>
    </button>
  );
};

export default Logo;
