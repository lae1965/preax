import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import {
  AuthPage,
  MainPage,
  NotFoundPage,
  PrivateRoute,
  ThemesPage,
} from './pages';
import { routes } from './routes';
import { useAppDispatch } from './hooks';
import { authActions } from './store/slices';
import './css/App.css';

export const App = () => {
  const AppId = localStorage.getItem(
    'The Ultimate Question of Life, the Universe, and Everything'
  );

  if (!AppId) {
    localStorage.clear();
    localStorage.setItem(
      'The Ultimate Question of Life, the Universe, and Everything',
      '42'
    );
  }

  const dispatch = useAppDispatch();
  const currentUser = localStorage.getItem('name');
  dispatch(authActions.setAuthData(currentUser));

  return (
    <Routes>
      <Route path={routes.pages.layout} element={<Layout />}>
        <Route path={routes.pages.layout} element={<PrivateRoute hasAccess />}>
          <Route index element={<AuthPage />} />
        </Route>
        <Route path={routes.pages.layout} element={<PrivateRoute />}>
          <Route path={routes.pages.themes} element={<ThemesPage />} />
          <Route path={routes.pages.main} element={<MainPage />} />
        </Route>
        <Route path={routes.pages.notFound} element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to={routes.pages.notFound} />} />
      </Route>
    </Routes>
  );
};
