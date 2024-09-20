import styles from './styles.module.css';
import { Icon } from '../../Icon/Icon';

export const Button = ({ direction, disabled, onClick }) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onClick}>
      <Icon icon={`chevron-${direction}`} />
    </button>
  );
};
