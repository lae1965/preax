import styles from './button.module.css';
import React from 'react';

export const Button = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={`${styles.button} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);
