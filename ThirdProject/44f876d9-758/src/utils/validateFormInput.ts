import { REGEXP } from '../constants';

export const isNameValid = (name: string) => {
  return !!name.match(REGEXP.NAME);
};

export const isPasswordValid = (password: string) => {
  return !!password.match(REGEXP.PASSWORD);
};
