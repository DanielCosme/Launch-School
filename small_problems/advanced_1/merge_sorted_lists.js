/*Merge Sorted Lists

Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Examples:
*/

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]


function merge(arr1, arr2) {
  let retArr = []; 
  let element1, element2;
  
  for (let i = 0 ; i < arguments.length ; i++) {
    let currentArray = arguments[i];

    for (let j = 0 ; j < currentArray.length ; j++) {
      let currentElement = currentArray[j];
      retArr = insertInOrder(currentElement, retArr);
    }
  }

  console.log(retArr);
  return retArr;
}

function insertInOrder(element, arr) {
  let curr = 0; 
  let retArr = [].concat(arr);
  let indexPos = 0;
  
  for (let i = 0 ; i < arr.length ; i++) {
    curr = arr[i];
    indexPos = i;
    if (element <= curr) break; 
    else if (element > curr) indexPos = i + 1;
  }
  
  retArr.splice(indexPos , 0, element);
  return retArr;
}

