import React from 'react';
import { useDispatch } from 'react-redux';
import { loginuser } from '../reducers/findSlice';
import '../style/style.css';
import '../style/main.scss';

let username = '';
let password = '';
const dispatch = useDispatch();

const handleSubmit = (event) => {
  event.preventDefault();
  const user = {
    username,
    password,
  };
  dispatch(loginuser(user));
};
const handleUNameChange = (e) => {
  username = e.target.value;
};

const handlePasswordChange = (e) => {
  password = e.target.value;
};
const Login = () => (
  <div className="container">
    <div className="login">
      <h1>Sign in</h1>
      <span>
        Hello!There signin and
        <div>start managing your system</div>
      </span>

      <form className="form">
        <div>
          <input
            type="text"
            placeholder="Enter username"
            className="input"
            name="username"
            value={username}
            onChange={handleUNameChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            className="input"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit" className="input btn-signin" onSubmit={handleSubmit}>
            Sign In
          </button>
        </div>
      </form>
      <a href="#home" className="forgotpwd">Forgot password ?</a>
    </div>
  </div>
);
export default Login;
