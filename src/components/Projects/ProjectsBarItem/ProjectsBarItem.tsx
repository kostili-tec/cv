import { ChangeEvent, FC } from 'react';

import classes from './ProjectsBarItem.module.scss';
import { CustomCheckbox } from '../../Icons';

interface ProjectsBarItemProps {
  label: string;
  icon: React.ReactNode;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectsBarItem: FC<ProjectsBarItemProps> = ({ label, icon }) => {
  return (
    <div className={classes.item}>
      <label className={classes.label} htmlFor="">
        <CustomCheckbox />
        {/* <input className={classes.label} type="checkbox" checked={checked} /> */}
        {icon}
        {label}
      </label>
      {/* <label htmlFor="">{label}</label> */}
    </div>
  );
};
