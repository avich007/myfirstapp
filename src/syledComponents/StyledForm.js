import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid black;
  padding: 15px;
  margin: 50px auto;
  row-gap: 15px;
  border-radius: 10px;

  & label {
    font-weight: bold;
    color: ${(props) => (props.$isValid ? "black" : "red")};
  }

  & input {
    width: 60%;
    outline: none;
    padding: 5px;
    border: ${(props) =>
      props.$isValid ? "1px solid black" : "1px solid red"};
  }

  & button {
    width: 20%;
    padding: 5px;
    border-radius: 10px;
    border: none;
    background-color: #6792d4;
  }

  & button:hover {
    cursor: pointer;
    background-color: #477aca;
    color: white;
  }
`;

export default StyledForm;
