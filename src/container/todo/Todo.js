import React, { useState } from "react";
import Form from "../../components/form/Form";
import TodoList from "../../components/todolist/TodoList";
import Dummy1 from "../../components/dummy1/Dummy1";
import Dummy2 from "../../components/dummy2/Dummy2";
import TodoContext from "../../store/todo-context";
import { Link } from "react-router-dom";

const Todo = () => {
  const initialState = [
    {
      id: 1,
      value: "Finish Today's Work",
    },
    {
      id: 2,
      value: "Go for Shopping",
    },
  ];

  const [todoData, setTodoData] = useState(initialState);

  return (
    <>
      <TodoContext.Provider
        value={{ todoData: todoData, setTodoData: setTodoData }}
      >
        <Dummy1 />
        <Dummy2 />
      </TodoContext.Provider>
    </>
  );
};

export default Todo;
