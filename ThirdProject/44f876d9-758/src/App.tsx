import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound, Welcome, Themes, Main } from './pages';
import { Container } from './components/UI';
import { useAppSelector } from './redux/hooks';

function App() {
  const user = useAppSelector((state) => state.user.data.name);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/themes" /> : <Welcome />}
        />
        <Route path="/main" element={<Main />} />
        <Route
          path="/themes"
          element={user ? <Themes /> : <Navigate to="/" />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Container>
  );
}

export default App;
