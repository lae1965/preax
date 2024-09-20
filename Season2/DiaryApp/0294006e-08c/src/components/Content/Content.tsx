import styles from './Content.module.css';

import noData from '../../assets/noData.png';
import { Button } from '../Button/Button';
import { Edit24SVG } from '../Icons/Edit24SVG';
import { usePage } from '../../hooks/usePage';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

export const Content: React.FC<ContentProps> = () => {
  const { setPage } = usePage();

  return (
    <main className={styles.main}>
      <img src={noData} alt='noData' />
      <Button
        className={styles.button}
        icon={Edit24SVG}
        text='Создать первую запись'
        onClick={() => {
          setPage('createNote');
        }}
      />
    </main>
  );
};
