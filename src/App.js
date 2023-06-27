import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserComp from "./components/usercomp/UserComp";

function App() {
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

  return <div className="App">{displayUsers}</div>;
}

export default App;
