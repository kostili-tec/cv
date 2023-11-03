import { observer } from 'mobx-react-lite';

import ProjectsStore from '@/store/projectsStore';
import { ReactIcon, HTMLIcon, JSIcon, CSSIcon } from '../../Icons';
import { ProjectsBarItem } from '../ProjectsBarItem/ProjectsBarItem';
import { CustomCheckboxState } from '../../../shared/types';
import classes from './ProjectsBarItems.module.scss';

export const ProjectsBarItems = observer(() => {
  const handleClick = (checkboxName: keyof CustomCheckboxState) => {
    ProjectsStore.setCheckbox(checkboxName);
  };
  return (
    <div className={classes.projectBarItems}>
      <ProjectsBarItem
        icon={<ReactIcon checked={ProjectsStore.checkBoxes.React} />}
        checkboxName="React"
        handleClick={handleClick}
        checked={ProjectsStore.checkBoxes.React}
      />
      <ProjectsBarItem
        icon={<JSIcon checked={ProjectsStore.checkBoxes.JS} />}
        checkboxName="JS"
        handleClick={handleClick}
        checked={ProjectsStore.checkBoxes.JS}
      />
      <ProjectsBarItem
        icon={<HTMLIcon checked={ProjectsStore.checkBoxes.HTML} />}
        checkboxName="HTML"
        handleClick={handleClick}
        checked={ProjectsStore.checkBoxes.HTML}
      />
      <ProjectsBarItem
        icon={<CSSIcon checked={ProjectsStore.checkBoxes.CSS} />}
        checkboxName="CSS"
        handleClick={handleClick}
        checked={ProjectsStore.checkBoxes.CSS}
      />
    </div>
  );
});
