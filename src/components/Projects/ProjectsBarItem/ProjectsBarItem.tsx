import { ChangeEvent, FC } from 'react';

import classes from './ProjectsBarItem.module.scss';

interface ProjectsBarItemProps {
  label: string;
  icon: React.ReactNode;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectsBarItem: FC<ProjectsBarItemProps> = ({ label, icon, checked }) => {
  return (
    <div className={classes.item}>
      <input type="checkbox" checked={checked} />
      <span>{icon}</span>
      <label htmlFor="">{label}</label>
    </div>
  );
};
