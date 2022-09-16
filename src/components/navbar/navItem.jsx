import React from 'react';
import { Link } from 'react-router-dom';
import { navStyles } from './styles';

const NavItem = ({ navlink }) => {
  const { title, display, path, id } = navlink;
  return (
    <Link to={path} className={navStyles.item}>
      {display}
    </Link>
  );
};

export default NavItem;
