import React, { useContext } from 'react';
import styles from './NotesItem.module.css';
import convertDate from '../../../utils/convertDate';
import { NoteContext } from '../../../utils/context';

const NotesItem = ({ note }) => {
  const { setNote, setIsShowModal } = useContext(NoteContext);

  const handleClick = () => {
    setNote(note);
    setIsShowModal(true);
  };

  return (
    <div className={styles.noteItem} onClick={handleClick}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${note.foto})` }}
      >
        <div className={styles.emoji}>{note.emoji}</div>
        <div className={styles.textBlock}>
          <div className={styles.header}>
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.date}>{convertDate(note.date)}</p>
          </div>
          <p className={styles.content}>{note.note}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
