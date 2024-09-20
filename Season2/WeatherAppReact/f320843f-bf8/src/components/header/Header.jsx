import styles from './styles.module.css';
import Logo from '../logo/Logo';
import Input from '../input/Input';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Input />
    </header>
  );
};

export default Header;
