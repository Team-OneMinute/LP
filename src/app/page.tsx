"use client";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameWorld from "./components/GameWorld";
import GameConcept from "./components/GameConcept";
import RoadMap from "./components/RoadMap";
import Navigate from "./components/Navigate";

export default function Home() {
  return (
    <AllContent>
      <Header />
      <GameWorld />
      <GameConcept />
      <RoadMap />
      <Navigate />
      <Footer />
    </AllContent>
  );
}

const AllContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

