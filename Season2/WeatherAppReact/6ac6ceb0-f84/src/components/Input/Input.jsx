import { Clear } from '../SVG/Clear';
import { Search } from '../SVG/Search';
import styles from './Input.module.css';

export const Input = () => {
  return (
    <form className={styles.search}>
      <input
        type='text'
        placeholder='Поиск по городу'
        className={styles.input}
      />
      <button type='button' className={styles.send}>
        <Search />
      </button>
      <button type='button' className={styles.clear}>
        <Clear />
      </button>
    </form>
  );
};
