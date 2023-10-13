import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { CrossIcon } from '@/components/Icons';
import classes from './EditorTabsItem.module.scss';

interface EditorTabsItemProps {
  name: string;
  isActive: boolean;
}
export const EditorTabsItem: FC<EditorTabsItemProps> = observer(({ name, isActive }) => {
  const tabItemClasses = isActive ? `${classes.tabItem} ${classes.tabItemActive}` : classes.tabItem;
  const handleTabClick = () => {
    Explorer.handleClickTab(name);
  };
  const handleCrossClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    Explorer.handleCloseTab(name, isActive);
  };
  return (
    <div onClick={handleTabClick} className={tabItemClasses}>
      <span>{name}</span>
      <CrossIcon handleClick={handleCrossClick} />
    </div>
  );
});
