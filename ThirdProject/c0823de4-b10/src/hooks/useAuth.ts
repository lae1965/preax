import { ILoginData } from '../types';
import { logIn } from '../store/slices/auth';
import { useAppDispatch, useAppSelector } from '.';
import { authActions, authSelectors } from '../store/slices';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  return {
    authData: useAppSelector(authSelectors.selectAuthData),
    logIn: (loginData: ILoginData) => dispatch(logIn(loginData)).unwrap(),
    logOut: () => dispatch(authActions.logout()),
  };
};
