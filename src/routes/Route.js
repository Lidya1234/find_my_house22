import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loginstatus } from '../reducers/findSlice';
import HouseList from '../containers/HouseList';
import SingleHouseList from '../containers/SingleHouseList';
import Login from '../components/Login';
import Logout from '../components/Logout';
import '../style/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.houses);
  useEffect(() => {
    dispatch(loginstatus());
  }, [dispatch]);

  return (
    <BrowserRouter>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            userInfo.logged_in ? (
              <HouseList />
            ) : (
              <Login />
            )
          )}
        />
        <Route
          exact
          path="/HouseList"
          render={() => (
            userInfo.logged_in ? (
              <HouseList />
            )
              : (
                <div className="login-access">
                  <p>You need to Sign In to access here</p>
                </div>
              )
          )}
        />

        <Route
          exact
          path="/SingleHouseList"
          render={() => (
            userInfo.logged_in ? (
              <SingleHouseList />
            )
              : (
                <div className="login-access">
                  <p>You need to Sign In to access here</p>
                </div>
              )
          )}
        />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
        {/* <div><h1>Access Denied.Please Login first</h1></div> */}
      </Switch>

    </BrowserRouter>
  );
};
export default Routes;
