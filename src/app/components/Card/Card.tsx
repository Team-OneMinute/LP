import React from "react";
import styled from "styled-components";

interface CardProps {
  title: number;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <CardContainer>
      <CardNumber>{title}</CardNumber>
      <CardDivider />
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 100px;
  background: linear-gradient(to right, #111, #555);
  border-radius: 15px;
  padding: 20px;
  color: white;

  /* モバイル対応 */
  @media (max-width: 768px) {
    width: 90%; /* モバイルでは画面幅の90%に拡大 */
    height: auto; /* モバイルでは高さを自動調整 */
    padding: 15px; /* モバイルではパディングを少し減らす */
  }
`;

const CardNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 20px;
`;

const CardDivider = styled.div`
  width: 2px;
  height: 100%;
  //background-color: #f07e3e; /* オレンジのライン */
  background-color: #666; /* オレンジのライン */
`;

const CardText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  flex-grow: 1;
`;

export default Card;
