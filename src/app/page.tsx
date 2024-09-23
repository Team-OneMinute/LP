"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./components/Contents/Header";
import GameWorld from "./components/Contents/GameWorld";
import GameConcept from "./components/Contents/GameConcept";
import RoadMap from "./components/Contents/RoadMap";
import Navigate from "./components/Contents/Navigate";
import GameType from "./components/Contents/GameType";
import FirstLoading from "./components/Contents/FirstLoading";

export default function Home() {
  // HeaderのLinker
  const AboutRef = useRef<HTMLDivElement>(null);
  const RoadMapRef = useRef<HTMLDivElement>(null);
  const LinkRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true); // 初期はロード中
  const [fadeIn, setFadeIn] = useState(false); // フェードイン用の状態

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeIn(true); // フェードインを開始
    }, 500); // ローディング時間を調整

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <AllContent $fadeIn={fadeIn}>
      {loading ? (
        <FirstLoading />
      ) : (
        <>
          <Header
            AboutRef={AboutRef}
            RoadMapRef={RoadMapRef}
            LinkRef={LinkRef}
          />
          <GameWorld />
          <div ref={AboutRef}>
            <GameType />
          </div>
          <GameConcept />
          <div ref={RoadMapRef}>
            <RoadMap />
          </div>
          <div ref={LinkRef}>
            <Navigate />
          </div>
        </>
      )}
    </AllContent>
  );
}

const AllContent = styled.div<{ $fadeIn: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  opacity: ${({ $fadeIn }) =>
    $fadeIn ? 1 : 0}; /* フェードインのアニメーション */
  transition: opacity 0.5s ease-in; /* フェードインの遷移時間 */
`;
