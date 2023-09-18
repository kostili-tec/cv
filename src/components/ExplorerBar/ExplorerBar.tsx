import { FolderIcon } from '../Icons/FolderIcon';
import { DropdownFolder } from './Dropdown/DrowdownFolder/DropdownFolder';
import { education, bio } from '@/shared/about';
import classes from './ExplorerBar.module.scss';

export const ExplorerBar = () => {
  return (
    <div>
      <div className={classes.personal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" fill="white" />
        </svg>
        <span>personal-info</span>
      </div>
      <div>
        <DropdownFolder
          text="bio"
          aboutInfoArray={bio}
          icon={<FolderIcon className="folder" fill="#E99287" />}
        />
        <DropdownFolder
          text="education"
          aboutInfoArray={education}
          icon={<FolderIcon className="folder" fill="#3A49A4" />}
        />
      </div>
    </div>
  );
};
