import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { FileIcon } from '@/components/Icons/FileIcon';
import classes from './DropdownFile.module.scss';

type DropdownItemProps = {
  label: string;
};

export const DropdownFile: FC<DropdownItemProps> = observer(({ label }) => {
  return (
    <div className={classes.dropdownFile} onClick={() => Explorer.findInfo(label)}>
      <FileIcon />
      <span>{label}</span>
    </div>
  );
});
