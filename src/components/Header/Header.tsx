import { NavBar } from "./NavBar/NavBar"

import classes from './Header.module.scss';

 
export const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar />
    </header>
  )
}
