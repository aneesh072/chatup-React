import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&w=800" />
        <div className="userChatInfo">
          <span>Enis</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
