import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HouseList from '../containers/HouseList';
import SingleHouseList from '../containers/SingleHouseList';
import '../style/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => (
  <BrowserRouter>
    
    <Switch>
      <Route exact path="/" component={HouseList} />
      <Route exact path="/SingleHouseList" component={SingleHouseList} />

    </Switch>
   
  </BrowserRouter>
);

export default Routes;
