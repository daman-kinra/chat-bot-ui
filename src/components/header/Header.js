import React from "react";
import styled from "styled-components";

function Header() {
  return <MainHeaderCont></MainHeaderCont>;
}
const MainHeaderCont = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.4);
  border-top: 1px solid lightgray;
`;
export default Header;
