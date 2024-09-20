import { FC } from 'react';
import { Navigate, Outlet, PathRouteProps } from 'react-router-dom';

import { routes } from '../routes';
import { useAuth } from '../hooks';

interface IPrivateRoute extends PathRouteProps {
  hasAccess?: true;
}

const PrivateRoute: FC<IPrivateRoute> = ({ hasAccess }) => {
  const { authData } = useAuth();

  if (hasAccess) {
    return authData ? <Navigate to={routes.pages.themes} /> : <Outlet />;
  }

  return authData ? <Outlet /> : <Navigate to={routes.pages.layout} />;
};

export default PrivateRoute;
