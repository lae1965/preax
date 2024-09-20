import React, { useState } from 'react';
import styles from './NotesItem.module.css';
import convertDate from '../../../utils/convertDate';
import Emoji from '../../UI/Emoji/Emoji';
import { createPortal } from 'react-dom';
import Modal from '../../UI/Modal/Modal';

const NotesItem = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <article
        className={styles.noteItem}
        onClick={handleClick}
        style={{ backgroundImage: `url(${note.foto})` }}
      >
        <div className={styles.textBlock}>
          <div className={styles.header}>
            <h3 className={styles.title}>{note.title}</h3>
            <p className={styles.date}>{convertDate(note.date, 'short')}</p>
          </div>
          <p className={styles.content}>{note.note}</p>
        </div>
        <div className={styles.emoji}>
          <Emoji size='small' symbol={note.emoji} />
        </div>
      </article>
      {isOpen &&
        createPortal(
          <Modal setIsOpen={setIsOpen} note={note} />,
          document.getElementById('modal')
        )}
    </>
  );
};

export default NotesItem;
