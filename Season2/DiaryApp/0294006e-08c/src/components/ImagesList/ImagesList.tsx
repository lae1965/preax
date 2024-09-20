import { useEffect, useRef, useState } from 'react';
import styles from './ImagesList.module.css';
import { DefaultImage } from '../Icons/DefaultImage';
import { useImage } from '../../hooks/useImage';
import { NotFoundImages } from '../NotFoundImages/NotFoundImages';

interface ImagesListProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImagesList: React.FC<ImagesListProps> = ({
  setIsOpenModal,
  setIsScroll,
}) => {
  const { imageList, choicedUrl, setChoicedUrl } = useImage();
  const [isChoiced, setIsChoiced] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef?.current) {
        setIsScroll(!!scrollRef.current.scrollTop);
      }
    };

    const currentRef = scrollRef?.current;
    currentRef?.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChoiceImage = (
    e: React.MouseEvent<HTMLDivElement>,
    imageUrl: string
  ) => {
    e.stopPropagation();
    setChoicedUrl(imageUrl);
    setIsChoiced(true);
  };

  useEffect(() => {
    if (isChoiced) {
      setTimeout(() => {
        setIsChoiced(false);
        setIsOpenModal(false);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChoiced]);

  if (!imageList || !imageList.length) {
    setIsScroll(false);
    return <NotFoundImages />;
  }

  return (
    <div className={styles.images} ref={scrollRef}>
      {imageList?.map((item) => (
        <div
          key={item.id}
          className={styles.image}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
          data-portrait={item.height > item.width}
          data-choiced={choicedUrl === item.imageUrl}
          onClick={(e) => handleChoiceImage(e, item.imageUrl)}
        >
          {choicedUrl === item.imageUrl && (
            <DefaultImage className={styles.choiced} />
          )}
        </div>
      ))}
    </div>
  );
};
