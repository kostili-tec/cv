import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { EditorTabsItem } from '../EditorTabsItem/EditorTabsItem';
import classes from './EditorTabsContainer.module.scss';

export const EditorTabsContainer = observer(() => {
  return (
    <div className={classes.container}>
      {Explorer.tabs && Explorer.tabs.map((value) => <EditorTabsItem name={value} key={value} />)}
    </div>
  );
});
