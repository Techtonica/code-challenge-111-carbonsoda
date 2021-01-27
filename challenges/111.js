// Implement the commented code in line 10 to add `dog` to `dogs` if the minimum age is met.
//
// If anything else about the code needs to change for the solution to work based on your reading, please fix it.
//
// Example:
//
// filterDogs(10)
//
// => [ { name: 'Osito', age: 15 } ]
//
// # Hint
//
// If you get stuck, look up "shadowing" in your assigned reading.
//
// # Bonus Extension
//
// Instead of using a boring old for loop, look up a better way to filter elements of an a array.

let dogs = [
  { name: 'Osito', age: 15 },
  { name: 'Nana', age: 1 },
  { name: 'Bella', age: 8 },
];

// It might be better idea to pass in dogs as a parameter
function filterDogs(minimumAge) {
  // add dog to qualifyingDogs array if minimum age met
  // possible to do just as one-liner with return dog.filter(...)
  // but this makes it a little easier to read/understand purpose
  let qualifyingDogs = dogs.filter(dog => dog.age >= minimumAge);
  return qualifyingDogs;
}


module.exports = filterDogs;
