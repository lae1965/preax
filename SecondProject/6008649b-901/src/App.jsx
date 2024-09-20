import { useState } from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import NotesList from './components/NotesList/NotesList';
import Header from './components/Header/Header';

import { NoteContext } from './utils/context';
import './styles/global.css';
// import {documentHeightFix} from "./utils/mobileHeight";

// documentHeightFix();

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
      </NoteContext.Provider>
    </MainContainer>
  );
};

export default App;
