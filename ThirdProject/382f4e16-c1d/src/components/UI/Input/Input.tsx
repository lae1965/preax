import React, { HTMLAttributes } from 'react';
import styles from './input.module.css';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  label?: string;
  description?: string;
}

const Input: React.FC<IInputProps> = ({
  type,
  name = '',
  label = '',
  description,
}) => {
  return (
    <div>
      <label className={styles.label}>
        {label}
        <input type={type} name={name} className={styles.input} required />
      </label>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Input;
