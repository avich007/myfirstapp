import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Todo">Todo</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
      </ul>

      <h1>This is Home Page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
