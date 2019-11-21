import React from 'react';
import { themes } from 'components/themes/_variables';
import NavLinkTop from 'components/Header/navbarTop/NavLink';
import NavItemTop from 'components/Header/navbarTop/NavItem';
import NavListTop from 'components/Header/navbarTop/NavList';
import NavWrapper from 'components/Header/navbarTop/NavWrapper';
import BoxBtn from 'components/Header/navbarTop/BoxBtn';
// Logo
import LogoLink from 'components/Header/navbarTop/logo/LogoLink';
import LogoImg from 'components/Header/navbarTop/logo/LogoImg';

import logo from 'images/logo.png';

function NavTop() {
  return (
    <NavWrapper themes={themes}>
      <NavListTop themes={themes}>
        <LogoLink to="/">
          <LogoImg src={logo} alt="logo" />
        </LogoLink>
        <BoxBtn>
          <NavItemTop themes={themes} className="top">
            <NavLinkTop to="/login" themes={themes}>
              Sign in
            </NavLinkTop>
          </NavItemTop>
          <NavItemTop themes={themes} className="top">
            <NavLinkTop to="/register" themes={themes}>
              Sign Up
            </NavLinkTop>
          </NavItemTop>
        </BoxBtn>
      </NavListTop>
    </NavWrapper>
  );
}

export default NavTop;
