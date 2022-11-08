import React, { useState } from "react";
// import styles from "./UserStatsGraphs.module.css";
import "./App.css"

const UserStatsGraphs = () => {

  const USERS = [
    { id: 1, name: 'Robotics', members: 32 },
    { id: 2, name: 'Rocketry', members: 30 },
    { id: 3, name: 'Dogs', members: 40 },
    { id: 4, name: 'African & Caribbean Association', members: 50 },
    { id: 5, name: 'Dancing', members: 30 },
    { id: 6, name: 'Chess', members: 68 },
    { id: 7, name: 'Reading', members: 34 },
    { id: 8, name: 'Hiking', members: 28 },
    { id: 9, name: 'Soccer', members: 23 },
    { id: 10, name: 'Basketball Intramurals', members: 23 },
  ];

  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (

    <div className="center">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-members">{user.members} members</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
};

export default UserStatsGraphs;
