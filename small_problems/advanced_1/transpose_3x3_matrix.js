/* Transpose 3x3 Matrix

A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:
*/


let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let ret = []; 
  let tmp = [];

  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix.length ; j++) {
      tmp.push(matrix[j][i]);
    }
    ret.push(tmp);
    tmp = [];
  }
  return ret;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

