export type TTheme = {
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
