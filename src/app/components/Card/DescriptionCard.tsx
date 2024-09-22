import React from "react";
import styled from "styled-components";

interface ExplanationProps {
  title: string;
  numberText: string;
  description: string;
}

const DescriptionCard: React.FC<ExplanationProps> = ({
  title,
  numberText,
  description,
}) => {
  return (
    <ExplanationWrapper>
      <Header>
        <Title>{title}</Title>
        <Number>{numberText}</Number>
      </Header>
      <Divider />
      <Description>{description}</Description>
    </ExplanationWrapper>
  );
};

// Styled-components
const ExplanationWrapper = styled.div`
  background-color: #000;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 上下の要素をしっかり分けて配置 */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin: 5%;
  text-align: left; /* タイトルを左揃えに変更 */
`;

const Number = styled.span`
  font-size: 1.6rem;
  margin: 0;
  text-align: right; /* Numberテキストを右揃えに */
`;

const Divider = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1px solid white;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  text-align: left; /* 説明文を左詰めに */
  margin: 5%;
  align-self: flex-end; /* 説明文を右下に配置 */
`;

export default DescriptionCard;
