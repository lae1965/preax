import { useContext } from 'react';

import styles from './Result.module.css';
import hero from '../../assets/hero.png';
import { Layout } from '../../components/Layout/Layout';
import { endWordCorrect } from '../../util/endWordCorrect';
import { ButtonContext, QuizzContext } from '../../context/context';
import { pages } from '../../util/constants';
import { useKeydown } from '../../hooks/useKeydown';

export const Result = () => {
  const {
    rightCount,
    wrongCount,
    setPage,
    quizzCount,
    setRightCount,
    setWrongCount,
  } = useContext(QuizzContext);

  useKeydown(() => {
    handleButtonClick();
  }, []);

  const handleButtonClick = () => {
    setRightCount(0);
    setWrongCount(0);
    setPage(pages.WELCOME);
  };

  return (
    <ButtonContext.Provider
      value={{ buttonText: 'Попробовать ещё', handleButtonClick }}
    >
      <section>
        <Layout>
          <div className={styles.img}>
            <img src={hero} alt='hero' />
          </div>
          <h1 className={styles.heading}>Результат</h1>
          {(!rightCount && (
            <p className={styles.text}>
              Ты не ответил ни на один вопрос. Попробуй еще!
            </p>
          )) ||
            (rightCount >= quizzCount && (
              <p className={styles.text}>
                Ты ответил правильно на все вопросы. Так держать!
              </p>
            )) || (
              <p className={styles.text}>
                Ты ответил правильно
                <br />
                на <span className={styles.green}>{rightCount}</span>{' '}
                {endWordCorrect(rightCount, 'question')} и сделал{' '}
                <span className={styles.orange}>{wrongCount}</span>{' '}
                {endWordCorrect(wrongCount, 'mistake')}.
              </p>
            )}
        </Layout>
      </section>
    </ButtonContext.Provider>
  );
};
