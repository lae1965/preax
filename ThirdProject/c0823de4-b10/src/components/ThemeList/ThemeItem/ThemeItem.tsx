import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './ThemeItem.module.css';
import { themeImgList } from '../../../utils/constants';

interface IThemeItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  name?: string;
  onClickImg: (id: number) => void;
  isSelected: boolean;
}

function ThemeItem({ id, name, onClickImg, isSelected }: IThemeItemProps) {
  return (
    <div
      style={{
        backgroundImage: `url(/src/img/${themeImgList[+id - 1]}.jpg)`,
      }}
      className={styles.theme}
      onClick={() => {
        onClickImg(+id);
      }}
      data-selected={isSelected ? 'true' : 'false'}
      tabIndex={0}
    >
      <p className={styles.name} data-selected={isSelected ? 'true' : 'false'}>
        {name}
      </p>
      {isSelected && (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 3.33337C10.81 3.33337 3.33334 10.81 3.33334 20C3.33334 29.19 10.81 36.6667 20 36.6667C29.19 36.6667 36.6667 29.19 36.6667 20C36.6667 10.81 29.19 3.33337 20 3.33337ZM20 33.3334C12.6483 33.3334 6.66668 27.3517 6.66668 20C6.66668 12.6484 12.6483 6.66671 20 6.66671C27.3517 6.66671 33.3333 12.6484 33.3333 20C33.3333 27.3517 27.3517 33.3334 20 33.3334Z'
            fill='#FFAA60'
          />
          <path
            d='M16.665 22.645L12.8333 18.82L10.48 21.18L16.6683 27.355L27.845 16.1783L25.4883 13.8217L16.665 22.645Z'
            fill='#FFAA60'
          />
        </svg>
      )}
    </div>
  );
}

export default ThemeItem;
