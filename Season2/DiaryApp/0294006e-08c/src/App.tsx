import { Main } from './pages/Main/Main';
import { CreateNote } from './pages/CreateNote/CreateNote';
import { usePage } from './hooks/usePage';

export const App = () => {
  const { page } = usePage();

  return <>{(page === 'main' && <Main />) || <CreateNote />}</>;
};
