import React from "react";
import styled from "styled-components";
import Card from "./Card";

const GameConcept: React.FC = () => {
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
              src="/icons/TimeRankingBattle_icon.png"
              alt="Game Concept"
            />
          </GameTypeIconWrapper>
          <GameTypeTitle>Countdown Ranking</GameTypeTitle>
          <GameTypeDescription>
            Compete in a time-limited ranking challenge! Try for the highest
            score as many times as you can during the set period. After the
            countdown ends, you’ll receive rewards based on your final ranking.
          </GameTypeDescription>
        </RankingTypeArea>
        <JackpotTypeArea>
          <GameTypeIconWrapper>
            <GameTypeIcon
              src="/icons/jackpotBattle_icon.png"
              alt="Game Concept"
            />
          </GameTypeIconWrapper>
          <GameTypeTitle>Real-Time Reward Ranking</GameTypeTitle>
          <GameTypeDescription>
            This ranking resets after a set period, but unlike the Countdown
            Ranking, you receive instant rewards whenever you update your rank.
            As time goes on, it becomes harder to climb the rankings, so
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
      <TitleWrapper>Real-Time Reward Ranking</TitleWrapper>
      <RankingDistribution>
        <Card title={1} text="Bet for play" />
        <Card title={2} text="Store to pools" />
        <Card title={3} text="If you update ranking, you will earn." />
      </RankingDistribution>
      <ImageWrapper>
        <GameImage src="/gameconcept.png" alt="Game Concept" />
      </ImageWrapper>
    </ContentContainer>
  );
};

export default GameConcept;

const RankingDistribution = styled.div`
  display: flex;
  justify-content: space-between; /* カード間のスペースを均等に */
  flex-wrap: wrap; /* 画面が狭くなったらカードが折り返す */
  gap: 10px; /* カード間にスペースを追加 */
  padding: 20px;

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column; /* モバイルではカードを縦に並べる */
    align-items: center; /* カードを中央揃えに */
  }
`;

const GameTextWrapper = styled.div`
  font-size: 1.5rem;
  text-align: left;
`;

const ContentContainer = styled.div`
  position: relative;
  flex: 1;
  background-color: #000;
  padding: 5vh 10%;
  text-align: center;

  /* 右上の三角形 */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 250px; /* 幅を指定 */
    height: 250px; /* 高さを指定 */
    background: linear-gradient(
      to top left,
      /* グラデーションの方向 */ rgba(211, 211, 211, 1) 1%,
      /* グレーから黒 */ rgba(0, 0, 0, 1) 30%
    );
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    transform: rotate(-90deg); /* 左に90度回転 */

    @media (max-width: 768px) {
      width: 80px; /* モバイルでは三角形を小さくする */
      height: 80px;
    }
  }
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

const ParagraphWrapper = styled.p`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GameTypeDescription = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

const TextWrapper = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
`;
