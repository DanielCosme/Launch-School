/* Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:
*/

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

function fridayThe13ths(year) {
  let date = new Date(year, 0);
  let arr = []

  for (let month = 0; month < 12; month++) {
    date.setMonth(month);
    date.setDate(13);

    if (isFriday(date)) {
      arr.push(new Date(date));
    }
  }
  return arr.length;
}

function isFriday(date) {
  return date.getDay() === 5;
}

