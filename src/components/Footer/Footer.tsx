import { TelegramIcon } from '../Icons/TelegramIcon';
import classes from './Footer.module.scss';
import { GithubIcon } from '../Icons/GithubIcon';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.findMe}>find me in:</p>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a
            href="https://t.me/nebuchadnezzars_dream"
            target="_blank"
            className={classes.link}
            rel="noreferrer"
          >
            <TelegramIcon className={classes.svg} />
          </a>
        </li>
        <li className={classes.li}>
          <a
            rel="stylesheet noreferrer"
            href="https://github.com/kostili-tec"
            target="_blank"
            className={classes.link}
          >
            <span>@kostili-tec</span>
            <GithubIcon className={classes.svg} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
