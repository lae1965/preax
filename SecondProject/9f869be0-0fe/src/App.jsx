import MainContainer from "./components/MainContainer/MainContainer";
import NotesList from "./components/NotesList/NotesList";
import Header from "./components/Header/Header";
import "./styles/global.css";
import { Context } from "./model/store";

const App = () => {
  return (
    <MainContainer>
      <Context>
        <Header />
        <NotesList />
      </Context>
    </MainContainer>
  );
};

export default App;
