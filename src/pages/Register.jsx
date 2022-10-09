import React from 'react';
import Add from '../assets/addAvatar.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lets Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={Add} alt="add" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login!</p>
      </div>
    </div>
  );
};

export default Register;
