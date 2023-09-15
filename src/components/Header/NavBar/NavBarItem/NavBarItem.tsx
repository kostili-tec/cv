import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavBarItemProps {
  className: string;
  text: string;
  link: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({ text, className, link }) => {
  return (
    <li className={className}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  );
};
