import { FC } from 'react';
import { CrossIcon } from '@/components/Icons';

import classes from './EditorTabsItem.module.scss';

interface EditorTabsItemProps {
  name: string;
}
export const EditorTabsItem: FC<EditorTabsItemProps> = ({ name }) => {
  return (
    <div className={classes.tabItem}>
      <span>{name}</span>
      <CrossIcon />
    </div>
  );
};
