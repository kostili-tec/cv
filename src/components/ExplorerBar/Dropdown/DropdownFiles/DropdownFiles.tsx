import { DropdownFile } from '../DropdownFile/DropdownFile';
import { AboutInfoArray } from '../../../../shared/about';
import { FC } from 'react';
import classes from './DropdownFiles.module.scss';

type DropdownFilesProps = {
  aboutInfoArray: AboutInfoArray;
  isOpened: boolean;
};

export const DropdownFiles: FC<DropdownFilesProps> = ({ aboutInfoArray, isOpened }) => {
  return (
    <div className={isOpened ? `${classes.files} ${classes.open}` : `${classes.files}`}>
      {aboutInfoArray &&
        aboutInfoArray.map((element) => <DropdownFile key={element.label} label={element.label} />)}
    </div>
  );
};
