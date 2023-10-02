import { observer } from 'mobx-react-lite';

import Explorer from '@/store/explorer';
import { EditorCodeRow } from './EditorCodeRow/EditorCodeRow';

export const EditorCode = observer(() => {
  return (
    <div>
      {Explorer.infoArray &&
        Explorer.infoArray.map((value) => <EditorCodeRow key={value} text={value} />)}
    </div>
  );
});
