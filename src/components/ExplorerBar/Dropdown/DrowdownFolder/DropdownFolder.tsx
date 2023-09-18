import { FC, ReactNode, useState } from 'react';
import { DropdownFiles } from '../DropdownFiles/DropdownFiles';
import { RightArrow } from '@/components/Icons/RightArrow/RightArrow';
import { AboutInfoArray } from '@/shared/about';
import { Height } from 'react-animate-height';
import classes from './DropdownFolder.module.scss';

interface DropDownProps {
  text: string;
  icon: ReactNode;
  aboutInfoArray: AboutInfoArray;
}

enum EnumHeight {
  ZERO = 0,
  AUTO = 'auto',
}

export const DropdownFolder: FC<DropDownProps> = ({ text, icon, aboutInfoArray }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<Height>(0);

  const handleClickDrowdown = () => {
    if (!isOpen) {
      setIsOpen(true);
      setHeight(EnumHeight.AUTO);
    } else {
      setIsOpen(false);
      setHeight(EnumHeight.ZERO);
    }
  };

  return (
    <div>
      <div onClick={handleClickDrowdown} className={classes.dropdown}>
        <RightArrow isRotated={isOpen} />
        {icon}
        <span>{text}</span>
      </div>
      <DropdownFiles aboutInfoArray={aboutInfoArray} height={height} />
    </div>
  );
};
