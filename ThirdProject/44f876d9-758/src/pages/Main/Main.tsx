import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setUserData } from '../../redux/slices/userSlice';
import { Button } from '../../components/UI';

const Main = () => {
  if (!sessionStorage.getItem('name')) {
    return <Navigate to="/" replace />;
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onExit() {
    navigate('/');
    dispatch(setUserData({}));
    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <Button primary={true} onClick={onExit} attr-change="disable">
      Выйти
    </Button>
  );
};

export default Main;
