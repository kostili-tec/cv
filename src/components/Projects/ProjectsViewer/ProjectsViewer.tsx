import { ProjectsTabs } from './ProjectsTabs/ProjectsTabs';
import classes from './ProjectsViewer.module.scss';

export const ProjectsViewer = () => {
  return (
    <div className={classes.viewer}>
      <ProjectsTabs />
    </div>
  );
};
