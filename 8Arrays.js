// Pre-define an array with 5 values in it

//version 1

// Using "Array.from" if we pass an array is going to make a shallow copy of the array
// if we pass an array like structure is going to create a new array
let a1 = Array.from(
  {
    length: 5, // length is the only property an array's has
  },
  (n) => Math.random() // "Array.from" method give us a map function (as a second parameter)
);
console.log("1", a1);

//version 2
let a2 = new Array(5) // length
  .fill(1) // fill the array with five ones
  .map((n) => n * Math.random()); // give to each element a random value

console.log("2", a2);
