import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Royal Business</Logo>
    <Nav>
      <NavLink href="#">Projects</NavLink>
      <NavLink href="#">Business</NavLink>
      <NavLink href="#">Gallery</NavLink>
      <NavLink href="#">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
