import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutuser } from '../reducers/findSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(logoutuser());
  }, [dispatch]);
  history.push('/Login');
  return (null);
};

export default Logout;
