import { ReactIcon } from '../../Icons';
import { ProjectsBarItem } from '../ProjectsBarItem/ProjectsBarItem';
import classes from './ProjectsBarItems.module.scss';

export const ProjectsBarItems = () => {
  return (
    <div className={classes.projectBarItems}>
      <ProjectsBarItem icon={<ReactIcon checked={false} />} label="React" checked={true} />
    </div>
  );
};
