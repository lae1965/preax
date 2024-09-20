import { constPagination } from '@constants/constPagination';
import styles from './PaginatePageItem.module.css';

const PaginatePageItem = ({ item, onClick }) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${
        item.status === constPagination.active ? styles.active : ''
      }`}
      disabled={item.status === constPagination.disabled}
      onClick={() => onClick(item.inner)}
    >
      {item.inner}
    </button>
  );
};

export default PaginatePageItem;
