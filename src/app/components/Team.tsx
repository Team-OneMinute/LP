import React from "react";
import styled from "styled-components";

const Team: React.FC = () => {
    return (
      <ContentContainer>
        <div>team</div>
      </ContentContainer>
    );
};

export default Team;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #000;
  padding: 5vh 10%;
  text-align: center;
`;
