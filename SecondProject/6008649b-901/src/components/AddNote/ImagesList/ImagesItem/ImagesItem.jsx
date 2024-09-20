import React from 'react';
import styles from './ImagesItem.module.css';

const ImageItem = ({ imageUrl }) => {
  return (
    <div
      className={styles.imageItem}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default ImageItem;
