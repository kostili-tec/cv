import { ChangeEvent, FC, useState } from 'react';

import classes from './ProjectsBarItem.module.scss';
import { CustomCheckbox } from '../../Icons';

interface ProjectsBarItemProps {
  label: string;
  icon: React.ReactNode;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectsBarItem: FC<ProjectsBarItemProps> = ({ label, icon }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={classes.item}>
      <label className={classes.label} htmlFor="">
        <CustomCheckbox isChecked={isChecked} onClick={handleClickCheckbox} />
        {icon}
        {label}
      </label>
    </div>
  );
};
