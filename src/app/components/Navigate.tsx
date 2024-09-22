import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa"; // react-iconsからアイコンをインポート

const Navigate: React.FC = () => {
  return (
    <ContentContainer>
      <TitleWrapper>Let&apos;s Play</TitleWrapper>
      <NavigateArea>
        <NavigateItem>
          <NavigateLink href="https://example.com" target="_blank">
            Game Bot
            <IconWrapper>
              <FaArrowRight />
            </IconWrapper>
          </NavigateLink>
          <QRcode src="/tmpqr.png" alt="Game Bot QR Code" />
        </NavigateItem>
        <NavigateItem>
          <NavigateLink href="https://example.com" target="_blank">
            Official Channel
            <IconWrapper>
              <FaArrowRight />
            </IconWrapper>
          </NavigateLink>
          <QRcode src="/tmpqr.png" alt="Official Channel QR Code" />
        </NavigateItem>
        <NavigateItem>
          <NavigateLink href="https://example.com" target="_blank">
            X
            <IconWrapper>
              <FaArrowRight />
            </IconWrapper>
          </NavigateLink>
          <QRcode src="/tmpqr.png" alt="Twitter QR Code" />
        </NavigateItem>
      </NavigateArea>
    </ContentContainer>
  );
};

export default Navigate;

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

const NavigateArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavigateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const NavigateLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center; /* テキストとアイコンを縦方向で中央揃え */

  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.span`
  margin-left: 8px; /* アイコンとテキストの間にスペースを追加 */
  font-size: 1.2rem; /* アイコンのサイズをテキストと合わせる */
  display: flex;
  align-items: center; /* アイコンの中央揃え */
`;

const QRcode = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
