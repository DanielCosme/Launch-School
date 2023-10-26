/* Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example: */

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let sent = arr[i];
    if (result[sent]) result[sent]++;
    else result[sent] = 1
  }
  for (let [key, value] of Object.entries(result)) {
    console.log(`${key} => ${value}`);
  }
}