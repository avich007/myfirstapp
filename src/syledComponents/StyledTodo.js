import styled from "styled-components";
import { Stack } from "@mui/material";

export const StyledTodoDiv = styled.div`
  width: 60%;
  margin: 0px auto;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;

  & label {
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const StyledStack = styled(Stack)`
  margin: 15px auto;
  padding: 5px;
  border-radius: 5px;
`;
