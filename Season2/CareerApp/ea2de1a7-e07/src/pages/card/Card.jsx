import styles from './Card.module.css';

import Button from '@components/button/Button';
import Icon from '@components/icon/Icon';
import Vacancy from '@components/vacancy/Vacancy';
import { useRoute } from '@hooks/useRoute';
import { APP_PAGE } from '../../constans/constans';
import { useEffect } from 'react';
import { useQuerySearchParams } from '@store/querySearchParams';

const Card = () => {
  const { navigate, addCheckboxQueryParam } = useRoute()
  const { queryParams } = useQuerySearchParams()

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    if (!queryParams.has('id')) {
      navigate(APP_PAGE.main)
      return
    }
  }, [])


  return (
    <div className={styles.wrapper}>
      <Button className={styles.button} onClick={() => {
        navigate(APP_PAGE.main)
        addCheckboxQueryParam(queryParams)
      }}>
        <Icon name='chevron' className={styles.icon} />К результатам поиска
      </Button>
      <Vacancy />
    </div>
  );
};

export default Card;
