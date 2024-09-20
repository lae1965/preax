import React, { useContext } from "react";

import NotesItem from "./NotesItem/NotesItem";

import styles from "./NotesList.module.css";
import { NotesContext } from "src/model/slices/Notes";

const NotesList = () => {
  const { value: notesData } = useContext(NotesContext);
  return (
    <main className={styles.main}>
      {notesData.map((note) => (
        <NotesItem key={note.id} note={note} />
      ))}
    </main>
  );
};

export default NotesList;
