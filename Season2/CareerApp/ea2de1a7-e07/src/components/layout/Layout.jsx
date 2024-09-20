import React from 'react';

import { useBurgerStore } from '@store/burgerStore';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { isBurgerOpen } = useBurgerStore();

  return (
    <div className={styles.bg}>
      <Header />
      <div className={styles.wrapper} data-burger-open={isBurgerOpen}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
