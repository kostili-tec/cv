import { FolderIcon } from '../Icons/FolderIcon';
import { DropdownFolder } from './Dropdown/DrowdownFolder/DropdownFolder';
import { education, bio } from '@/shared/about';
import { MailIcon } from '../Icons/MailIcon';
import { TelegramIcon } from '../Icons/TelegramIcon';
import classes from './ExplorerBar.module.scss';

export const ExplorerBar = () => {
  return (
    <div className={classes.explorerBar}>
      <div className={classes.explorerBarName}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" fill="white" />
        </svg>
        <span>personal-info</span>
      </div>
      <div className={classes.borderBotton}>
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
      <div className={classes.explorerBarName}>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" fill="white" />
        </svg>
        <span>contacts</span>
      </div>
      <ul className={classes.ul}>
        <li>
          <a href="mailto: weh4teyou@gmail.com">
            <MailIcon />
            <span>weh4teyou@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/nebuchadnezzars_dream">
            <TelegramIcon className={classes.tgIcon} />
            <span>telegram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
