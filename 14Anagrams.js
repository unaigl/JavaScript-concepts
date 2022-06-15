let isAnagram = function (str1, str2) {};

/**
 * Write a function to determine if one String is
 * a case-insensitive anagram of another String
 */

// Option 1, if we've to use localCompare
let isAnagram1 = function (str1, str2) {
  const divideStr1 = str1.split(""); // returns an array
  const divideStr2 = str2.split("");

  const sortStr1 = divideStr1.sort((a, b) => a.localeCompare(b)); // returns an array
  const sortStr2 = divideStr2.sort((a, b) => a.localeCompare(b)); // localeCompare return 0 for equality, -x for a < b, x for a > b

  for (let i = 0; i < sortStr1.length; i++) {
    if (sortStr1[i] !== sortStr2[i]) return false;
  }
  return true;
};

console.log(isAnagram1("hello", "jello"));
console.log(isAnagram1("hello", "loelh"));

// Option 2, better performance
let isAnagram2 = function (str1, str2) {
  // split returns an array // sort returns an array sorted alphabetically // join returns a string
  // .reverse() // reverses the array
  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
};
console.log(isAnagram2("hello", "jello"));
console.log(isAnagram2("hello", "loelh"));
