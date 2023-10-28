import { FC } from 'react';

import { CustomCheckbox } from '../../Icons';
import { CustomCheckboxState } from '../../../shared/types';
import classes from './ProjectsBarItem.module.scss';

interface ProjectsBarItemProps {
  icon: React.ReactNode;
  checkboxName: keyof CustomCheckboxState;
  handleClick: (checkboxName: keyof CustomCheckboxState) => void;
}

export const ProjectsBarItem: FC<ProjectsBarItemProps> = ({ checkboxName, icon, handleClick }) => {
  return (
    <div className={classes.item} onClick={() => handleClick(checkboxName)}>
      <label className={classes.label} htmlFor="">
        <CustomCheckbox checkboxName={checkboxName} />
        {icon}
        {checkboxName}
      </label>
    </div>
  );
};
