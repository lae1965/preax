import { useState, useContext, useEffect } from 'react';

import styles from './Welcome.module.css';
import { Counter } from '../../components/Counter/Counter';
import { Layout } from '../../components/Layout/Layout';
import saly from '../../assets/saly.png';
import { QuizzContext } from '../../context/context';
import { pages } from '../../util/constants';
import { ButtonContext } from '../../context/context';
import { quizzCreate } from '../../util/quizzCreate';
import { useKeydown } from '../../hooks/useKeydown';

export const Welcome = () => {
  const [isLoader, setIsLoader] = useState(false);
  const {
    MAX_QUIZZ_COUNT,
    quizzCount,
    wasInputError,
    setWasInputError,
    setPage,
  } = useContext(QuizzContext);

  const nextPage = () => {
    setIsLoader(true);
    quizzCreate();
    setTimeout(() => {
      setIsLoader(false);
      setPage(pages.QUESTIONS);
    }, 1500);
  };

  useKeydown(() => {
    if (quizzCount >= 1 && quizzCount <= MAX_QUIZZ_COUNT) nextPage();
  }, [quizzCount, MAX_QUIZZ_COUNT, setPage]);

  useEffect(() => {
    const handleClick = () => {
      setWasInputError(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.addEventListener('click', handleClick);
  }, []);

  const handleButtonClick = () => {
    if (wasInputError) {
      setWasInputError(false);
      return;
    }
    nextPage();
  };

  return (
    <ButtonContext.Provider
      value={{ buttonText: 'Начать', isLoader, handleButtonClick }}
    >
      <section className={styles.container}>
        <img src={saly} alt='Saly' className={styles.img} />
        <Layout disabled={quizzCount < 1 || quizzCount > MAX_QUIZZ_COUNT}>
          <h1 className={styles.heading}>Добро пожаловать</h1>
          <p className={styles.toQuiz}>
            на викторину по странам
            <br />и столицам!
          </p>
          <p className={styles.choose}>Выбери количество вопросов:</p>
          <div className={styles.wrapper}>
            <Counter />
          </div>
        </Layout>
      </section>
    </ButtonContext.Provider>
  );
};
