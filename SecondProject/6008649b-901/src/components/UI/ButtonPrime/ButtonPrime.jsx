import styles from './ButtonPrime.module.css';
import Icon from '../Icon/Icon';

const ButtonPrime = ({
  iconName,
  text,
  isTextAlways,
  onClick = (e) => {
    e.preventDefault();
  },
}) => {
  return (
    <button
      className={`${styles.button} ${isTextAlways ? '' : styles.shortButton}`}
      aria-label={'Logo button'}
      onClick={onClick}
    >
      {iconName && <Icon name={iconName} />}
      {text && <span className={isTextAlways ? '' : styles.text}>{text}</span>}
    </button>
  );
};

export default ButtonPrime;
