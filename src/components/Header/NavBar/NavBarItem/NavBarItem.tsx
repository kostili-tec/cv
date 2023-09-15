import { FC } from 'react';

interface NavBarItemProps {
  className: string;
  text: string;
}

export const NavBarItem: FC<NavBarItemProps> = ({ text, className }) => {
  return <li className={className}>{text}</li>;
};
