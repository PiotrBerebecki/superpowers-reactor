import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { media } from './theme';

export const HeaderWrapper = styled.header`
  ${/* padding-top: ${props => props.theme.spaceM}; */ ''}
  padding-left: ${props => props.theme.spaceS};
  padding-right: ${props => props.theme.spaceS};
  background-color: ${props => props.theme.colorPrimary};
  font-size: ${props => props.theme.fontSizeSmall};
  box-shadow: 0 1px 1px ${props => props.theme.colorBoxShadow},
              0px 2px 10px ${props => props.theme.colorBoxShadow};
`;

export const NavContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.widthContainer}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 1rem;
  width: 1.8em;
  height: 1.8rem;
  ${media.desktop`
    margin-right: 3rem;
  `}
`;

export const NavList = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavItem = styled.li`
  ${/* border: solid 3px pink; */ ''}
`;

export const NavMenuLink = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  color: ${props => props.theme.colorAccentOnPrimaryMuted};
  text-transform: uppercase;
  text-decoration: none;
  transition: color .2s;
  user-select: none;
  &:hover {
    color: ${props => props.theme.colorAccentOnPrimary};
  }
  &.${props => props.activeClassName} {
    color: ${props => props.theme.colorAccentOnPrimary};
  }
  &:after {
    content: '';
    display: block;
    border-bottom: solid 3px ${props => props.theme.colorAccentOnPrimary};
    padding-bottom: 0.9rem;
    transform: scaleX(0);
    transition: transform .2s;
  }
  &.${props => props.activeClassName}:after {
    transform: scaleX(1);
    transition: transform .2s;
  }
`;

export const MainWrapper = styled.main`
  color: ${props => props.theme.colorFontMain};
  font-size: ${props => props.theme.fontSizeSmall};
  font-weight: 300;
`;

export const MainContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.6rem;
  padding-bottom: 1rem;
  ${props => props.theme.widthContainer}
  ${media.desktop`
    padding-top: 1.6rem;
  `}
`;

export const Card = css`
  ${media.desktop`
    box-shadow: 0 1px 1px ${props => props.theme.colorBoxShadowLight},
                0px 2px 10px ${props => props.theme.colorBoxShadowLight};
  `}
`;

export const ErrorCard = styled.div`
  ${Card}
  padding: ${props => props.theme.spaceL} ${props => props.theme.spaceS};
  background-color: ${props => props.theme.colorWhiteBackground};
`;

export const PuzzleList = styled.ul`
  ${Card}
`;

export const PuzzleItemWrapper = styled.li`
  padding: ${props => props.theme.spaceM} ${props => props.theme.spaceM};
  border-bottom: solid 1px ${props => props.theme.colorPuzzleItemBorder};
  background-color: ${props => props.theme.colorWhiteBackground};

  ${media.desktop`
    padding: 1.5rem 1.5rem;
  `}

`;

export const PuzzleTitle = styled.h2`
  margin-bottom: ${props => props.theme.spaceS};
  color: ${props => props.theme.colorPrimary};
  font-size: ${props => props.theme.fontSizeLarge};
  text-transform: uppercase;
`;

export const PuzzleText = styled.p`
  margin-bottom: ${props => props.theme.spaceM};
`;

export const AnswerButton = styled.button`
  width: 9rem;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  background-color: ${props => props.theme.colorPrimary};
  color: ${props => props.theme.colorAccentOnPrimary};
  font-size: ${props => props.theme.fontSizeSmallXX};
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0em 0.1em 0.3em 0em rgba(0,0,0,0.3);
  transition: box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colorPrimaryLight};
    box-shadow: 0em 0.1em 0.4em 0em rgba(0,0,0,0.3);
  }

  &:active {
    background: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0em 0.2em 0.6em 0.1em rgba(0,0,0,0.3);
    transition: box-shadow 0.1s cubic-bezier(0.4,0,0.2,1);
  }
`;

export const AnswerText = styled.p`
  margin-top: ${props => props.theme.spaceM};
  padding: 1.5rem;
  background-color: ${props => props.theme.colorGreyBackground};
  border-radius: 3px;
`;
