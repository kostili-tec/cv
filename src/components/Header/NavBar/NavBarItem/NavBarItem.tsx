import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBarItem.module.scss';

interface NavBarItemProps {
  text: string;
  link: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({ text, link }) => {
  return (
    <li className={classes.li}>
      <NavLink className={classes.link} to={link}>
        {text}
      </NavLink>
    </li>
  );
};
