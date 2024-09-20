import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  callback: (e: MouseEvent) => void
) => {
  const refElement = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        refElement.current &&
        !refElement.current.contains(e.target as Node) &&
        e.target !== refElement.current
      )
        callback(e);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return refElement;
};
