import {
  ChangeEvent,
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  useState,
  useEffect,
} from 'react';
import styles from './Form.module.css';
import { Button, Input } from '../UI';
import { FormInputValidation, ILoginData } from '../../types';
import { CustomError } from '../../errors';
import { useAppDispatch, useAppSelector, useAuth } from '../../hooks';
import { formInputValidation } from '../../utils/formInputValidation';
import { updateValidation } from '../../store/slices/auth';
import { LoadingDots } from '../UI/LoadingDots/LoadingDots';

interface IFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const hints = [
  'Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов',
  'Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры, 3 заглавные буквы',
];

const initialFormData: ILoginData = {
  name: '',
  password: '',
};
const validationDataClear: FormInputValidation = {
  messageName: '',
  messagePassword: '',
  statusName: 'blocked',
  statusPassword: 'blocked',
};
const validationDataWrongPassword: FormInputValidation = {
  messageName: 'Пользователь с таким именем уже существует',
  messagePassword:
    'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт',
  statusName: 'success',
  statusPassword: 'error',
};

function Form({ ...props }: IFormProps) {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [passwordInputType, setPasswordInputType] = useState('password');
  const { logIn } = useAuth();
  const loadingProcess = useAppSelector((state) => {
    return state.auth.loadingProcess;
  });

  const validationData = useAppSelector((state) => {
    return state.auth.validationData;
  });
  const validationNameClear: FormInputValidation = {
    messageName: '',
    messagePassword: validationData.messagePassword,
    statusName: 'blocked',
    statusPassword: validationData.statusPassword,
  };

  const validationPasswordClear: FormInputValidation = {
    messageName: validationData.messageName,
    messagePassword: '',
    statusName: validationData.statusName,
    statusPassword: 'blocked',
  };

  useEffect(() => {
    const { name, password } = formData;

    if (name.length > 0 && password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [formData]);

  const handleSubmit = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    const data = formInputValidation(formData);
    dispatch(updateValidation(data));
    if (data.statusName !== 'error' && data.statusPassword !== 'error') {
      try {
        setBtnDisabled(true);
        await logIn(formData);
        dispatch(updateValidation(validationDataClear));
      } catch (error) {
        if (error instanceof CustomError) {
          if (error.name === 'ApiError') {
            // действия в зависимости от статуса ошибки
            if (error.data?.statusCode === 401) {
              dispatch(updateValidation(validationDataWrongPassword));
            }
            return;
          }
        }
      }
    }
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateValidation(validationNameClear));
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateValidation(validationPasswordClear));
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <form className={styles.form} {...props}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <div className={styles.inputs}>
        <Input
          title="Имя"
          type="text"
          hint={hints[0]}
          onChange={handleChangeName}
          value={formData.name}
          validationStatus={validationData.statusName}
          helpText={validationData.messageName}
          clearPool={() => {
            setFormData({ name: '', password: formData.password });
            dispatch(updateValidation(validationNameClear));
          }}
        />
        <Input
          title="Пароль"
          type={passwordInputType}
          hint={hints[1]}
          onChange={handleChangePassword}
          value={formData.password}
          validationStatus={validationData.statusPassword}
          helpText={validationData.messagePassword}
          clearPool={() => {
            setFormData({ name: formData.name, password: '' });
            dispatch(updateValidation(validationPasswordClear));
          }}
          showPool={() => {
            if (passwordInputType == 'password') {
              setPasswordInputType('text');
            } else {
              setPasswordInputType('password');
            }
            setTimeout(() => {
              setPasswordInputType('password');
            }, 20000);
          }}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={btnDisabled}
        type="button"
        className={styles.form__button}
        keyDesctiption={true}
      >
        {loadingProcess ? <LoadingDots /> : 'Начать'}
      </Button>
    </form>
  );
}

export default Form;
