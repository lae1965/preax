import { HTMLAttributes } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './form.module.css';

interface IFormProps extends HTMLAttributes<HTMLFormElement> {}

const nameDescription =
  'Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов';
const passwordDescription =
  'Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы';

const Form: React.FC<IFormProps> = () => {
  return (
    <form className={styles.content}>
      <h1 className={styles.welcome}>Добро пожаловать!</h1>
      <div className={styles.inputGroup}>
        <Input
          type="text"
          name="name"
          label="Имя"
          description={nameDescription}
        />
        <Input
          type="password"
          name="password"
          label="Пароль"
          description={passwordDescription}
        />
      </div>
      <Button type="submit" text="Начать" />
    </form>
  );
};

export default Form;
