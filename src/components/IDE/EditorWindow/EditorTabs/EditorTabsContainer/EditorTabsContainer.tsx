import { EditorTabsItem } from '../EditorTabsItem/EditorTabsItem';
import classes from './EditorTabsContainer.module.scss';

export const EditorTabsContainer = () => {
  return (
    <div className={classes.container}>
      <EditorTabsItem name="personal-info" />
      <EditorTabsItem name="education" />
    </div>
  );
};
