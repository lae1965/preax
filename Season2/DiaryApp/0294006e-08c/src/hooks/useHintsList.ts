import { useEffect, useState } from 'react';
import baseTags from '../data/tags.json';

export const useHintsList = (tag: string, tagsList: string[]) => {
  const [hintsList, setHintsList] = useState<string[]>(baseTags);

  useEffect(() => {
    const value = tag.toLowerCase();
    setHintsList(
      baseTags.filter((item) => {
        if (!item.toLowerCase().startsWith(value)) return false;
        const find = tagsList.findIndex((tagItem) => tagItem === item);
        return find === -1;
      })
    );
  }, [tag, tagsList]);

  return hintsList;
};
