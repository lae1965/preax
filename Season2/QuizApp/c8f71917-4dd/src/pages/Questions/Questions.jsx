import { useContext, useEffect, useState } from 'react';

import styles from './Questions.module.css';
import { Layout } from '../../components/Layout/Layout';
import { Close } from '../../components/Icons/Close';
import {
  answersCreate,
  questionsCreate,
  removeCountryFromArray,
} from '../../util/quizzCreate';
import { QuestionContext, QuizzContext } from '../../context/context';
import { Answer } from '../../components/Answer/Answer';
import { pages } from '../../util/constants';
import { ButtonContext } from '../../context/context';
import { statusQuizz } from '../../util/constants';
import { useKeydown } from '../../hooks/useKeydown';

export const Questions = () => {
  const {
    quizzCount,
    setPage,
    rightCount,
    wrongCount,
    setRightCount,
    setWrongCount,
  } = useContext(QuizzContext);
  const [isLoader, setIsLoader] = useState(false);
  const [quizzList, setQuizzList] = useState([]);
  const [quizzNumber, setQuizzNumber] = useState();
  const [answers, setAnswers] = useState({});
  const [quizzStatus, setQuizzStatus] = useState(statusQuizz.SELECTING);
  const [buttonText, setButtonText] = useState('Ответить');
  const [choiceNumber, setChoiceNumber] = useState();

  const preloader = (cb) => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      cb();
    }, 1500);
  };

  useEffect(() => {
    setQuizzList(questionsCreate(quizzCount));
    setQuizzNumber(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!quizzList.length || quizzNumber === undefined) return;
    setAnswers(answersCreate(quizzList[quizzNumber].correctAnswer));
  }, [quizzList, quizzNumber]);

  const handleClose = () => {
    setRightCount(0);
    setWrongCount(0);
    setPage(pages.WELCOME);
  };

  const handleBackspace = () => {
    if (quizzStatus === statusQuizz.IS_SELECTED)
      setQuizzStatus(statusQuizz.SELECTING);
  };

  const handleButtonClick = () => {
    switch (quizzStatus) {
      case statusQuizz.SELECTING:
        break;
      case statusQuizz.IS_SELECTED:
        preloader(() => {
          setQuizzStatus(statusQuizz.SELECTING);
          if (choiceNumber === answers.rightAnswerNumber)
            setRightCount(rightCount + 1);
          else setWrongCount(wrongCount + 1);
          if (quizzNumber + 1 < quizzCount) {
            setButtonText('Дальше');
            setQuizzStatus(statusQuizz.CHECKING);
          } else {
            setQuizzStatus(statusQuizz.TO_RESULT);
            setButtonText('Результат');
          }
        });
        break;
      case statusQuizz.CHECKING:
        removeCountryFromArray(quizzList[quizzNumber].correctAnswer);
        setQuizzNumber(quizzNumber + 1);
        setQuizzStatus(statusQuizz.SELECTING);
        setButtonText('Ответить');
        break;
      case statusQuizz.TO_RESULT:
        preloader(() => {
          setPage(pages.RESULT);
        });
        break;
    }
  };

  useKeydown(handleButtonClick, null, handleBackspace, [quizzStatus]);

  return (
    <QuestionContext.Provider
      value={{ quizzStatus, choiceNumber, setQuizzStatus, setChoiceNumber }}
    >
      <ButtonContext.Provider
        value={{ buttonText, isLoader, handleButtonClick }}
      >
        <section className={styles.container}>
          <div className={styles.close} onClick={handleClose}>
            <Close />
          </div>
          <Layout
            justifyButton='flex-start'
            disabled={quizzStatus === statusQuizz.SELECTING}
          >
            <img
              src={quizzList[quizzNumber]?.flag}
              alt='flag'
              className={styles.img}
            />
            <p className={styles.question}>
              {quizzList[quizzNumber]?.question}
            </p>
            <Answer answers={answers} isLoader={isLoader} />
          </Layout>
          <span className={styles.number}>
            {quizzNumber + 1} / {quizzCount}
          </span>
        </section>
      </ButtonContext.Provider>
    </QuestionContext.Provider>
  );
};
