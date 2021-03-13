import React from "react";
import Header from "../header/Header";
import Chatbox from "../chatbox/ChatBox";
import Input from "../input/Input";
import styled from "styled-components";
function Chat() {
  return (
    <MainDiv>
      <Input />
      <Chatbox />
      <Header />
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Chat;
