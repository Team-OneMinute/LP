import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return <FooterContainer>this is footer</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2vh 10%;
  text-align: center;
  margin-top: auto;
  position: relative;
`;
