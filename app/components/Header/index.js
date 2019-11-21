import React from 'react';
import Nav from 'components/Header/navbar';
import NavTop from 'components/Header/navbarTop';
function Header() {
  return (
    <header className="header">
      <NavTop />
      <Nav />
    </header>
  );
}

export default Header;
