import styles from './Emoji.module.css';
import { getSvg } from '../../util/getSvg';

export const Emoji = ({ emoji }) => {
  //! Не стал делать 2 кейса, т.к. размер emoji здесь задан в em и привязан к родительскому элементу
  return (
    <span
      style={{ backgroundImage: `url(${getSvg(emoji)})` }}
      className={styles.bg}
    >
      <span className={styles.content}>{emoji}</span>
    </span>
  );
};
