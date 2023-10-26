let count = [1, 2, 3, 4, 5];
let doubled = count.map((number) => number * 2); // double each number
console.log(doubled);                                          // logs [ 2, 4, 6, 8, 10 ]
console.log("")

function myMap(array, func) {
  let m = [];
  for (let i = 0; i < array.length; i++) {
    m.push(func(array[i]))
  }
  return m
}

let plusOne = n => n + 1;
r = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(r)

function getBooksTitle(books) {
  return myMap(books, getTitle)
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

let res = getBooksTitle(books);
// console output
console.log([
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
], res)
