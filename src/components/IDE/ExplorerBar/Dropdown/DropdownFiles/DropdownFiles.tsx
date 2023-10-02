import { FC } from 'react';
import AnimateHeight, { Height } from 'react-animate-height';

import { DropdownFile } from '../DropdownFile/DropdownFile';
import { AboutInfoArray } from '@/shared/about';
import classes from './DropdownFiles.module.scss';

type DropdownFilesProps = {
  aboutInfoArray: AboutInfoArray;
  height: Height;
};

export const DropdownFiles: FC<DropdownFilesProps> = ({ aboutInfoArray, height }) => {
  return (
    <AnimateHeight height={height} duration={150} easing="ease-out">
      <div className={classes.dropdownFiles}>
        {aboutInfoArray &&
          aboutInfoArray.map((element) => (
            <DropdownFile key={element.label} label={element.label} />
          ))}
      </div>
    </AnimateHeight>
  );
};
