import React, { useState } from 'react';

import styles from './Input.module.css';

const Input = ({
  type = 'text',
  placeholder = 'Поиск',
  inputValue,
  setInputValue,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        className={`${styles.input} ${isInputFocused ? styles.focus : ''}`}
        onChange={handleChange}
        onFocus={() => {
          handleFocus();
        }}
        onBlur={() => {
          handleBlur();
        }}
      />
    </div>
  );
};

export default Input;
