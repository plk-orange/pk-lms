import React from 'react';
import { navLinks } from '../../static/navLinks';
import NavItem from './navItem';
import { navStyles } from './styles';

const NavMenu = () => {
  return (
    <div className={navStyles.menu}>
      {navLinks.map((link) => (
        <NavItem key={link.id} navlink={link} />
      ))}
    </div>
  );
};

export default NavMenu;
