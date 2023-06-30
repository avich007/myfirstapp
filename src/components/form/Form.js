import React, { useRef, useState } from "react";
import StyledForm from "../../syledComponents/StyledForm";

const Form = (props) => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const { setTodoData } = props;

  const handleChange = () => {
    inputRef.current.value.trim().length !== 0 && setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length !== 0) {
      setTodoData((prevState) => {
        return [
          ...prevState,
          { id: prevState.length + 1, value: inputRef.current.value },
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
