import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import styles from './ThemesPage.module.css';
import { Button, Logo } from '../../components/UI';
import { ThemeList } from '../../components';
import { Theme } from '../../types';
import { useAppDispatch } from '../../hooks';
import { themeActions } from '../../store/slices';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

interface IThemesPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function ThemesPage({ ...props }: IThemesPageProps) {
  const [themesList, setThemesList] = useState<Theme[]>([]);
  const [selectList, setSelectList] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/3-quiz/themes`
        );
        if (!response.ok) throw new Error('Ошибка сервера');
        setThemesList(await response.json());
      } catch (e) {
        console.log(e);
        throw e;
      }
    })();
  }, []);

  const onClick = () => {
    const selected: Theme[] = [];
    selectList.forEach((id) => {
      const findNumber = themesList.findIndex((item) => item.id === id);
      if (findNumber != -1) selected.push(themesList[findNumber]);
    });
    dispatch(themeActions.setThemes(selected));
    localStorage.setItem('quizzes', JSON.stringify(selected));
    navigate(routes.pages.main);
  };

  return (
    <div className={styles.wrapper} {...props}>
      <Logo className={styles.logo} color='#FF9C46' />
      <h1 className={styles.header}>Выбери интересующие темы</h1>
      <ThemeList
        themesList={themesList}
        selectList={selectList}
        setSelectList={setSelectList}
      />
      <Button
        className={styles.button}
        keyDesctiption={true}
        disabled={selectList.length < 3}
        type='button'
        onClick={onClick}
      >
        Продолжить
      </Button>
    </div>
  );
}

export default ThemesPage;
