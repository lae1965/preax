import { routes } from '../routes';
import { ILoginData, IUser } from '../types';
import { CustomError } from '../errors';

const genRequestUrl = (): URL => {
  const url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = routes.api.auth;
  return url;
};

export const logIn = async (loginData: ILoginData): Promise<IUser | never> => {
  const response = await fetch(genRequestUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });


  if (!response.ok) {
    throw new CustomError({
      name: 'ApiError',
      message: 'Не сетевая ошибка из api.login',
      data: await response.json(),
    });
  }

  const data = await response.json();
 
  return data.user ?? data;
};
