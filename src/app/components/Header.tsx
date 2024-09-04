import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <ProjectIcon src="/utopia_icon.png" alt="Project Icon" />
        <ProjectName>UTOPIA</ProjectName>
      </LeftSection>
      <RightSection>
        <PageLink href="#section1">Link 1</PageLink>
        <PageLink href="#section2">Link 2</PageLink>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ProjectIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

const ProjectName = styled.h1`
  font-size: 1.5rem;
  white-space: nowrap;
`;

const PageLink = styled.a`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
