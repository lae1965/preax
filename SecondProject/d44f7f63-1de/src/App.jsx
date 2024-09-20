import { useState } from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import NotesList from './components/NotesList/NotesList';
import Header from './components/Header/Header';
import Modal from './components/UI/Modal/Modal';

import { NoteContext } from './utils/context';
import './styles/global.css';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [note, setNote] = useState({});
  return (
    <MainContainer>
      <NoteContext.Provider
        value={{ isShowModal, setIsShowModal, note, setNote }}
      >
        <Header />
        <NotesList />
        {/* <Footer /> */}
        {isShowModal && <Modal />}
      </NoteContext.Provider>
    </MainContainer>
  );
};

export default App;
