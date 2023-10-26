console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


function mergeSort(arr) {  
  if (arr.length === 1) return arr;
  
  let middle = Math.floor(arr.length / 2); 
  let one = arr.slice(0, middle);
  let two = arr.slice(middle);
    
  one = mergeSort(one);
  two = mergeSort(two);

  return merge(one, two);
}

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

