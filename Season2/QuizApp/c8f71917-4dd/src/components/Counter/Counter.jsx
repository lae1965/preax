import { useContext } from 'react';

import { QuizzContext } from '../../context/context';
import { Minus } from '../Icons/Minus';
import { Plus } from '../Icons/Plus';
import styles from './Counter.module.css';

export const Counter = () => {
  const {
    MAX_QUIZZ_COUNT,
    quizzCount,
    setQuizzCount,
    wasInputError,
    setWasInputError,
  } = useContext(QuizzContext);

  const handleInput = (e) => {
    setQuizzCount(+e.target.value);
  };

  const handleBlur = () => {
    let value = quizzCount;
    if (value < 1) value = 1;
    else if (value > MAX_QUIZZ_COUNT) value = MAX_QUIZZ_COUNT;
    if (value !== quizzCount) setWasInputError(true);
    setQuizzCount(value);
  };

  const handleMinus = () => {
    if (wasInputError) setWasInputError(false);
    else if (quizzCount > 1) setQuizzCount(quizzCount - 1);
  };

  const handlePlus = () => {
    if (wasInputError) setWasInputError(false);
    else if (quizzCount < MAX_QUIZZ_COUNT) setQuizzCount(quizzCount + 1);
  };

  return (
    <div className={styles.counter}>
      <button
        type='button'
        className={styles.changer}
        tabIndex={0}
        disabled={quizzCount <= 1}
        onClick={handleMinus}
      >
        <Minus />
      </button>
      <input
        className={styles.countValue}
        type='number'
        value={quizzCount}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      <button
        type='button'
        className={styles.changer}
        tabIndex={0}
        disabled={quizzCount >= MAX_QUIZZ_COUNT}
        onClick={handlePlus}
      >
        <Plus />
      </button>
    </div>
  );
};
