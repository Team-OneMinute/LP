"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import Header from "./components/Contents/Header";
import GameWorld from "./components/Contents/GameWorld";
import GameConcept from "./components/Contents/GameConcept";
import RoadMap from "./components/Contents/RoadMap";
import Navigate from "./components/Contents/Navigate";
import GameType from "./components/Contents/GameType";

export default function Home() {
  // HeaderのLinker
  const AboutRef = useRef<HTMLDivElement>(null);
  const RoadMapRef = useRef<HTMLDivElement>(null);
  const LinkRef = useRef<HTMLDivElement>(null);

  return (
    <AllContent>
      <Header AboutRef={AboutRef} RoadMapRef={RoadMapRef} LinkRef={LinkRef} />
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
    </AllContent>
  );
}

const AllContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
