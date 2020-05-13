/* Practice Problem 9

Add up all of the ages from the Munster family object: */

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let age = 0;
for (let key in ages) {
  age += ages[key];
}

console.log(age);