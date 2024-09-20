import { createContext, useState } from 'react';
import { ImageData } from '../types';

interface ImageContextValue {
  imageList: ImageData[] | null;
  setImageList: React.Dispatch<React.SetStateAction<ImageData[] | null>>;
  choicedUrl: string;
  setChoicedUrl: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ImageContext = createContext<ImageContextValue>({
  imageList: null,
  setImageList: () => {},
  choicedUrl: '',
  setChoicedUrl: () => {},
  searchValue: '',
  setSearchValue: () => {},
});

interface ImageProviderProps {
  children: React.ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [imageList, setImageList] = useState<ImageData[] | null>(null);
  const [choicedUrl, setChoicedUrl] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const value = {
    imageList,
    setImageList,
    choicedUrl,
    setChoicedUrl,
    searchValue,
    setSearchValue,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
