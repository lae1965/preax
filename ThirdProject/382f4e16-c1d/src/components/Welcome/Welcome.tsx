import { HTMLAttributes } from 'react';
import Form from '../Form/Form';
import Logo from '../UI/Logo/Logo';
import styles from './welcome.module.css';
import salyImg from '../../img/saly.png';

interface IWelcomeProps extends HTMLAttributes<HTMLDivElement> {}

const Welcome: React.FC<IWelcomeProps> = () => {
  return (
    <section className={styles.welcome}>
      <Logo />
      <Form />
      <img className={styles.wrapper} src={salyImg} alt="saly" />
    </section>
  );
};

export default Welcome;
