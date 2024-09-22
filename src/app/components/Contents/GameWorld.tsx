"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import WorldObj from "../World/WorldObj";

const GameWorld: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight * 0.75,
      });
    };

    updateSize(); // 初期サイズを設定
    window.addEventListener("resize", updateSize); // リサイズイベントリスナーの追加

    return () => window.removeEventListener("resize", updateSize); // クリーンアップ
  }, []);
  return (
    <GameWorldContainer>
      <ThreeJSWrapper>
        <WorldObj width={windowSize.width} height={windowSize.height} />
      </ThreeJSWrapper>
      <TextOverlay>
        <Title>UTOPIA is ranking battle game</Title>
        <Paragraph>
          Awaiting on this unknown star is a great power that everyone longs
          for.
        </Paragraph>
        <Paragraph>
          Everyone has the chance to seize this power and triumph in many
          battles. In this world of mysteries, your destiny is in your own
          hands.
        </Paragraph>
        <Paragraph>
          In this world of mysteries, your destiny is in your own hands.
        </Paragraph>
      </TextOverlay>
    </GameWorldContainer>
  );
};

export default GameWorld;

const GameWorldContainer = styled.div`
  width: 100%;
  height: 100vh; /* 画面全体の高さを占める */
  background-color: #000;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 80vh; /* 画面全体の高さを占める */
  }
`;

const ThreeJSWrapper = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: -30%; /* 左に移動 */

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    left: -20%;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  right: 15%;
  color: #fff;
  font-size: 1.5rem;
  text-align: left;
  max-width: 40%;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 4vw;
    max-width: 90%;
    right: 5%;
    padding: 1rem;
    text-align: right;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;
