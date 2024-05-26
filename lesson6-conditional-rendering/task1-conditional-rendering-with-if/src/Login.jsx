import React from 'react';
import './index.scss';

const Login = ({ onLogin }) => (
  <button className={'btn login'} onClick={() => onLogin()}>
    Login
  </button>
);

export default Login;
