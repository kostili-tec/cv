import { EditorTabsContainer } from './EditorTabs/EditorTabsContainer/EditorTabsContainer';
import classes from './EditorWindow.module.scss';

export const EditorWindow = () => {
  return (
    <div className={classes.editorWindow}>
      <EditorTabsContainer />
    </div>
  );
};
