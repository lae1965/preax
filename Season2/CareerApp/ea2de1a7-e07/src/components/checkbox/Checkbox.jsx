import { useQuerySearchParams } from '@store/querySearchParams';
import styles from './Checkbox.module.css';

const Checkbox = ({ list, type = 'checkbox', chekeced, onChange }) => {
  //вынести из компонента
  const { queryParams } = useQuerySearchParams();
  return (
    <div className={styles.wrapper}>
      {list.map((item, index) => (
        <li
          key={item.id}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            className={styles.input}
            type={type}
            id={item.id}
            name={item.id}
            onChange={() => onChange(item)}
            checked={
              type === 'radio'
                ? queryParams.map((res) => res.query).includes(item.query)
                  ? chekeced(item)
                  : index === 0
                : chekeced(item)
            }
          />
          <label htmlFor={item.id} className={styles.label}>
            {item.value}
          </label>
        </li>
      ))}
    </div>
  );
};

export default Checkbox;
