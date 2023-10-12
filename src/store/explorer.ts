import { makeAutoObservable } from 'mobx';

import { education, bio } from '../shared/about';
import splitString from '../shared/splitString';

class Explorer {
  info: string = '';
  infoArray: Array<string> = [];
  tabs: Array<string> = [];
  totalData = [...education, ...bio];

  constructor() {
    makeAutoObservable(this);
  }

  setInfo(data: string) {
    this.info = data;
  }

  findInfo(label: string) {
    const findItem = this.totalData.find((value) => value.label === label);
    if (findItem) {
      this.infoArray = splitString(findItem.content);
      const checkArray = this.tabs.findIndex((value) => value === findItem.label);
      if (checkArray === -1) this.tabs.push(findItem.label);
    }
  }

  closeTab(label: string) {
    const findTabIndex = this.tabs.findIndex((tab) => tab === label);
    if (findTabIndex !== -1) {
      this.tabs.splice(findTabIndex, 1);
      if (findTabIndex >= 0) {
        const checkNextTab = this.tabs[findTabIndex + 1];
        if (checkNextTab) {
          const findItem = this.totalData.find((value) => value.label === checkNextTab);
          if (findItem) this.infoArray = splitString(findItem.content);
        } else {
          const prevTabLabel = this.tabs[findTabIndex - 1];
          const findItem = this.totalData.find((value) => value.label === prevTabLabel);
          if (findItem) this.infoArray = splitString(findItem.content);
        }
        if (this.tabs.length === 0) {
          this.infoArray = [];
        }
      }
    }
    this.tabs = this.tabs.filter((value) => value !== label);
  }

  get infoLength() {
    return this.infoArray.length;
  }
}

export default new Explorer();
