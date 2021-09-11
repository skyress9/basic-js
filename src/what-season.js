import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let error = new Error('Invalid date!');

  for (let value in date) {
    if (value == 'toString') {
      throw error;
    }
  }
  if (date == undefined) { 
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw error;
  }


  if (date.getMonth() > 10 || date.getMonth() < 2) {
    return 'winter';
  } else if (date.getMonth() > 7) {
    return 'autumn';
  } else if (date.getMonth() > 4) {
    return 'summer';
  } else if (date.getMonth() > 1) {
    return 'spring'
  }
}
