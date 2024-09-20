import { HTMLAttributes } from 'react';
import styles from './wrap.module.css';
import salyImg from '../../img/saly.png';
import lostImg from '../../img/lost.png';
import Logo from '../UI/Logo/Logo';

interface IWrapProps extends HTMLAttributes<HTMLDivElement> {
  classes?: string[];
  lost?: boolean;
}

const Wrap: React.FC<IWrapProps> = ({ children, classes, lost }) => {
  const cls = classes ? classes.map((item) => styles[item]).join(' ') : '';
  return (
    <section className={styles.root + ' ' + cls}>
      <Logo />
      {children}

      {lost ? (
        <img
          className={`${styles.wrapper} ${styles.lost}`}
          src={lostImg}
          alt="lost"
        />
      ) : (
        <img className={styles.wrapper} src={salyImg} alt="saly" />
      )}
    </section>
  );
};

export default Wrap;
