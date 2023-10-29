export interface IconProps {
  checked: boolean;
}

export interface CustomCheckboxState {
  React: boolean;
  TS: boolean;
  JS: boolean;
  HTML: boolean;
}

export enum IconColors {
  BRIGHT = '#607B96',
  DIM = '#607b967b',
}

interface ISvgClasses {
  CHECKED: string;
  UNCHECKED: string;
}
export const SvgClasses: ISvgClasses = {
  CHECKED: 'svg-icon svg-icon_checked',
  UNCHECKED: 'svg-icon svg-icon_unchecked',
};
