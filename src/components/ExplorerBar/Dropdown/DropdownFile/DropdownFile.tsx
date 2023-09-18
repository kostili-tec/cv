import { FC } from 'react';
import { FileIcon } from '@/components/Icons/FileIcon';
import classes from './DropdownFile.module.scss';

type DropdownItemProps = {
  label: string;
};

export const DropdownFile: FC<DropdownItemProps> = ({ label }) => {
  return (
    <div className={classes.container}>
      <FileIcon />
      <span>{label}</span>
    </div>
  );
};
