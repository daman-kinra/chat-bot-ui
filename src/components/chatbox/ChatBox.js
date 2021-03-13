import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import bgimg from "./chatbot.jpg";
import { CgClose } from "react-icons/cg";

function ChatBox() {
  const [QNA, setQNA] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [AnsPopup, setAnsPopup] = useState(false);
  return (
    <MainChatBoxCont>
      {AnsPopup ? (
        <Popup>
          <InnerPopup>
            <CgClose
              size="2.5rem"
              className="cross"
              onClick={() => {
                setAnsPopup(false);
              }}
            />

            <ExtentedQuestion>
              <h2>Question:</h2>
              <p className="extented-ques">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci architecto optio, quam eligendi quisquam modi cum rem
                praesentium inventore repellat eum. Eius veniam aliquam
                provident delectus! Tempore nam ipsum tempora?
              </p>
            </ExtentedQuestion>
            <ExtentedAnswer>
              <h2>Answer:</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                asperiores itaque iure reiciendis temporibus iusto eius mollitia
                nam doloribus ad natus totam explicabo, cupiditate nemo culpa
                quidem veniam ipsa labore voluptates sint praesentium? Ipsum
                odit, porro perspiciatis accusantium labore delectus doloremque
                exercitationem? Numquam ipsam veniam accusantium voluptatum
                exercitationem recusandae, in laboriosam dolorum eos saepe natus
                iste magni, alias totam unde delectus culpa illo ratione officia
                pariatur similique obcaecati impedit? Placeat doloribus officia
                veniam necessitatibus. Voluptate ipsa rerum corporis et fuga
                cupiditate numquam commodi consectetur minima id laborum, totam,
                deserunt culpa. Hic molestias fuga praesentium iure quidem
                repellat expedita architecto amet!
              </p>
            </ExtentedAnswer>
          </InnerPopup>
        </Popup>
      ) : (
        ""
      )}
      <BgImg src={bgimg}></BgImg>
      <AnsArea>
        {QNA.map((item, pos) => {
          return (
            <QNAbox
              key={pos}
              onClick={() => {
                setAnsPopup(true);
              }}
            >
              <Ques>
                <h2>Question:</h2>
                <p className="ques">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  beatae. Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </Ques>
              <Ans>
                <h2>Answer: </h2>
                <p className="ans">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat cum assumenda quis illo dolorum accusamus
                  exercitationem quasi harum obcaecati veniam commodi amet
                  facere fugit, vero maxime, veritatis animi. Sint, adipisci
                  labore esse nam laborum quas similique exercitationem error
                  natus repudiandae saepe ad minima aliquid assumenda commodi,
                  numquam unde eius fuga tempora amet distinctio dolores?
                  Officia nulla nobis porro ipsum possimus cumque accusamus
                  consequatur, natus veniam in cupiditate quaerat facilis ea?
                  Velit, veritatis a culpa, placeat neque repellat dolore animi,
                  eaque dolorem ex quidem! In, voluptates odio voluptatem nulla
                  magni, ratione doloremque, hic ipsum iusto molestiae sunt
                  dignissimos facere natus quam?
                </p>
                <Span>read more</Span>
              </Ans>
            </QNAbox>
          );
        })}
      </AnsArea>
    </MainChatBoxCont>
  );
}

const ExtentedQuestion = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 50px;
  margin-top: 20px;
  position: relative;
  &:after {
    position: absolute;
    bottom: -5%;
    content: "";
    width: 90%;
    height: 1px;
    background-color: gray;
  }
`;
const ExtentedAnswer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 50px;
  margin-top: 40px;
`;
const openAnimation = keyframes`
from{
  opacity:0;
  transform: scale(0,0);
}
to{
  opacity:1;
  transform:scale(1,1)
}
`;

const InnerPopup = styled.div`
  position: relative;
  width: 85%;
  height: 75%;
  background-color: #fff;
  transition: 0.8s ease;
  border-radius: 20px;
  @media (max-width: 700px) {
    background-color: red;
  }
  animation: ${openAnimation} 0.5s forwards;
`;
const Span = styled.span`
  position: absolute;
  right: 2%;
  bottom: 3%;
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  font-weight: bold;
  text-decoration: underline;
`;
const Ques = styled.div`
  width: 100%;
  flex: 0.4;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  color: rgba(0, 0, 0, 1);
`;
const Ans = styled.div`
  position: relative;
  width: 100%;
  flex: 0.6;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
`;
const Popup = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  transition: 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${openAnimation} 0.2s forwards;
`;
const MainChatBoxCont = styled.div`
  height: calc(100vh - 10vh - 10vh);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BgImg = styled.img`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const AnsArea = styled.div`
  width: 80%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px 0px 0px 10px;
  backdrop-filter: blur(6px);
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.45), 0px 3px 4px rgba(0, 0, 0, 0.45);
  overflow-y: auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
`;
const QNAbox = styled.div`
  min-height: 150px;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.04, 1.04);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
export default ChatBox;
