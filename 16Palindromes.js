/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

// Option 1, better performance
let palindrome1 = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let endCompare = end.split("").reverse().join("");

  return endCompare === start;
};

console.log(palindrome1("radar")); //true
console.log(palindrome1("redder")); //true
console.log(palindrome1("windows")); //false

// Option 2, if we have to use modulo operator
let palindrome2 = function (word) {
  let len = word.length;
  var start;
  if (len % 2) {
    start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  } else {
    start = word.substring(0, Math.floor(len / 2) - 1).toLowerCase();
  }

  let end = word.substring(Math.floor(len / 2) + 1, len).toLowerCase();

  let endCompare = end.split("").reverse().join("");
  return endCompare === start;
};

console.log(palindrome2("radar")); //true
console.log(palindrome2("redder")); //true
console.log(palindrome2("windows")); //false
