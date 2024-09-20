import React, { useContext, useState } from 'react';

import styles from './SelectionImg.module.css';
import Input from '../../UI/Input/Input';
import ButtonSearch from '../../UI/ButtonSearch/ButtonSearch';
import ImagesList from '../../ImagesList/ImagesList';
import { IsShowContext } from '../../../utils/context';

const SelectionImg = () => {
  const [value, setValue] = useState('');
  const { isShowSelectImageModal } = useContext(IsShowContext);

  return (
    <section
      className={
        isShowSelectImageModal ? styles.selectionActive : styles.selectionImg
      }
    >
      <div className={styles.searchWrapper}>
        <Input inputValue={value} setInputValue={setValue} />
        <ButtonSearch />
      </div>
      <ImagesList />
    </section>
  );
};

export default SelectionImg;
