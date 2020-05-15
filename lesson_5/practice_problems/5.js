/* Practice Problem 5

Consider the following nested object: */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

// Compute and display the total age of the male members of the family.

let ages = 0;
for (let member in munsters) {
  if (munsters[member].gender === 'male') {
    ages += munsters[member].age;
  }
}

console.log(ages);