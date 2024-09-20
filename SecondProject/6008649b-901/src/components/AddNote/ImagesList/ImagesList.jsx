import React from 'react';
import styles from './ImagesList.module.css';
import notesData from '../../../data';
import ImageItem from './ImagesItem/ImagesItem';

const ImagesList = () => {
  return (
    <div className={styles.imagesList}>
      {notesData.map((item, index) => (
        <ImageItem key={index} imageUrl={item.foto} />
      ))}
    </div>
  );
};

export default ImagesList;
