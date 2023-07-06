import "./App.css";
import React from "react";
import Todo from "./container/todo/Todo";
import User from "./container/user/User";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/Todo", element: <Todo /> },
      { path: "/User", element: <User /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
