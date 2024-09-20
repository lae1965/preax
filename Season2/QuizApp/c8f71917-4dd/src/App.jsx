import { useRef, useState } from 'react';
import './App.css';
import { Welcome } from './pages/Welcome/Welcome';
import { Questions } from './pages/Questions/Questions';
import { Result } from './pages/Results/Result';
import jsonData from './util/quizz_questions.json';
import { pages } from './util/constants';
import { QuizzContext } from './context/context.js';

function App() {
  const MAX_QUIZZ_COUNT = useRef(jsonData.questions.length);
  const [quizzCount, setQuizzCount] = useState(1);
  const [page, setPage] = useState(pages.WELCOME);
  const [wasInputError, setWasInputError] = useState(false);
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  return (
    <QuizzContext.Provider
      value={{
        MAX_QUIZZ_COUNT: MAX_QUIZZ_COUNT.current,
        quizzCount,
        wasInputError,
        rightCount,
        wrongCount,
        page,
        setQuizzCount,
        setWasInputError,
        setRightCount,
        setWrongCount,
        setPage,
      }}
    >
      {(page === pages.WELCOME && <Welcome />) ||
        (page === pages.QUESTIONS && <Questions />) ||
        (page === pages.RESULT && <Result />)}
    </QuizzContext.Provider>
  );
}

export default App;
