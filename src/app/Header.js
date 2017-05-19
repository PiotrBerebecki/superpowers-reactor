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
            <NavItem><NavMenuLink exact to="/">latest</NavMenuLink></NavItem>
            <NavItem>
              <NavMenuLink to="/trending">trending</NavMenuLink>
            </NavItem>
            <NavItem><NavMenuLink to="/top">top</NavMenuLink></NavItem>
          </NavList>
        </Nav>
      </NavContainer>
    </HeaderWrapper>
  );
}

export default Header;
