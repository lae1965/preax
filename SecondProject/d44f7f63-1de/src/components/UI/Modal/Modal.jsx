import React, { useContext, useEffect, useState } from 'react';

import Exit from '../../../assets/svg/Exit';

import styles from './Modal.module.css';

import convertDate from '../../../utils/convertDate';
import { NoteContext } from '../../../utils/context';

const Modal = () => {
  const [isActive, setIsActive] = useState(false);
  const { note, setIsShowModal } = useContext(NoteContext);

  const closeModal = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsShowModal(false);
    }, 500);
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (e.target.classList.contains(styles.modal)) closeModal();
    };
    setIsActive(true);
    window.addEventListener('click', handleCloseModal);
    return () => window.removeEventListener('click', handleCloseModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`${styles.modal} ${isActive ? styles.modalActive : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{note.title}</h2>
          <span className={styles.emoji}>{note.emoji}</span>
          <button className={styles.exit} onClick={closeModal}>
            <Exit />
          </button>
        </div>
        <article className={styles.article}>
          <div>
            <p className={styles.date}>{convertDate(note.date)}</p>
            <p className={styles.text}>{note.note}</p>
          </div>
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${note.foto})` }}
          ></div>
        </article>
      </div>
    </section>
  );
};

export default Modal;
