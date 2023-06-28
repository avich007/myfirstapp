import React, { useState, useEffect } from "react";
import "./User.css";
import axios from "axios";
import UserComp from "../../components/usercomp/UserComp";

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const displayUsers = users.map((user) => (
    <UserComp key={user.id} userData={user} />
  ));

  return <div className="usercontainer">{displayUsers}</div>;
};

export default User;
