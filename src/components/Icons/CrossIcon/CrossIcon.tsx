import { FC } from 'react';
import classes from './CrossIcon.module.scss';

interface CrossIconProps {
  handleClick?: () => void;
}

export const CrossIcon: FC<CrossIconProps> = ({ handleClick }) => {
  return (
    <svg
      className={classes.close}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      onClick={handleClick}
    >
      <g clipPath="url(#clip0_64_1646)">
        <path d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z" />
      </g>
      <defs>
        <clipPath id="clip0_64_1646">
          <rect width="18" height="18" transform="translate(0.347656 0.779297)" />
        </clipPath>
      </defs>
    </svg>
  );
};
