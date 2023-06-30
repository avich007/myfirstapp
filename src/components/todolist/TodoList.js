import React from "react";
import { StyledTodoDiv, StyledStack } from "../../syledComponents/StyledTodo";
import { Chip } from "@mui/material";

const TodoList = (props) => {
  const { todoData, setTodoData } = props;

  const handleDelete = (id) => {
    const index = todoData.findIndex((todo) => todo?.id === id);
    setTodoData((prevState) => {
      const newTodo = { ...prevState };
      delete newTodo[index];
      return newTodo;
    });
  };

  const todoListItems = todoData?.map((item) => (
    <StyledStack key={item.id} direction="row" spacing={1}>
      <Chip
        label={item.value}
        onDelete={() => {
          handleDelete(item.id);
        }}
      />
    </StyledStack>
  ));

  return (
    <StyledTodoDiv>
      <label>Pending Tasks:</label>
      {todoListItems}
    </StyledTodoDiv>
  );
};

export default TodoList;
