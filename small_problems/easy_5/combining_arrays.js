/* Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example: */

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union([1, 3, 5, 11, 5], [3, 6, 9, 10, 11, 245]);    // [1,3,5,9,10,11,245]


function union(arr1, arr2) {
  let result = [];

  noDuplicates(result, arr1);
  noDuplicates(result, arr2);

  console.log(result);
  return result;
}

function noDuplicates(resultArr, inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (!resultArr.includes(inputArr[i])) resultArr.push(inputArr[i]);
  }
  return resultArr;
}


