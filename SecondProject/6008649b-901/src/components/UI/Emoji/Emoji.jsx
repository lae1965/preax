import React from 'react';
import styles from './Emoji.module.css';

const Emoji = ({ size, symbol }) => {
  const emojiSizeClass = size === 'big' ? styles.bigEmoji : styles.smallEmoji;
  return <div className={`${styles.commonEmoji} ${emojiSizeClass}`}>{symbol}</div>;
};

export default Emoji;
