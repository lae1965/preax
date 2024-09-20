/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { ReactComponent as Check } from '../../../assets/svg/Check.svg';
import styles from './ImagesItem.module.css';
import getElementProperty from '../../../utils/getElementProperty';
import { AddNoteContext, IsShowContext } from '../../../utils/context';

const ImagesItem = ({ note, parentRef }) => {
  const [imgStyle, setImageStyle] = useState({});
  const { activeIndex, setActiveIndex } = useContext(AddNoteContext);
  const { setIsShowSelectImageModal } = useContext(IsShowContext);

  useEffect(() => {
    const tmpStyle = {};
    const image = new Image();
    image.src = note.foto;
    image.onload = () => {
      if (!activeIndex || activeIndex === note.id) tmpStyle.opacity = 1;
      else tmpStyle.opacity = 0.5;

      if (image.naturalHeight > image.naturalWidth) {
        const minHeight = getElementProperty(
          parentRef.current.firstChild,
          'min-height'
        );
        let height;
        switch (minHeight) {
          case 220:
            height = 460;
            break;
          case 283:
            height = 606;
            break;
          case 192:
            height = 404;
            break;
          default:
            break;
        }

        tmpStyle.gridRow = 'span 2';
        tmpStyle.height = `${height}px`;
      }
      tmpStyle.backgroundImage = `url(${note.foto})`;
      setImageStyle({ ...tmpStyle });
    };
  }, [activeIndex]);

  const handleClick = (id) => {
    if (id === activeIndex) setActiveIndex(0);
    else setActiveIndex(id);

    setIsShowSelectImageModal(false);
  };

  return (
    <li
      className={styles.figure}
      style={imgStyle}
      onClick={() => handleClick(note.id)}
    >
      {activeIndex === note.id && (
        <div className={styles.selected}>
          <Check />
        </div>
      )}
    </li>
  );
};

export default ImagesItem;
