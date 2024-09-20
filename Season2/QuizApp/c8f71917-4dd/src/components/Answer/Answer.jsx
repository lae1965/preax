import { useContext } from 'react';

import styles from './Answer.module.css';
import { RadioButton } from '../RadioButton/RadioButton';
import { QuestionContext } from '../../context/context';
import { statusQuizz } from '../../util/constants';
import { useKeydown } from '../../hooks/useKeydown';

export const Answer = ({ answers, isLoader }) => {
  const { quizzStatus, choiceNumber, setQuizzStatus, setChoiceNumber } =
    useContext(QuestionContext);

  const getStatus = (answerNumber) => {
    if (quizzStatus === statusQuizz.SELECTING) return 'none';
    if (quizzStatus === statusQuizz.IS_SELECTED) {
      if (choiceNumber === answerNumber) return 'choiced';
      return 'none';
    }
    if (answers.rightAnswerNumber === answerNumber) return 'right';
    if (choiceNumber === answerNumber) return 'wrong';
    return 'unhovered';
  };

  const handleChoice = (selectNumber) => {
    if (quizzStatus < statusQuizz.CHECKING && !isLoader) {
      setChoiceNumber(selectNumber);
      setQuizzStatus(statusQuizz.IS_SELECTED);
    }
  };

  useKeydown(null, handleChoice, null, [quizzStatus]);

  return (
    <div className={styles.answers}>
      {answers.answers?.map((answer) => (
        <RadioButton
          key={answer.number}
          answer={answer}
          handleChoice={handleChoice}
          status={getStatus(answer.number)}
        />
      ))}
    </div>
  );
};
