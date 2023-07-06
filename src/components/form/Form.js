import React, { useRef, useState, useContext } from "react";
import StyledForm from "../../syledComponents/StyledForm";
import TodoContext from "../../store/todo-context";

const Form = () => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const todoCtx = useContext(TodoContext);

  const handleChange = () => {
    inputRef.current.value.trim().length !== 0 && setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length !== 0) {
      const todoItem = inputRef.current.value;
      todoCtx.setTodoData((prevState) => {
        const lastItem = prevState.findLast((item) => item);
        return [
          ...prevState,
          { id: lastItem ? lastItem.id + 1 : 1, value: todoItem },
        ];
      });
    } else {
      setIsValid(false);
    }

    inputRef.current.value = "";
  };

  return (
    <StyledForm $isValid={isValid} onSubmit={handleSubmit}>
      <label>Enter a Todo Item</label>
      <input type="text" ref={inputRef} onChange={handleChange}></input>
      <button>Submit</button>
    </StyledForm>
  );
};

export default Form;
