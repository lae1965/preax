import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import styles from './MainPage.module.css';
import { Button } from '../../components/UI';
import { useAppDispatch, useAppSelector, useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { themeActions, themeSelectors } from '../../store/slices';
import { routes } from '../../routes';

interface IMainPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function MainPage(): IMainPageProps {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const isThemesSelected = useAppSelector(themeSelectors.getIsThemesSelected);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isThemesSelected) navigate(routes.pages.themes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (): void => {
    logOut();
    dispatch(themeActions.clearThemes());
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.ThemesPage__button} onClick={handleClick}>
        Выйти
      </Button>
    </div>
  );
}

export default MainPage;
