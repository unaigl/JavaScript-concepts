/**
 * Which of the following lines will return a true and
 * which will return false?
 */

console.log(["a", "b"] == ["a", "b"]); // false, are 2 different objects
console.log(["a", "b"] == ["a", "b"] + []); // true // to sum two or more arrays, first converts all arrays value in single string
// ["a", "b"] == 'a,b' + '' // to compare a array with string, converts array to string
// 'a,b' == 'a,b'

console.log(["a", "b", "c"] == ["a", "b"] + []); // false
console.log(["a", "b"] == ["b", "a"]); // false
console.log(["a", "b"] == "a,b"); // true
