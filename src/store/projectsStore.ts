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
  tabs: Array<keyof CustomCheckboxState> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCheckbox(checkboxName: keyof CustomCheckboxState) {
    this.checkBoxes[checkboxName] = !this.checkBoxes[checkboxName];
    if (this.checkBoxes[checkboxName]) {
      this.tabs.push(checkboxName);
    } else {
      this.tabs = this.tabs.filter((tab) => tab !== checkboxName);
    }
  }

  closeAllTabs() {
    for (const key in this.checkBoxes) {
      this.checkBoxes[key] = false;
    }
    this.tabs = [];
  }
}

export default new ProjectsStore();
