import React from 'react';
import Add from '../assets/addAvatar.png';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lets Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
        </form>
        <p>You do have an account? Register!</p>
      </div>
    </div>
  );
};

export default Login;
