import { FC } from 'react';

import classes from './EditorTabsItem.module.scss';

interface EditorTabsItemProps {
  name: string;
}
export const EditorTabsItem: FC<EditorTabsItemProps> = ({ name }) => {
  return (
    <div className={classes.tabItem}>
      <span>{name}</span>
    </div>
  );
};
