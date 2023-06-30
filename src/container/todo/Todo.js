import React, { useState } from "react";
import Form from "../../components/form/Form";
import TodoList from "../../components/todolist/TodoList";

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
      <Form setTodoData={setTodoData} />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </>
  );
};

export default Todo;
