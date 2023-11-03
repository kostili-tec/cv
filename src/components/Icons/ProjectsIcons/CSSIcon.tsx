import { FC } from 'react';

import { IconProps, SvgClasses } from '../../../shared/types';

export const CSSIcon: FC<IconProps> = ({ checked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={checked ? SvgClasses.CHECKED : SvgClasses.UNCHECKED}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M5.00055 3L4.35055 6.34H17.9405L17.5005 8.5H3.92055L3.26055 11.83H16.8505L16.0905 15.64L10.6105 17.45L5.86055 15.64L6.19055 14H2.85055L2.06055 18L9.91055 21L18.9605 18L20.1605 11.97L20.4005 10.76L21.9405 3H5.00055Z"></path>
    </svg>
  );
};
