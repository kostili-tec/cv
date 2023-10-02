import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { CrossIcon } from '@/components/Icons';
import classes from './EditorTabsItem.module.scss';

interface EditorTabsItemProps {
  name: string;
}
export const EditorTabsItem: FC<EditorTabsItemProps> = observer(({ name }) => {
  return (
    <div className={classes.tabItem}>
      <span>{name}</span>
      <CrossIcon handleClick={() => Explorer.closeTab(name)} />
    </div>
  );
});
