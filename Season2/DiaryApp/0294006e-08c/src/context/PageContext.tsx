import { createContext, useState } from 'react';

type PageType = 'main' | 'createNote';

interface PageContextValue {
  page: PageType;
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}

export const PageContext = createContext<PageContextValue>({
  page: 'main',
  setPage: () => {},
});

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState<PageType>('main');

  const value = { page, setPage };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
