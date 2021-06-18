import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signuser } from '../reducers/findSlice';
import '../style/style.css';
import '../style/main.scss';

const Signup = () => {
  let username = '';
  let password = '';
  /* eslint-disable camelcase */
  let password_confirmation = '';
  // let message = '';
  const history = useHistory();
  const dispatch = useDispatch();
  const { create } = useSelector((state) => state.houses);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
      password_confirmation,
    };

    dispatch(signuser(user));
    if (create.status !== 500) {
      history.push('/Login');
      // message = 'User successfully created';
    } else {
      // message = create.error;
    }
  };

  const handleUNameChange = (e) => {
    username = e.target.value;
  };
  const handlePasswordChange = (e) => {
    password = e.target.value;
  };
  const handlePasswordConfChange = (e) => {
    password_confirmation = e.target.value;
  };
  /* eslint-enable camelcase */
  return (
    <div className="container">
      <div className="login">
        <h1>Sign in</h1>
        <span>
          Hello There! Signup and
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
            <input
              type="password"
              placeholder="Enter password_confirmation"
              className="txt-input"
              name="password"
              onChange={handlePasswordConfChange}
            />
          </div>
          <div>
            <button type="submit" className="txt-input btn-signin">
              Sign Up
            </button>
          </div>
        </form>
        <div>
          You already have an account
          <Link to="/Login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
