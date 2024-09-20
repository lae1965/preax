import React from 'react';

import NotesItem from './NotesItem/NotesItem';
import notesData from '../../data';

import styles from './NotesList.module.css';

const NotesList = () => {
  return (
    <main className={styles.main}>
      {notesData.map((note) => (
        <NotesItem key={note.id} note={note} />
      ))}
    </main>
  );
};

export default NotesList;
