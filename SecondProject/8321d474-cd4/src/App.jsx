import { useEffect, useState } from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import NotesList from './components/NotesList/NotesList';
import Header from './components/Header/Header';
import AddNote from './components/AddNote/AddNote';
import ModalSelectImage from './components/UI/ModalSelectImage/ModalSelectImage';

import './styles/global.css';
import { NoteContext, AddNoteContext, IsShowContext } from './utils/context';
import { documentHeightFix } from './utils/mobileHeight';
import notesData from './data';

documentHeightFix();

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowAddNote, setIsShowAddNote] = useState(false);
  const [isShowSelectImageModal, setIsShowSelectImageModal] = useState(false);
  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem('notesList103562967')) || notesData
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [emoji, setEmoji] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('notesList103562967', JSON.stringify(notesList));
  }, [notesList]);

  return (
    <NoteContext.Provider
      value={{
        isShowModal,
        setIsShowModal,
        notesList,
        setNotesList,
      }}
    >
      <AddNoteContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          title,
          setTitle,
          emoji,
          setEmoji,
          date,
          setDate,
          text,
          setText,
        }}
      >
        <IsShowContext.Provider
          value={{
            setIsShowAddNote,
            isShowSelectImageModal,
            setIsShowSelectImageModal,
          }}
        >
          {!isShowAddNote ? (
            <MainContainer>
              <Header setIsShowAddNote={setIsShowAddNote} />
              <NotesList />
            </MainContainer>
          ) : (
            <>
              <AddNote />
              <ModalSelectImage />
            </>
          )}
        </IsShowContext.Provider>
      </AddNoteContext.Provider>
    </NoteContext.Provider>
  );
};

export default App;
