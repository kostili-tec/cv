import { ProjectsBar } from '../../components/Projects/ProjectsBar/ProjectsBar';
import { ProjectsViewer } from '../../components/Projects/ProjectsViewer/ProjectsViewer';
import classes from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  return (
    <section className={classes.projects}>
      <ProjectsBar />
      <ProjectsViewer />
    </section>
  );
};

export default ProjectsPage;
