import React, { useContext } from 'react';

import styles from './ModalSelectImage.module.css';
import SelectionImg from '../../AddNote/SelectionImg/SelectionImg';
import { IsShowContext } from '../../../utils/context';

const ModalSelectImage = () => {
  const { isShowSelectImageModal, setIsShowSelectImageModal } =
    useContext(IsShowContext);
  const handleClose = (e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      setIsShowSelectImageModal(false);
    }
  };

  return (
    <>
      {isShowSelectImageModal ? (
        <section
          className={`${styles.wrapper} ${
            isShowSelectImageModal ? styles.wrapperActive : ''
          }`}
          onClick={handleClose}
        >
          <div className={styles.modal}>
            <SelectionImg />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ModalSelectImage;
