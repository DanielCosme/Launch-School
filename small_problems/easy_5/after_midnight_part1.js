/* The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

You may not use javascript's Date class methods.

Examples: */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


function timeOfDay(num) {
  // Modulus Arithmetic approach
  let deltaMinutes = num % MINUTES_PER_DAY;
  if (num < 0) deltaMinutes += MINUTES_PER_DAY;

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  /* Counting aproach
  let result = num >= 0 ? countForward(num) : countBackwards(num);
  */
  let result = `${padZero(hours)}:${padZero(minutes)}`;
  return result;
}

function countBackwards(num) {
  let hours = 23;
  let minutes = 60;
  let len = Math.abs(num);
  for (let i = 0; i < len; i++) {
    minutes--;
    if (hours === 00 && minutes === 00) {
      hours = 23;
      minutes = 60;
    }
    if (minutes === 00) {
      hours--;
      minutes = 60;
    }
  }
  return `${padZero(hours)}:${padZero(minutes)}`;
}

function countForward(num) {
  let hours = 0;
  let minutes = 0;
  for (let i = 0; i < num; i++) {
    minutes++;
    if (hours === 23 && minutes === 60) {
      hours = 0;
      minutes = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  }
  return `${padZero(hours)}:${padZero(minutes)}`;
}

function padZero(num) {
  return String(num).length === 1 ? '0' + num : num;
}