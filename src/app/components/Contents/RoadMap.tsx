import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const RoadMap: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // モバイルかどうかを判定

  return (
    <ContentContainer>
      <TitleWrapper>Roadmap</TitleWrapper>
      <ImageWrapper>
        <GameImage
          src={isMobile ? "/roadmap_phone.png" : "/roadmap_pc.png"}
          alt="Game Roadmap"
        />
      </ImageWrapper>
    </ContentContainer>
  );
};

export default RoadMap;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 5vh 10%;
  text-align: center;
`;

const TitleWrapper = styled.h2`
  text-align: left;
  color: #000;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const GameImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;
