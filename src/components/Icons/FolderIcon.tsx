import { FC } from 'react';

interface FolderIconProps {
  className: string;
  fill: string;
}

export const FolderIcon: FC<FolderIconProps> = ({ className, fill }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
        fill={fill}
      />
    </svg>
  );
};
