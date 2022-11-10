import React, { useState } from "react";
// import styles from "./UserStatsGraphs.module.css";
import "./App.css"
import Dog from './Components/dog'
import Robotics from './Components/robotics'
import RocketryModal from "./Components/rocketModal";
import Africa from './Components/africa';
import Dance from './Components/dancing';
import Chess from './Components/chess';
import Reading from './Components/reading';
import Hiking from "./Components/hiking";
import Soccer from "./Components/soccer";
import Basketball from "./Components/basketball";

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

const UserStatsGraphs = () => {

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
              {/* <span className="user-members">{user.members} members</span> */}
              
              {
                user.name === 'Robotics' ? <Robotics/> 
                : user.name === 'Rocketry' ? <RocketryModal/> 
                : user.name === 'Dogs' ? <Dog/> 
                : user.name === 'African & Caribbean Association' ? <Africa/> 
                : user.name === 'Dancing' ? <Dance/> 
                : user.name === 'Chess' ? <Chess/> 
                : user.name === 'Reading' ? <Reading/> 
                : user.name === 'Hiking' ? <Hiking/> 
                : user.name === 'Soccer' ? <Soccer/> 
                : <Basketball/>
              }
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
};

export { USERS };
export default UserStatsGraphs;
