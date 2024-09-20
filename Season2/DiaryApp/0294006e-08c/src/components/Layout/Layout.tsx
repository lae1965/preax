import styles from './Layout.module.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};
