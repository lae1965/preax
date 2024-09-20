import React, { useRef } from 'react';

import styles from './ImagesList.module.css';
import notesData from '../../data';
import ImagesItem from './ImagesItem/ImagesItem';

const ImagesList = () => {
  const ref = useRef(null);

  return (
    <ul className={styles.list} ref={ref}>
      {notesData.slice(0, 5).map((note) => (
        <ImagesItem key={note.id} note={note} parentRef={ref} />
      ))}
    </ul>
  );
};

export default ImagesList;
