import React, { useRef, useState } from 'react';

import styles from './Modal.module.css';
import { normalizeDate } from '../../util/normalizeDate';
import { Emoji } from '../Emoji';

export const Modal = ({ note, setIsOpen }) => {
  const closeRef = useRef(null);
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const close = () => {
    setIsClosing(true);
    modalRef.current.addEventListener('animationend', () => {
      setIsOpen(false);
    });
  };
  const clickHandler = (ev) => {
    if (ev.target === closeRef.current) {
      close();
    }
  };

  return (
    <div
      className={`${styles.modal} ${isClosing ? styles.hidingBackground : ''}`}
      onClick={clickHandler}
      ref={modalRef}
    >
      <div className={`${styles.modalScrollContainer} `} ref={closeRef}>
        <article
          className={`${styles.container} ${
            isClosing ? styles.hidingContainer : ''
          }`}
        >
          <button onClick={close} className={styles.close}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M6.22517 4.81108C5.83465 4.42056 5.20148 4.42056 4.81096 4.81108C4.42044 5.20161 4.42044 5.83477 4.81096 6.2253L10.5857 12L4.81102 17.7747C4.4205 18.1652 4.42049 18.7984 4.81102 19.1889C5.20154 19.5794 5.83471 19.5794 6.22523 19.1889L11.9999 13.4142L17.7746 19.1889C18.1651 19.5794 18.7983 19.5794 19.1888 19.1889C19.5793 18.7984 19.5793 18.1652 19.1888 17.7747L13.4141 12L19.1889 6.2253C19.5794 5.83477 19.5794 5.20161 19.1889 4.81108C18.7983 4.42056 18.1652 4.42056 17.7746 4.81108L11.9999 10.5858L6.22517 4.81108Z'
                fill='black'
              />
            </svg>
          </button>
          <div className={styles.header}>
            <h2 className={styles.title}>{note.title}</h2>
          </div>
          <div className={`${styles.content} ${styles.clearfix}`}>
            <img src={note.foto} className={styles.image} alt={note.title} />
            <p className={styles.date}>{normalizeDate(note.date, true)}</p>
            <p className={styles.text}>{note.note}</p>
            <div className={styles.emoji}>
              <Emoji emoji={note.emoji} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
