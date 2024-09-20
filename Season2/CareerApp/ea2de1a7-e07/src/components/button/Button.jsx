import React from 'react';
import styles from './Button.module.css';
import { clsx } from '@utils/clsx';

const Button = ({ children, className, disabled, onClick }) => {

  return (
    <button className={clsx(styles.baseButton, disabled && styles.disabled, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
