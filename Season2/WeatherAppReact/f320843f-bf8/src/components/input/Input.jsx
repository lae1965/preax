import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { Icon } from '../icon/Icon';
import { getWeather } from '../../api/getWeather';

const Input = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) getWeather(value);
    setValue('');
  };

  const handleClick = () => {
    setValue('');
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    if (/^[А-ЯЁЙа-яёй0-9]*$/.test(e.target.value)) setValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type='text'
        className={styles.input}
        name='city'
        value={value}
        onChange={handleChange}
        placeholder='Поиск по городу'
      />
      <button className={styles.button} type='button' onClick={handleClick}>
        <Icon name={value ? 'clear' : 'search'} />
      </button>
    </form>
  );
};

export default Input;
