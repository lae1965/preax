import { useState } from 'react';
import { dataBar } from '../../constants';
import { List, ListItem } from '../UI';

import styles from './navBar.module.css';

export const NavBar = ({ className }) => {
  const [activeNav, setActiveNav] = useState('vacancy');

  return (
    <nav className={`${styles.nav} ${className}`}>
      <List className={styles.list}>
        {dataBar.map((nav) => {
          return (
            <ListItem
              key={nav.id}
              className={`${styles.item} ${
                nav.navPage === activeNav ? styles.active : ''
              }`}
              onClick={() => {
                setActiveNav(nav.navPage);
              }}
            >
              {nav.value}
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
