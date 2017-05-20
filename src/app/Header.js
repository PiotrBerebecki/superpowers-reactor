import React from 'react';

import {
  HeaderWrapper,
  NavContainer,
  NavMenuLink,
  Nav,
  NavList,
  NavItem,
} from './../styled';

function Header() {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Nav>
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
