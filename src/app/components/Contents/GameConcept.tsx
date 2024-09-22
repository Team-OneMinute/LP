import React from "react";
import styled from "styled-components";
import DescriptionCard from "../Card/DescriptionCard";

const GameConcept: React.FC = () => {
  return (
    <ContentContainer>
      <TitleWrapper>Real-Time Reward Ranking</TitleWrapper>
      <DescriptionSection>
        <DescImgArea>
          <DescImg src="/gameplays.png" alt="Game Concept" />
        </DescImgArea>
        <DescArea>
          <DescriptionCard
            title="Bet & Play"
            numberText="01"
            description="Place your bets to play the game. Use your skills to aim for a high score."
          />
        </DescArea>
      </DescriptionSection>
      <DescriptionSection>
        <DescArea>
          <DescriptionCard
            title="Add to the Reward Pool"
            numberText="02"
            description="The bets are added to the reward pool, preparing for distribution as ranking rewards."
          />
        </DescArea>
        <DescImgArea>
          <DescImg src="/money.png" alt="Game Concept" />
        </DescImgArea>
      </DescriptionSection>
      <DescriptionSection>
        <DescImgArea>
          <DescImg src="/rankingearn.png" alt="Game Concept" />
        </DescImgArea>
        <DescArea>
          <DescriptionCard
            title="Update Ranking"
            numberText="03"
            description="Each time you update your ranking, you instantly receive rewards based on your current rank."
          />
        </DescArea>
      </DescriptionSection>
    </ContentContainer>
  );
};

export default GameConcept;

// スタイリング部分
const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between; /* 横並びで左右対称に配置 */
  align-items: center; /* イメージとCardを上下中央に揃える */
  margin-top: 7%; /* 上下にゆとりを持たせる */
  margin-bottom: 7%; /* 下にもゆとりを持たせる */
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column; /* モバイルでは縦並びに */
    align-items: center;
    margin-top: 10%; /* モバイル向けにはさらにゆとりを追加 */
    margin-bottom: 10%; /* 下のゆとりも増やす */
  }
`;

const DescImgArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid white; /* 白いアンダーラインを追加 */
  padding-bottom: 10px; /* 画像とアンダーラインの間に余白を追加 */
`;

const DescImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const DescArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  position: relative;
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
