import { ChangeEvent, useEffect, useState } from 'react';
import { isNameValid, isPasswordValid } from '../utils';
import { useAppDispatch } from '../redux/hooks';
import { setError } from '../redux/slices/userSlice';
import { ERROR_MESSAGE } from '../constants';

export function useAuthForm() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const [messageName, setMessageName] = useState<string>('');
  const [messagePassword, setMessagePassword] = useState<string>('');
  const dispatch = useAppDispatch();

  const isRegFormValid = isNameValid(name) && isPasswordValid(password);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (touched) {
      setMessageName(() => getExtraNameMessage(name));
      setMessagePassword(() => getExtrPasswordMessage(password));
      dispatch(setError(''));
    }
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClearName = () => {
    setName('');
    setMessageName('');
  };

  const handleClearPassword = () => {
    setPassword('');
    setMessagePassword('');
  };

  const getExtraNameMessage = (name: string) => {
    if (!isNameValid(name)) return ERROR_MESSAGE.INVALID_NAME;
    return '';
  };

  const getExtrPasswordMessage = (password: string) => {
    if (!isPasswordValid(password)) return ERROR_MESSAGE.INVALID_PASSWORD;
    return '';
  };

  useEffect(() => {
    setMessageName(getExtraNameMessage(name));
  }, [isNameValid(name)]);

  useEffect(() => {
    setMessagePassword(getExtrPasswordMessage(password));
    dispatch(setError(null));
  }, [isPasswordValid(password)]);

  return {
    name,
    password,
    messageName,
    messagePassword,
    isRegFormValid,
    touched,
    setMessageName,
    setMessagePassword,
    setTouched,
    handleChangeName,
    handleChangePassword,
    handleClearName,
    handleClearPassword,
    getExtraNameMessage,
    getExtrPasswordMessage,
  };
}
