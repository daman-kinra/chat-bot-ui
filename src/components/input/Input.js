import React from "react";
import styled from "styled-components";
function Input() {
  return (
    <MainInputCont>
      <InputField placeholder="Ask your Question"></InputField>
      <AskButton
        onClick={() => {
          console.log("Hello");
        }}
      >
        Ask
      </AskButton>
    </MainInputCont>
  );
}
const MainInputCont = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid lightgray;
`;
const InputField = styled.input`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  width: 70%;
  min-height: 5vh;
  outline: 0;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 20px;
  border: 1px solid lightgray;
  transition: 0.3s ease;
  &:hover {
    background-color: #edeef7;
  }
  &:focus {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
const AskButton = styled.button`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  background-color: #b4aee8;
  border: 1px solid lightgray;
  outline: 0;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  width: 20%;
  height: 5.5vh;
  transition: 0.3s ease;
  &:hover {
    background-color: #ffaec0;
  }
  &:focus {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
export default Input;
