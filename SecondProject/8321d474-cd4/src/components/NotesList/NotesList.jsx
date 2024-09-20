import React, { useContext } from 'react';

import NotesItem from './NotesItem/NotesItem';

import styles from './NotesList.module.css';
import { NoteContext } from '../../utils/context';

const NotesList = () => {
  const { notesList } = useContext(NoteContext);

  return (
    <main className={styles.main}>
      {notesList.map((note) => (
        <NotesItem key={note.id} note={note} />
      ))}
    </main>
  );
};

export default NotesList;
