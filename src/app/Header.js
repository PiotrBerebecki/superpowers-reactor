import React from 'react';

import {
  HeaderWrapper,
  NavContainer,
  NavMenuLink,
  Nav,
  Logo,
  NavList,
  NavItem,
} from './../styled';

import logo from './superhero.svg';

function Header() {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Nav>
          <Logo src={logo} />
          <NavList>
            <NavItem><NavMenuLink exact to="/">Popular</NavMenuLink></NavItem>
            <NavItem>
              <NavMenuLink to="/latest">Latest</NavMenuLink>
            </NavItem>
            <NavItem>
              <NavMenuLink to="/favourite">Favourite</NavMenuLink>
            </NavItem>
          </NavList>
        </Nav>
      </NavContainer>
    </HeaderWrapper>
  );
}

export default Header;
