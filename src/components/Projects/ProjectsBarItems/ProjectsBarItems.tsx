import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { ReactIcon, HTMLIcon } from '../../Icons';
import { ProjectsBarItem } from '../ProjectsBarItem/ProjectsBarItem';
import { CustomCheckboxState } from '../../../shared/types';
import classes from './ProjectsBarItems.module.scss';

export const ProjectsBarItems = observer(() => {
  const handleClick = (checkboxName: keyof CustomCheckboxState) => {
    Explorer.setCheckbox(checkboxName);
  };
  return (
    <div className={classes.projectBarItems}>
      <ProjectsBarItem
        icon={<ReactIcon checked={Explorer.checkBoxes.React} />}
        checkboxName="React"
        handleClick={handleClick}
        checked={Explorer.checkBoxes.React}
      />
      <ProjectsBarItem
        icon={<HTMLIcon checked={Explorer.checkBoxes.HTML} />}
        checkboxName="HTML"
        handleClick={handleClick}
        checked={Explorer.checkBoxes.HTML}
      />
    </div>
  );
});
