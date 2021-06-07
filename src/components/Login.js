import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginuser, loginstatus } from '../reducers/findSlice';
import '../style/style.css';
import '../style/main.scss';

const Login = () => {
  let username = '';
  let password = '';
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.houses);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    console.log(user);
    dispatch(loginuser(user));
    dispatch(loginstatus());
    console.log(userInfo.logged_in);
    if (userInfo.logged_in) {
      history.push('/HouseList');
    }
  };

  const handleUNameChange = (e) => {
    username = e.target.value;
    console.log(username);
  };
  const handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <div className="container">
      <div className="login">
        <h1>Sign in</h1>
        <span>
          Hello!There signin and
          <div>start managing your system</div>
        </span>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="text"
              placeholder="Enter username"
              className="txt-input"
              name="username"
              onChange={handleUNameChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="txt-input"
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit" className="txt-input btn-signin">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
