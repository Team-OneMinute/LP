import React from "react";
import styled from "styled-components";

const GameType: React.FC = () => {
    const gameTypeDescription = () => {
      return (
        <>
          <FreeGameTypeArea>
            <GameTypeIconWrapper>
              <GameTypeIcon src="/icons/Freeplay_icon.png" alt="Game Concept" />
            </GameTypeIconWrapper>
            <GameTypeTitle>Free Play</GameTypeTitle>
            <GameTypeDescription>
              Enjoy the game for free and earn in-game points! The points you
              collect here can be used to enter the Countdown Ranking or for
              various other purposes.
            </GameTypeDescription>
          </FreeGameTypeArea>
          <RankingTypeArea>
            <GameTypeIconWrapper>
              <GameTypeIcon
                src="/icons/CountdownRanking_icon.png"
                alt="Game Concept"
              />
            </GameTypeIconWrapper>
            <GameTypeTitle>Countdown Ranking</GameTypeTitle>
            <GameTypeDescription>
              Compete in a time-limited ranking challenge! Try for the highest
              score as many times as you can during the set period. After the
              countdown ends, you’ll receive rewards based on your final
              ranking.
            </GameTypeDescription>
          </RankingTypeArea>
          <JackpotTypeArea>
            <GameTypeIconWrapper>
              <GameTypeIcon
                src="/icons/JackpotRanking.png"
                alt="Game Concept"
              />
            </GameTypeIconWrapper>
            <GameTypeTitle>Real-Time Reward Ranking</GameTypeTitle>
            <GameTypeDescription>
              This ranking resets after a set period, but unlike the Countdown
              Ranking, you receive instant rewards whenever you update your
              rank. As time goes on, it becomes harder to climb the rankings, so
              periodic resets are necessary. Any remaining prize pool after the
              reset will be used for next Real-Time Reward Ranking initial
              rewards.
            </GameTypeDescription>
          </JackpotTypeArea>
        </>
      );
    };

    return (
      <ContentContainer>
        <TitleWrapper>Game Type</TitleWrapper>
        <GameTextWrapper>You can play 3 types of games.</GameTextWrapper>
        <GameTypeArea>{gameTypeDescription()}</GameTypeArea>
      </ContentContainer>
    );
};

export default GameType;

const TitleWrapper = styled.h2`
  text-align: left;
  color: #000;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  flex: 1;
  background-color: #fff;
  padding: 5vh 10%;
  text-align: center;
`;

const GameTextWrapper = styled.div`
  font-size: 1.5rem;
  color: #000;
  text-align: left;
`;

const GameTypeArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FreeGameTypeArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
`;

const RankingTypeArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
`;

const JackpotTypeArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
`;

const GameTypeIconWrapper = styled.div`
  width: 100px; /* デフォルトのアイコンサイズ */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 80px; /* スマホ用の縮小サイズ */
    height: 80px;
  }
`;

const GameTypeIcon = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const GameTypeTitle = styled.h3`
  color: #000;
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GameTypeDescription = styled.p`
  color: #000;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
