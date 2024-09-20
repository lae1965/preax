import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { Edit24SVG } from '../Icons/Edit24SVG';
import { usePage } from '../../hooks/usePage';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.FC<HeaderProps> = () => {
  const { page, setPage } = usePage();

  return (
    <header className={styles.header}>
      <Logo />
      {page === 'main' && (
        <Button
          icon={Edit24SVG}
          className={styles.button}
          onClick={() => {
            setPage('createNote');
          }}
        />
      )}
    </header>
  );
};
