import { FC } from 'react';

interface EditorCodeRowProps {
  text: string;
}

export const EditorCodeRow: FC<EditorCodeRowProps> = ({ text }) => {
  return <p>{text}</p>;
};
