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
        icon={<ReactIcon checked={false} />}
        checkboxName="React"
        handleClick={handleClick}
      />
      <ProjectsBarItem icon={<HTMLIcon />} checkboxName="HTML" handleClick={handleClick} />
    </div>
  );
});
