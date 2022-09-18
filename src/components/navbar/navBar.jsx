import React from 'react';
import NavMenu from './navMenu';
import { navStyles } from './styles';

const NavBar = () => {
  return (
    <div className={navStyles.bar}>
      <div className={navStyles.title}>sv barleague</div>
      <NavMenu />
    </div>
  );
};

export default NavBar;
