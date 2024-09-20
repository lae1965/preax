import { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut';
import { setThemes } from '@/store/slices/user';
import { fetchThemes } from '@/store/slices/themes';
import { Section } from '@/components/Section';
import { Layout } from '@/components/Layout';
import { ThemeList } from '@/components/ThemeList';
import { Button } from '@/UI';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from "./Themes.module.css";
import { keyboardShortcuts } from '@/constants';
import useAgentSystem from '@/hooks/useAgentSystem';

const Themes = () => {
  const data = useAppSelector((state) => state.themes.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const os = useAgentSystem();
  useKeyboardShortcut(keyboardShortcuts.altEnter[os].shortcut, () => onSubmit());
  const [selectedThemes, setSelectedThemes] = useState<number[]>([]);
  const isTablet = useMediaQuery('(min-width: 744px)');

  useEffect(() => {
    dispatch(fetchThemes());
  }, []);

  const disabled = useMemo(() => selectedThemes.length !== 3, [selectedThemes]);

  const onSubmit = useCallback(() => {
    if (!disabled) {
      dispatch(setThemes(selectedThemes));
      navigate('/main');
    }
  }, [selectedThemes, dispatch, navigate, disabled]);

  const onSelect = useCallback((id: number) => {
    setSelectedThemes((prev) =>
      prev.find((item) => item === id)
        ? prev.filter((item) => item !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev,
    );
  }, []);

  return (
    <Layout header={false} className={styles.container}>
      <Section
        className={styles.section}
        img={false}
        title={isTablet ? 'Выбери интересующие темы' : 'Выбери темы'}
        header
      >
        <ThemeList
          data={data}
          selectedThemes={selectedThemes}
          onThemeSelect={onSelect}
        />
        <Button
          wrapperClassName={styles.submitBtn}
          tip={keyboardShortcuts.altEnter[os].hint}
          onClick={onSubmit}
          disabled={disabled}
        >
          Продолжить
        </Button>
      </Section>
    </Layout>
  );
};

export default Themes;
