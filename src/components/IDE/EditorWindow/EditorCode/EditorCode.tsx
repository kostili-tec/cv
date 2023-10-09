import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import classes from './EditorCode.module.scss';

export const EditorCode = observer(() => {
  const countRows = Explorer.infoLength;
  const rowNumbers = Array.from({ length: countRows }, (_, index) => index + 1);
  return (
    <div className={classes.code}>
      <div className={classes.numbers}>
        {rowNumbers.map((number) => (
          <p className={classes.paragraph} key={number}>
            {number}
          </p>
        ))}
      </div>
      <div>
        {Explorer.infoArray &&
          Explorer.infoArray.map((value) => (
            <p className={classes.paragraph} key={value}>
              {value}
            </p>
          ))}
      </div>
    </div>
  );
});
