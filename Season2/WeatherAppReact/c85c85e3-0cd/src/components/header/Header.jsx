import Logo from '../logo/Logo';
import Input from '../input/Input';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <Input />
    </header>
  );
}

export default Header;
