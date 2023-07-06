import React, { useContext } from "react";
import { StyledTodoDiv, StyledStack } from "../../syledComponents/StyledTodo";
import { Chip } from "@mui/material";
import TodoContext from "../../store/todo-context";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  const handleDelete = (id) => {
    todoCtx.setTodoData((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
  };

  const todoListItems = todoCtx.todoData?.map((item) => (
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
      <label>Pending Tasks ({todoCtx.todoData.length})</label>
      {todoListItems}
    </StyledTodoDiv>
  );
};

export default TodoList;
