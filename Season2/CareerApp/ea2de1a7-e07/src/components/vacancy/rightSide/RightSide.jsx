import styles from './RightSide.module.css';

import { clsx } from '@utils/clsx';

const RightSide = ({ vacancy }) => {
  return (
    <aside className={clsx(styles.block, styles.rightSide)}>
      {vacancy.logoURL && (
        <img src={vacancy.logoURL} alt='logo' className={styles.logo} />
      )}
      <p className={styles.employerName}>{vacancy.employerName}</p>
      <p className={styles.address}>{vacancy.address}</p>
    </aside>
  );
};

export default RightSide;
