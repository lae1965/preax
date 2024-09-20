import { useNavigate } from 'react-router-dom';
import { Wrap } from '../../components';
import { Button } from '../../components/UI';
import { useKeysPress } from '../../hooks';
import { getSystemHotKey } from '../../utils';

import styles from './notFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  const path = sessionStorage.getItem('name') ? '/themes' : '/';
  const hotKey = getSystemHotKey();
  const navigateWithKey = () => {
    navigate(path);
  };

  useKeysPress(['Alt', 'Enter'], navigateWithKey, true);

  return (
    <Wrap lost classes={['notFountWidth']}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Ой, кажется такой страницы не существует
        </h1>
        <div className={styles.btnWrapper}>
          <Button
            classes={['notFountWidth']}
            primary={true}
            descriptionColor={styles.descriptionColor}
            onClick={() => navigate(path)}
            description="или нажми"
            boldDescription={hotKey}
          >
            На главную
          </Button>
        </div>
      </div>
    </Wrap>
  );
}

export default NotFound;
