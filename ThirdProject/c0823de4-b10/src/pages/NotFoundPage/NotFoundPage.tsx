import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import { Button, Logo } from '../../components/UI';
import { routes } from '../../routes';

interface INotFoundPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function NotFoundPage({ ...props }: INotFoundPageProps) {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(routes.pages.layout);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={styles.wrapper} {...props}>
      <Logo className={styles.notFoundPage__logo} />
      <div className={styles.content}>
        <h1 className={styles.content__title}>
          Ой, кажется такой страницы не существует
        </h1>
        <Button
          className={styles.content__button}
          onClick={handleClick}
          keyDesctiption={true}
        >
          На главную
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
