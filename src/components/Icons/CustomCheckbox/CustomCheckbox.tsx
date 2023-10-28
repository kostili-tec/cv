import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { CustomCheckboxState } from '../../../shared/types';
import classes from './CustomCheckbox.module.scss';

interface CustomCheckboxProps {
  checkboxName: keyof CustomCheckboxState;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = observer(({ checkboxName }) => {
  const checked = Explorer.checkBoxes[checkboxName];
  return (
    <div className={classes.div}>
      <svg
        width="18"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
        fill="none"
      >
        {/* main bg */}
        <rect
          x="2.5"
          y="2.56653"
          width="12.8115"
          height="12.8115"
          rx="1.5"
          fill="#011627"
          stroke="#607B96"
          id="svg_1"
        />
        {/* hover border */}
        <rect
          className={classes.border}
          x="1"
          y="1.06653"
          width="15.8115"
          height="15.8115"
          rx="3"
          stroke="#607B96"
          strokeOpacity="0.3"
          strokeWidth="2"
          id="svg_2"
        />
        {/* active bg */}
        <rect
          x="2.5"
          y="2.56653"
          width="12.8115"
          height="12.8115"
          rx="1.5"
          fill="#607B96"
          stroke="#607B96"
          id="svg_3"
          className={checked ? classes.active : classes.hide}
        />
        {/* check mark */}
        <path
          d="m8.14475,10.18765l5.06262,-4.79474l0.77931,0.7375l-5.84193,5.53222l-3.50503,-3.31925l0.77878,-0.73746l2.72625,2.58173z"
          fill="white"
          id="svg_4"
          className={checked ? classes.active : classes.hide}
        />
      </svg>
    </div>
  );
});
