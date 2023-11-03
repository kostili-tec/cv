import { makeAutoObservable } from 'mobx';

import { education, bio } from '../shared/about';
import splitString from '../shared/splitString';
import { CustomCheckboxState } from '../shared/types';

interface Tabs {
  name: string;
  isActive: boolean;
}

class Explorer {
  info: string = '';
  infoArray: Array<string> = [];
  tabs: Array<Tabs> = [];
  totalData = [...education, ...bio];
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

  setInfo(data: string) {
    this.info = data;
  }

  removeActiveFromTabs() {
    this.tabs.forEach((tab) => (tab.isActive = false));
  }

  findInfo(label: string) {
    const findItem = this.totalData.find((value) => value.label === label);
    if (findItem) {
      this.infoArray = splitString(findItem.content);
      const checkArray = this.tabs.findIndex((value) => value.name === findItem.label);
      this.removeActiveFromTabs();
      if (checkArray === -1) this.tabs.push({ name: findItem.label, isActive: true });
      if (checkArray >= 0) this.tabs[checkArray].isActive = true;
    }
  }

  handleClickTab(label: string) {
    const findItem = this.totalData.find((value) => value.label === label);
    const findTabIndex = this.tabs.findIndex(({ name }) => name === label);
    if (findItem && findTabIndex >= 0) {
      this.removeActiveFromTabs();
      this.infoArray = splitString(findItem.content);
      this.tabs[findTabIndex].isActive = true;
    }
  }

  handleCloseTab(label: string, isActive: boolean) {
    const findTabIndex = this.tabs.findIndex((tab) => tab.name === label);
    if (findTabIndex === -1) return;

    if (!isActive) {
      this.tabs = this.tabs.filter((value) => value.name !== label);
      return;
    }

    const tabForSwitch = this.tabs[findTabIndex + 1] || this.tabs[findTabIndex - 1];
    if (tabForSwitch) {
      const findItem = this.totalData.find((value) => value.label === tabForSwitch.name);
      if (findItem) {
        this.infoArray = splitString(findItem.content);
        tabForSwitch.isActive = true;
      }
    } else {
      this.infoArray = [];
    }

    this.tabs = this.tabs.filter((value) => value.name !== label);
  }

  setCheckbox(checkboxName: keyof CustomCheckboxState) {
    this.checkBoxes[checkboxName] = !this.checkBoxes[checkboxName];
  }

  get infoLength() {
    return this.infoArray.length;
  }
}

export default new Explorer();
