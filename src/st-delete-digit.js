import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  let arr = String(n).split('');
  let arrSearch;
  for (let i = 0; i < arr.length; i++) {
    arrSearch = arr.slice();
    arrSearch.splice(i, 1);
    arrSearch = Number(arrSearch.join(''))
    if (arrSearch > max) {
      max = arrSearch;
    }
  }
  return max;
}
