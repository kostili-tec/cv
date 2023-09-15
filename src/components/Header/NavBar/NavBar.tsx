import classes from './NavBar.module.scss';
import { NavBarItem } from './NavBarItem/NavBarItem';

export const NavBar = () => {
  return (
    <>
      <p className={classes.name}>danil-porgoniy</p>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <NavBarItem className={classes.li} text="_hello" />
          <NavBarItem className={classes.li} text="_about-me" />
          <NavBarItem className={classes.li} text="_projects" />
          <NavBarItem className={classes.li} text="_contact-me" />
        </ul>
      </nav>
    </>
  );
};
