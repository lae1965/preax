import React from 'react';

import styles from './NotesList.module.css';
import { notes } from '../../utils/notes';
import { NoteItem } from '../../entities/NotesItem/NoteItem';

export function NotesList() {
  return (
    <section className={styles.list}>
      {notes.map((item) => (
        <NoteItem item={item} key={item.id} />
      ))}
    </section>
  );
}
