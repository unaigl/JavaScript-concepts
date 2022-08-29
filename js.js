/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

function palindrome1(str) {
  // let reverseStr = str.split('').reverse().join('')

  let compareDigits = Math.floor(str.length / 2);
  if (
    str.substring(0, compareDigits) ===
    str.split("").reverse().join("").substring(0, compareDigits)
  )
    return true;
  return false;
}

console.log(palindrome1("radar")); //true
console.log(palindrome1("redder")); //true
console.log(palindrome1("windows")); //false
