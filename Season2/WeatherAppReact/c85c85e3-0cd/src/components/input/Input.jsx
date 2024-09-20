import Icon from '../icon/Icon';
import styles from './Input.module.css';

function Input() {
  return (
    <form className={styles.search} id='searchForm'>
      <label htmlFor='citySearch' className={styles.displayNone}>
        Поиск по городу
      </label>
      <input
        className={styles.searchInput}
        placeholder='Поиск по городу'
        id='searchInput'
        autoComplete='off'
      />
      <Icon path={'/images/icons/lens/lens.svg'} />
    </form>
  );
}

export default Input;
