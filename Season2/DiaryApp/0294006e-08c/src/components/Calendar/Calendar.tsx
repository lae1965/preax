import styles from './Calendar.module.css';
import { CalendarIcon } from '../Icons/CalendarIcon';

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='date'
        name={name}
        className={styles.date}
        value={value}
        onChange={onChange}
      />
      <CalendarIcon className={styles.icon} />
    </div>
  );
};
