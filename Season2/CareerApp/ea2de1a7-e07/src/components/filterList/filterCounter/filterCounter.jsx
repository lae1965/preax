import React from 'react';
import styles from './filterCounter.module.css';

export const FilterCounter = ({ count, shortWidth, className }) => {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      data-hidden={!count}
      data-display-none={!count && shortWidth}
    >
      <span>{count}</span>
    </div>
  );
};
