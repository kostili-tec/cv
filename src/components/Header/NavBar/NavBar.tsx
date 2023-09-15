import classes from './NavBar.module.scss';
import { NavBarItem } from './NavBarItem/NavBarItem';
import { RoutePath, AppRoutes } from '@/config/RouterConfig';

interface NavRoute {
  link: string;
  text: string;
  className: string;
}

const NavItems: Record<AppRoutes, NavRoute> = {
  [AppRoutes.MAIN]: {
    className: classes.li,
    link: RoutePath.main,
    text: '_hello',
  },
  [AppRoutes.ABOUT]: {
    className: classes.li,
    link: RoutePath.about,
    text: '_about-me',
  },
  [AppRoutes.PROJECTS]: {
    className: classes.li,
    link: RoutePath.projects,
    text: '_projects',
  },
  [AppRoutes.CONTACTS]: {
    className: classes.li,
    link: RoutePath.contacts,
    text: '_contact-me',
  },
};

export const NavBar = () => {
  return (
    <>
      <p className={classes.name}>danil-porgoniy</p>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {Object.values(NavItems).map(({ className, link, text }) => (
            <NavBarItem className={className} link={link} text={text} key={text} />
          ))}
        </ul>
      </nav>
    </>
  );
};
