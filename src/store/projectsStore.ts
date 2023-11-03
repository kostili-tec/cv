import { makeAutoObservable } from 'mobx';

import { CustomCheckboxState } from '../shared/types';

class ProjectsStore {
  checkBoxes: CustomCheckboxState = {
    HTML: false,
    JS: false,
    React: false,
    TS: false,
    CSS: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setCheckbox(checkboxName: keyof CustomCheckboxState) {
    this.checkBoxes[checkboxName] = !this.checkBoxes[checkboxName];
  }
}

export default new ProjectsStore();
