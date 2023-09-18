export interface AboutInfo {
  label: string;
  content: string;
}

export type AboutInfoArray = Array<AboutInfo>;

/* enum Labels {
  BIO = 'bio',
  EDUCATION = 'education',
} */

export const bio: AboutInfoArray = [
  {
    label: 'personal-info   ',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis est at semper rhoncus. Nulla nec interdum justo. Duis pellentesque elit nec sem dapibus porta. In gravida tempor justo, at feugiat libero facilisis quis. Nullam id viverra nulla, dictum consequat arcu. Integer auctor ligula ac augue efficitur, at consectetur lectus blandit. Curabitur ac metus euismod, mollis libero in, tincidunt felis. Phasellus cursus augue ut metus porttitor, sit amet rhoncus sem aliquet. ',
  },
];

export const education: AboutInfoArray = [
  {
    label: 'university',
    content: 'lor sit amet, consectetur adipiscing elit. Integer matt',
  },
  {
    label: 'courses',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer',
  },
];
