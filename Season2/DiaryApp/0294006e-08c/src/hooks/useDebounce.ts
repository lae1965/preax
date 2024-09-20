import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [deboancedValue, setDeboancedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboancedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return deboancedValue;
};
