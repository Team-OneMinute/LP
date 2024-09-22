import React from "react";
import styled from "styled-components";

const RoadMap: React.FC = () => {
  return (
    <ContentContainer>
      <TitleWrapper>Roadmap</TitleWrapper>
      <ImageWrapper>
        <GameImage src="/roadmap.png" alt="Game Concept" />
      </ImageWrapper>
    </ContentContainer>
  );
};

export default RoadMap;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #000;
  padding: 5vh 10%;
  text-align: center;
`;

const TitleWrapper = styled.h2`
  text-align: left;
  color: #fff;
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
  img {
    width: 200%; /* 基本サイズ（PC用） */
    max-width: 600px; /* PCでの最大幅 */
    height: auto; /* 比率を保ちながら高さを自動調整 */

    /* モバイルサイズの調整 */
    @media (max-width: 768px) {
      width: 90%; /* モバイル:幅を90%に */
      max-width: none; /* 最大幅の制限を解除 */
    }
  }
`;

const GameImage = styled.img`
  max-width: 70%;
  height: auto;
  object-fit: contain;
`;