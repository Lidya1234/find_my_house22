import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchHouses } from '../reducers/findSlice';
import HouseList from '../containers/HouseList';
import SingleHouseList from '../containers/SingleHouseList';
import Login from '../components/Login';
import '../style/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  const dispatch = useDispatch();
  const { house, status } = useSelector((state) => state.houses);
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  console.log(house, status);
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/HouseList" component={HouseList} />
        <Route exact path="/SingleHouseList" component={SingleHouseList} />

      </Switch>

    </BrowserRouter>
  );
};
export default Routes;
