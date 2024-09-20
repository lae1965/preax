import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { clearThemes } from '../../redux/slices/themesSlice';
import { useNavigate } from 'react-router-dom';
import { API_URL, RESOURCES } from '../../constants';
import { Button } from '../../components/UI';
import { getSystemHotKey } from '../../utils';
import styles from './Themes.module.css';
import type { TTheme } from '../../types/theme';
import ThemesList from '../../components/ThemesList/ThemesList';
import { useKeysPress } from '../../hooks';

interface IThemesProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

function Themes({ ...props }: IThemesProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.themes.limit);
  const [list, setList] = useState<TTheme[]>([]);
  const hotKey = getSystemHotKey();

  useKeysPress(['Alt', 'Enter'], handleClick, limit);

  useEffect(() => {
    fetch(`${API_URL}${RESOURCES.THEMES}`)
      .then((res) => res.json())
      .then((data) => {
        return setList(data);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  function handleClick() {
    navigate('/main');
    dispatch(clearThemes());
  }

  return (
    <section className={styles.container} {...props}>
      <div className={styles.head}>
        <a href="/" className={styles.logo}>
          QUIZ
        </a>
        <h1 className={styles.title}></h1>
      </div>
      <ul className={styles.list}>
        {list.length && <ThemesList list={list} />}
      </ul>
      <div className={styles.buttonWrapper}>
        <Button
          type="button"
          primary={true}
          classes={['themesWidth']}
          description="или нажми"
          boldDescription={hotKey}
          disabled={!limit}
          onClick={handleClick}
        >
          Продолжить
        </Button>
      </div>
    </section>
  );
}

export default Themes;
