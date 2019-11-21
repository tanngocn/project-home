import React, { useState } from 'react';
import { themes } from 'components/themes/_variables';
import NavLink from 'components/Header/navbar/NavLink';
import NavItem from 'components/Header/navbar/NavItem';
import NavList from 'components/Header/navbar/NavList';
import NavWrapper from 'components/Header/navbar/NavWrapper';
import routes from 'components/Header/navbar/contanst';
// Common
import ButtonToggle from 'components/Common/Button';

function Nav() {
  const [show, setShow] = useState(false);
  const heightNavItem = 4.4;
  return (
    <NavWrapper themes={themes}>
      <ButtonToggle
        type="button"
        themes={themes}
        className="btn--toggle"
        onClick={() => setShow(!show)}
      >
        <span className={show ? 'active' : ''} />
      </ButtonToggle>
      <NavList
        themes={themes}
        className={show ? '' : 'hide'}
        coefficient={heightNavItem * routes.length}
      >
        {routes.map(item => (
          <NavItem key={item.id} themes={themes}>
            <NavLink themes={themes} to={item.to} height={heightNavItem}>
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
}

export default Nav;
