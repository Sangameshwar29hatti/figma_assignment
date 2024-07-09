import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Royal Business. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
