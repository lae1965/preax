import React from 'react';

import { notes } from '../../util/constants';
import style from './NotesList.module.css';
import { NotesItem } from '../NotesItem';
console.log(
  new Date(
    'Tue Aug 01 2023 10:36:39 GMT+0300 (Москва, стандартное время)'
  ).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
  })
);

const NotesList = () => {
  return (
    <main className={style.nodeList}>
      {notes.map((note) => (
        <NotesItem key={note.id} note={note} />
      ))}
    </main>
  );
};

export default NotesList;
