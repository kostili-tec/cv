import { FC } from 'react';

import { CustomCheckbox } from '../../Icons';
import { CustomCheckboxState } from '../../../shared/types';
import classes from './ProjectsBarItem.module.scss';

interface ProjectsBarItemProps {
  icon: React.ReactNode;
  checkboxName: keyof CustomCheckboxState;
  checked: boolean;
  handleClick: (checkboxName: keyof CustomCheckboxState) => void;
}

export const ProjectsBarItem: FC<ProjectsBarItemProps> = ({
  checkboxName,
  checked,
  icon,
  handleClick,
}) => {
  const checkedClasses = checked ? `${classes.checked} ${classes.label}` : classes.label;
  return (
    <div className={classes.item} onClick={() => handleClick(checkboxName)}>
      <label className={checkedClasses} htmlFor="">
        <CustomCheckbox checkboxName={checkboxName} />
        {icon}
        {checkboxName}
      </label>
    </div>
  );
};
