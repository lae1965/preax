import styles from './Layout.module.css';
import { Logo } from '../Logo/Logo';
import { Card } from '../Card/Card';

export const Layout = ({ children, justufyButton, ...rest }) => {
  return (
    <div className={styles.layout}>
      <Logo />
      <Card justifyButton={justufyButton} {...rest}>
        {children}
      </Card>
      <footer className={styles.footer}>
        Проект выполнен в рамках стажировки{' '}
        <a href='https://preax.ru' target='_blank'>
          PREAX
        </a>
      </footer>
    </div>
  );
};
