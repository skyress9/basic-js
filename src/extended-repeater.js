import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = str == null ? 'null' : str;
  options.addition = options.addition == null && typeof options.addition == 'object' ? 'null' : options.addition;
  let arr = [str, []];
  if (options.additionRepeatTimes == undefined) {
    arr[1].push(options.addition);
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arr[1].push(options.addition);
    }
  }
  arr[1] = arr[1].join(options.additionSeparator || '|');
  arr = arr.join('').split();
  
  for (let i = 1; i < options.repeatTimes; i++) {
    arr.push(arr[0]);
  }

  return arr.join(options.separator || '+');
}
