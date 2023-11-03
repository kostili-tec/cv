import { observer } from 'mobx-react-lite';

import ProjectsStore from '@/store/projectsStore';
import classes from './ProjectsTabs.module.scss';
import { CrossIcon } from '../../../Icons';

export const ProjectsTabs = observer(() => {
  return (
    <div className={classes.tabsContainer}>
      <div>
        {ProjectsStore.tabs.length > 0 && (
          <div className={classes.tab}>
            <span>{ProjectsStore.tabs.join('; ')}</span>
            <CrossIcon handleClick={() => ProjectsStore.closeAllTabs()} />
          </div>
        )}
      </div>
    </div>
  );
});
