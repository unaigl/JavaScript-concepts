let numbers = [12, 33, 6, 2, 6, 5, 5, 5, 6, 10, 9, 10, 33];
//
/**
 * Write a function to determine the largest difference
 * between any two numbers in an array of numbers
 */

let difference = (function (arr) {
  let uniqueNumbers = [...new Set(arr)]; // remove duplicates in numbers
  // or let uniqueNumbers1 = Array.from(new Set(arr));

  const numericalSort = uniqueNumbers.sort((a, b) => a - b); // sort() by default works with strings, we need to use a compare function
  console.log(numericalSort);

  return numericalSort[0] - numericalSort[numericalSort.length - 1];
})(numbers);

console.log(difference);
