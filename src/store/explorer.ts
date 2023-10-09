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
    console.log(this.infoArray);
  }

  closeTab(label: string) {
    this.tabs = this.tabs.filter((value) => value !== label);
  }

  get infoLength() {
    return this.infoArray.length;
  }
}

export default new Explorer();
