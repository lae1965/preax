import { createContext, useState, useEffect } from "react";

const ITEM_ID = "notes-v.0";

export const NotesContext = createContext({ value: [], addNote: () => {} });

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  function addNote(value) {
    const currentNotes = [...notes, value];
    setNotes(currentNotes);
    window.localStorage.setItem(ITEM_ID, JSON.stringify(currentNotes));
  }
  useEffect(() => {
    const n = JSON.parse(window.localStorage.getItem(ITEM_ID));
    if (n) setNotes(n);
  }, [setNotes]);
  return (
    <NotesContext.Provider value={{ value: notes, addNote: addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
