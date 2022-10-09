import React from 'react';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
