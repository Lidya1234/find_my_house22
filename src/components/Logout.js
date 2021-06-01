import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutuser } from '../reducers/findSlice';
import Login from './Login';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutuser());
  }, [dispatch]);
  return (
    <Login />
  );
};

export default Logout;
