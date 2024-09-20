import { useEffect } from 'react';

export const useSaveTagsList = (tagsList: string[]) => {
  useEffect(() => {
    localStorage.setItem('tagsList', JSON.stringify(tagsList));
  }, [tagsList]);
};
