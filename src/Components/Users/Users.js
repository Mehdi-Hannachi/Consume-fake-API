import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setUsers(res.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <p>
        {users.map((user, key) => (
          <div>
            <Link to={`/profile/${user.id}`}>
              <span key={key}>{user.name}</span>
            </Link>
          </div>
        ))}
      </p>
    </div>
  );
};

export default Users;
