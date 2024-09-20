import { useEffect, useState } from 'react';

export const useInput = (
  name: string,
  initialValue: string = '',
  isSaveToStorage = true
) => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(name) || initialValue
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (isSaveToStorage) localStorage.setItem(name, value);
  }, [name, value, isSaveToStorage]);

  return {
    name,
    value,
    onChange: handleChange,
  };
};
