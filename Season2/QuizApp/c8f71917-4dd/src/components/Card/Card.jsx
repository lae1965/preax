import styles from './Card.module.css';
import { Button } from '../Button/Button';

export const Card = ({ justifyButton = 'center', children, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.button} style={{ justifyContent: justifyButton }}>
        <Button {...rest} />
      </div>
    </div>
  );
};
