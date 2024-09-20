import { Close } from '../Icons/Close';
import { Right } from '../Icons/Right';
import styles from './RadioButton.module.css';

export const RadioButton = ({ answer, status, handleChoice }) => {
  return (
    <button
      type='button'
      className={styles.answer}
      data-status={status}
      onClick={() => {
        handleChoice(answer.number);
      }}
    >
      <span>{answer.number + 1}</span>
      <span>{answer.text}</span>
      {(status === 'right' && <Right />) || (status === 'wrong' && <Close />)}
    </button>
  );
};
