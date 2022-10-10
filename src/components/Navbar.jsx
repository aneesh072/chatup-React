import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Lets Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <span>Enis</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
