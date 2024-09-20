import { useEffect, useState } from 'react';
import styles from './Image.module.css';

import { DefaultImage } from '../Icons/DefaultImage';
import { Modal } from '../Modal/Modal';
import { CheckImage } from '../CheckImage/CheckImage';
import { useImage } from '../../hooks/useImage';
import { ClearText } from '../Icons/ClearText';

export const Image: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setImageList, choicedUrl, setChoicedUrl, setSearchValue } =
    useImage();

  useEffect(() => {
    document.body.style.overflowY = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  const handlePressDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsOpenModal(true);
    e.stopPropagation();
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setChoicedUrl('');
    setSearchValue('');
    setImageList(null);
  };
  return (
    <>
      <div
        className={styles.image}
        tabIndex={0}
        onClick={handlePressDown}
        data-default={!choicedUrl}
        style={{
          backgroundImage: `url(${
            choicedUrl ? choicedUrl : '/img/default.png'
          })`,
        }}
      >
        {(!!choicedUrl && (
          <button className={styles.clearImage} onClick={handleClear}>
            <ClearText />
          </button>
        )) || <DefaultImage className={styles.icon} />}
      </div>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <CheckImage setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </>
  );
};
