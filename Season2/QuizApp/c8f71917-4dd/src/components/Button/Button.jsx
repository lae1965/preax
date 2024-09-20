import { useContext } from 'react';

import styles from './Button.module.css';
import { ButtonContext } from '../../context/context';
import { Loader } from '../Loader/Loader';

export const Button = ({ type = 'button', ...rest }) => {
  const { buttonText, handleButtonClick, isLoader } = useContext(ButtonContext);

  return (
    <div className={styles.wrapper}>
      <button
        type={type}
        className={styles.button}
        {...rest}
        onClick={isLoader ? () => {} : handleButtonClick}
        data-loading={isLoader ? 'loading' : ''}
      >
        {(isLoader && <Loader />) || buttonText}
      </button>
      <p className={styles.hotKey}>
        или нажми <span>Enter ↵</span>
      </p>
    </div>
  );
};
