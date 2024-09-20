export type ILoginData = {
  name: string;
  password: string;
};

export type IUser = {
  id: number | null;
  name: string | null;
  password: string | null;
  quizzes: string[];
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type ValidationStatus = 'success' | 'error' | 'regular' | 'blocked';

export type FormInputValidation = {
  messageName: string;
  messagePassword: string;
  statusName: ValidationStatus;
  statusPassword: ValidationStatus;
};

export type Theme = {
  id: number;
  name: string;
  background: {
    light: string;
    dark: string;
  };
  quizzes: number[];
  createdAt: string;
  updatedAt: string;
};
