import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { CrossIcon } from '@/components/Icons';
import classes from './EditorTabsItem.module.scss';

interface EditorTabsItemProps {
  name: string;
}
export const EditorTabsItem: FC<EditorTabsItemProps> = observer(({ name }) => {
  const handleTabClick = () => {
    Explorer.findInfo(name);
  };
  const handleCrossClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    Explorer.closeTab(name);
  };
  return (
    <div onClick={handleTabClick} className={classes.tabItem}>
      <span>{name}</span>
      <CrossIcon handleClick={handleCrossClick} />
    </div>
  );
});
