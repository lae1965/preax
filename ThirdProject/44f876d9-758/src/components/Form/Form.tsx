import { FormEvent, HTMLAttributes, useEffect, useRef } from 'react';
import { login, setStatus } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Pointers } from '../UI';
import { useAuthForm, useKeysPress } from '../../hooks';
import { isNameValid, isPasswordValid, getSystemHotKey } from '../../utils';
import { INPUT_DESCRIPTION, ERROR_MESSAGE } from '../../constants';

import styles from './form.module.css';

interface IFormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: React.FC<IFormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const { status, error } = useAppSelector((state) => state.user);
  const hotKey = getSystemHotKey();
  const formKeySubmit = () => {
    formRef.current!.dispatchEvent(new Event('submit', { bubbles: true }));
  };

  const {
    name,
    password,
    messageName,
    messagePassword,
    isRegFormValid,
    touched,
    setTouched,
    handleChangeName,
    handleChangePassword,
    handleClearName,
    handleClearPassword,
    setMessageName,
    setMessagePassword,
    getExtraNameMessage,
    getExtrPasswordMessage,
  } = useAuthForm();

  useKeysPress(
    ['Alt', 'Enter'],
    formKeySubmit,
    !!name && !!password && status !== 'pending',
  );

  useEffect(() => {
    if (status === 'resolved') {
      navigate('/themes');
      dispatch(setStatus('idle'));
    }
    if (status === 'rejected') {
      setTouched(true);
      if (error?.statusCode === 401) {
        setMessageName(ERROR_MESSAGE.RESPONSE_VALID_NAME);
        setMessagePassword(ERROR_MESSAGE.RESPONSE_INVALID_PASSWORD);
      }
      if (error?.statusCode === 404) {
        alert(ERROR_MESSAGE.ERROR_404);
      }
      if (error?.statusCode === 500) {
        alert(ERROR_MESSAGE.SERVER_ERROR);
      }
    }
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageName(getExtraNameMessage(name));
    setMessagePassword(getExtrPasswordMessage(password));
    if (isRegFormValid) {
      dispatch(login({ name, password }));
    } else {
      setTouched(true);
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.content}
      onSubmit={handleSubmit}
      autoComplete={'off'}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    >
      <h1 className={styles.welcome}>Добро пожаловать!</h1>
      <div className={styles.inputGroup}>
        <Input
          className={
            touched ? (isNameValid(name) ? styles.suc : styles.err) : ''
          }
          value={name}
          type="text"
          name="name"
          label="Имя"
          autoFocus
          description={INPUT_DESCRIPTION.NAME}
          onChange={handleChangeName}
          onClear={handleClearName}
        >
          {messageName && touched && (
            <p
              className={`
            ${styles.extraMessage}
            ${isNameValid(name) ? styles.sucMes : styles.errMes}`}
            >
              {messageName}
            </p>
          )}
        </Input>

        <Input
          className={
            error
              ? styles.err
              : touched
              ? isPasswordValid(password)
                ? styles.suc
                : styles.err
              : ''
          }
          value={password}
          type="password"
          name="password"
          label="Пароль"
          description={INPUT_DESCRIPTION.PASSWORD}
          onChange={handleChangePassword}
          onClear={handleClearPassword}
        >
          {messagePassword && touched && (
            <p
              className={`
                ${styles.extraMessage}
                ${
                  error
                    ? styles.errMes
                    : isPasswordValid(password)
                    ? styles.sucMes
                    : styles.errMes
                }
              `}
            >
              {messagePassword}
            </p>
          )}
        </Input>
      </div>
      <Button
        type="submit"
        primary={true}
        classes={['authorizationWidth']}
        description="или нажми"
        boldDescription={hotKey}
        disabled={status === 'pending' || !name.length || !password.length}
      >
        {status === 'pending' ? <Pointers /> : 'Начать'}
      </Button>
    </form>
  );
};

export default Form;
