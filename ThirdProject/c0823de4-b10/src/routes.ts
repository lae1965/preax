interface IRoutes {
  [index: string]: {
    [index: string]: string;
  };
}

const routes: IRoutes = {
  api: {
    auth: '/api/3-quiz/auth',
  },
  pages: {
    layout: '/',
    main: '/main',
    themes: '/themes',
    notFound: '/not-found',
  },
};

export { routes };
