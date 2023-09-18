import { FC } from 'react';
import classes from './RightArrow.module.scss';

interface RightArrowProps {
  isRotated: boolean;
}

export const RightArrow: FC<RightArrowProps> = ({ isRotated }) => {
  return (
    <svg
      className={isRotated ? `${classes.arrow} ${classes.arrowRotate}` : classes.arrow}
      width="9"
      height="14"
      viewBox="0 0 9 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
        fill="#607B96"
      />
    </svg>
  );
};
