import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${typeof value == 'undefined' ? '' : value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || Math.trunc(position) !== position || position > this.arr.length) {
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result
  }
};
