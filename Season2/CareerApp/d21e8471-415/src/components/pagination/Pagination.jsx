import { useMemo, Fragment } from "react";
import { clsx } from "@utils/clsx";
import styles from "./pagination.module.css";

const Pagination = ({ curPage, onChange, pagesCount, className }) => {
  // Формируем массив items длины, равной общему кол-ву страниц, и убираем из него все лишние элементы, а именно которые не собираемся показывать юзеру
  const items = useMemo(() => Array.from({ length: pagesCount })
    .map((_, index) => index + 1)
    .filter((pageNumber) =>
      (pageNumber === 1)
      || ((curPage === 1 || curPage === 2) && (pageNumber === 3 || pageNumber === 4))
      || pageNumber === pagesCount
      || ((curPage === pagesCount || curPage === pagesCount - 1) && (pageNumber === pagesCount - 2 || pageNumber === pagesCount - 3))
      || (pageNumber >= curPage - 1 && pageNumber <= curPage + 1)),
    [curPage, pagesCount]);

  return (
    <ul className={clsx(styles.list, className)}>
      {items.map((pageNumber, i) => (
        <Fragment key={pageNumber}>
          {/* Если обнаруживаем разрыв между номерами страниц, то выводим многоточие */}
          {pageNumber !== 1 && (pageNumber - 1) !== items[i - 1] && (
            <li className={clsx(styles.item, styles.dots)}>
              ...
            </li>
          )}
          <li className={styles.item}>
            <button className={clsx(styles.btn, curPage === pageNumber && styles.active)} onClick={() => onChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default Pagination;