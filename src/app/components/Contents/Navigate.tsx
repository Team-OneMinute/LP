import React from "react";
import styled from "styled-components";

const Navigate: React.FC = () => {
  const TelegramBotURL = "https://t.me/utopia_ton_bot/app";
  const TelegramChannelURL = "https://t.me/utopia_ton_official_channel";
  const XURL = "https://x.com/utopiaton/";

  const onClickHandler = (event: string) => {
    switch (event) {
      case "play":
        window.open(TelegramBotURL, "_blank");
        break;
      case "TelegramChannel":
        window.open(TelegramChannelURL, "_blank");
        break;
      case "X":
        window.open(XURL, "_blank");
        break;
      default:
        console.log("Unknown event:", event);
    }
  };

  return (
    <ContentContainer>
      <TitleWrapper>Our Game</TitleWrapper>
      <GameNavigationContent>
        <GameIconArea>
          <GameIconImg src="/utopia_icon.png" />
        </GameIconArea>
        <GameNavigationArea>
          <SubTitle>Utopia</SubTitle>
          <GameDescription>
            Utopia is a competitive ranking game where the excitement builds as
            you climb the leaderboard.
          </GameDescription>
          <GameDescription>
            Play for the thrill, and win big rewards!
          </GameDescription>
          <GameNavigation>
            <PlayButtonArea>
              <PlayButton onClick={() => onClickHandler("play")}>
                PLAY
              </PlayButton>
            </PlayButtonArea>
            <PlayQRCodeArea>
              <PlayQRCodeImg src="TelegramQR.png" />
            </PlayQRCodeArea>
          </GameNavigation>
        </GameNavigationArea>
        <SnsArea>
          <SubTitle>SNS</SubTitle>
          <SnsIcons>
            <TelegramChannelArea
              onClick={() => onClickHandler("TelegramChannel")}
            >
              <TelegramChannelImg src="/icons/Telegram_icon.png" />
              <SnsText>Channel</SnsText>
            </TelegramChannelArea>
            <XArea onClick={() => onClickHandler("X")}>
              <XImg src="/icons/X_icon.png" />
              <SnsText>X</SnsText>
            </XArea>
          </SnsIcons>
        </SnsArea>
      </GameNavigationContent>
    </ContentContainer>
  );
};

export default Navigate;

const GameNavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const GameIconArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameIconImg = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px;
  }
`;
const GameNavigationArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;
const SubTitle = styled.div`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const GameDescription = styled.p`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const GameNavigation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const PlayButtonArea = styled.div`
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const PlayButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const PlayQRCodeArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayQRCodeImg = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
const SnsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
const SnsIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const TelegramChannelArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
`;

const TelegramChannelImg = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const XArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const XImg = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

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

const SnsText = styled.span`
  color: #fff;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
