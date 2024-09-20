import styles from './header.module.css';
import { Logo } from '../UI';
import { WeatherSearch } from '../';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <WeatherSearch />
    </header>
  );
};
