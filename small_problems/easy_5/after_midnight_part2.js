/* As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples: */
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(time) {
  let [hours, minutes] = time.split(':').map(x => Number(x));
  let result = (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
  return result;
}

function beforeMidnight(time) {
  let result = Math.abs(afterMidnight(time) - MINUTES_PER_DAY) % MINUTES_PER_DAY;
  console.log(result);
  return result;
}