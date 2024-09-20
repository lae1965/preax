import React, { useState } from 'react';
import styles from './Textarea.module.css';

const MIN_HEIGHT = 400;

const Textarea = () => {
  const [value, setValue] = useState('');
  const [areaHeight, setAreaHeight] = useState(MIN_HEIGHT);

  const handleChange = (e) => {
    setValue(e.target.value);
    const padding = +window
      .getComputedStyle(e.target)
      .getPropertyValue('padding')
      .split('px')[0];
    const lineHeight = +window
      .getComputedStyle(e.target)
      .getPropertyValue('line-height')
      .split('px')[0];

    setAreaHeight(
      Math.floor((e.target.scrollHeight - 2 * padding) / lineHeight) *
        lineHeight +
        2 * padding -
        1
    );
  };
  return (
    <textarea
      style={{
        height: `${areaHeight}px`,
        minHeight: `${MIN_HEIGHT}px`,
      }}
      className={styles.textarea}
      placeholder='Описание'
      value={value}
      onChange={handleChange}
    ></textarea>
  );
};

export default Textarea;
