import React from "react";
import styled from "styled-components";

const GameConcept: React.FC = () => {
  return <ContentContainer>this is second area</ContentContainer>;
};

export default GameConcept;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #000;
  padding: 5vh 10%;
  text-align: center;
`;
