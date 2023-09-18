import { FC, ReactNode, useState } from 'react';
import { DropdownFiles } from '../DropdownFiles/DropdownFiles';
import { RightArrow } from '@/components/Icons/RightArrow/RightArrow';
import { AboutInfoArray } from '@/shared/about';
import classes from './DropdownFolder.module.scss';

interface DropDownProps {
  text: string;
  icon: ReactNode;
  aboutInfoArray: AboutInfoArray;
}

export const DropdownFolder: FC<DropDownProps> = ({ text, icon, aboutInfoArray }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickDrowdown = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div onClick={handleClickDrowdown} className={classes.dropdown}>
        <RightArrow isRotated={isOpen} />
        {icon}
        <span>{text}</span>
      </div>
      <div>
        <DropdownFiles isOpened={isOpen} aboutInfoArray={aboutInfoArray} />
      </div>
    </div>
  );
};
