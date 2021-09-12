import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(array) {
  let error = new Error("\'arr\' parameter must be an instance of the Array!")

  if (!(array instanceof Array)) {
    throw error;
  }

  let arr = array.slice();

  if (arr[0] == '--double-prev' || arr[0] == '--discard-prev') {
    arr.shift();
  } else if (arr[arr.length - 1] == '--double-next' || arr[arr.length - 1] == '--discard-next') {
    arr.pop();
  }
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      arr[i] = '';
      arr[i + 1] = ''
    }
    if (arr[i] == '--discard-prev') {
      arr[i] = '';
      arr[i - 1] = ''
    }
    if (arr[i] == '--double-next') {
      arr[i] = arr[i + 1];
    }
    if (arr[i] == '--double-prev') {
      arr[i] = arr[i - 1];
    }
  }

  return arr.filter(e => {
    if (e != '') {
      return e;
    }
  });
}
