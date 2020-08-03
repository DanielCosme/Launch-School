const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

function transpose(matrix) {
  // New number of rows is the first array's length
  const numOfRows = matrix[0].length; 
  // New number of columns is the original array container length
  const numOfCols = matrix.length;   
  let ret = [];
  let tmp = [];

  for (let i = 0 ; i < numOfRows ; i++) {
    for (let j = 0 ; j < numOfCols ; j++) {
      tmp.push(matrix[j][i]); 
    }
    ret.push(tmp);
    tmp = [];
  }
  
  return ret;
}
