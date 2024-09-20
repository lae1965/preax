import styles from './listItem.module.css';
import React from 'react';

export const ListItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <li className={`${styles.item} ${className}`} ref={ref} {...props}>
        {children}
      </li>
    );
  }
);
