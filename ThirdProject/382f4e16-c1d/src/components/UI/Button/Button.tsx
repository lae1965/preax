import { HTMLAttributes } from 'react';
import styles from './button.module.css';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({ type = 'button', text }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
