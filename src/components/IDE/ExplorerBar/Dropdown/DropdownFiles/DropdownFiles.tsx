import { FC } from 'react';
import { DropdownFile } from '../DropdownFile/DropdownFile';
import { AboutInfoArray } from '@/shared/about';
import classes from './DropdownFiles.module.scss';
import AnimateHeight, { Height } from 'react-animate-height';

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
