import React from 'react';
import { NavMenuLink } from './../styled';

function Header() {
  return (
    <div>
      <NavMenuLink exact to="/latest">latest</NavMenuLink>
      <NavMenuLink exact to="/trending">trending</NavMenuLink>
      <NavMenuLink exact to="/top">top</NavMenuLink>
    </div>
  );
}

export default Header;
