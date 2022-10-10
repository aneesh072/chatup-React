import React, { useState } from 'react';
import Add from '../assets/addAvatar.png';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lets Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={Add} alt="add" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Somethings went wrong</span>}
        </form>
        <p>You do have an account? Login!</p>
      </div>
    </div>
  );
};

export default Register;
