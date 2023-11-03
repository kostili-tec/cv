import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { ReactIcon, HTMLIcon, JSIcon, CSSIcon } from '../../Icons';
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
        icon={<JSIcon checked={Explorer.checkBoxes.JS} />}
        checkboxName="JS"
        handleClick={handleClick}
        checked={Explorer.checkBoxes.JS}
      />
      <ProjectsBarItem
        icon={<HTMLIcon checked={Explorer.checkBoxes.HTML} />}
        checkboxName="HTML"
        handleClick={handleClick}
        checked={Explorer.checkBoxes.HTML}
      />
      <ProjectsBarItem
        icon={<CSSIcon checked={Explorer.checkBoxes.CSS} />}
        checkboxName="CSS"
        handleClick={handleClick}
        checked={Explorer.checkBoxes.CSS}
      />
    </div>
  );
});
