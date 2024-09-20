import styles from './CheckImage.module.css';

import { useInput } from '../../hooks/useInput';
import { Input } from '../Input/Input';
import { ImagesList } from '../ImagesList/ImagesList';
import { useEffect, useState } from 'react';
import { ImageData } from '../../types';
import { fetchGetRandomPictures, fetchSearchPicture } from '../../api';
import { useImage } from '../../hooks/useImage';
import { Spinner } from '../Spinner/Spinner';
import { useDebounce } from '../../hooks/useDebounce';

interface CheckImageProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckImage: React.FC<CheckImageProps> = ({ setIsOpenModal }) => {
  const { searchValue, setSearchValue, imageList, choicedUrl } = useImage();
  const checkInput = useInput('checkImage', searchValue, false);
  const [isScroll, setIsScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const deboancedValue = useDebounce(checkInput.value, 1000);

  const { setImageList } = useImage();

  let needReload = true;

  useEffect(() => {
    if (!!imageList && choicedUrl) needReload = false;
  }, []);

  useEffect(() => {
    (async () => {
      if (!needReload) {
        needReload = true;
        return;
      }
      setIsLoading(true);

      setSearchValue(deboancedValue);
      let imgList: ImageData[] | null;
      if (deboancedValue) imgList = await fetchSearchPicture(deboancedValue);
      else imgList = await fetchGetRandomPictures();
      setImageList(imgList);

      setIsLoading(false);
    })();
  }, [deboancedValue, setImageList, setSearchValue]);

  return (
    <div className={styles.checkImage}>
      <div
        className={`${styles.inputWrapper} ${
          isScroll ? styles.inputShadow : ''
        }`}
      >
        <Input
          placeholder='Поиск'
          isFocus={true}
          {...checkInput}
          isClearButton
        />
      </div>
      {(isLoading && <Spinner />) || (
        <ImagesList setIsOpenModal={setIsOpenModal} setIsScroll={setIsScroll} />
      )}
    </div>
  );
};
