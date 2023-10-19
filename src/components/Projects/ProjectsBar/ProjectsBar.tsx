import { ProjectsBarItems } from '../ProjectsBarItems/ProjectsBarItems';
import classes from './ProjectsBar.module.scss';

export const ProjectsBar = () => {
  return (
    <div className={classes.projectBar}>
      <div className={classes.projectBarName}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" fill="white" />
        </svg>
        <span>projects</span>
      </div>
      <div>
        <ProjectsBarItems />
      </div>
    </div>
  );
};
