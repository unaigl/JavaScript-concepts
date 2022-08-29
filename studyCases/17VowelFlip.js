/**
 * Write a script that will find all the vowels [a,e,i,o,u] inside any string
 * and then flip the order of only the vowels. If there is an odd number of vowels
 * then the one in the middle stays in the same position. Complete this task with the
 * fewest number of loops and iterations as possible.
 * Eg:
 * cottage => cettago
 * hello => holle
 * sauce => seuca
 * javascript => jivascrapt
 */
let log = console.log;

let process = (word) => {
  let matches = Array.from(word).reduce((acc, curr, idx) => {
    if (["a", "e", "i", "o", "u"].includes(curr)) {
      acc.push(idx);
    }
    return acc;
  }, []);
  log(matches); //positions of the vowels
  let len = matches.length;
  let wordCopy = Array.from(word);
  for (let i = 1; i <= len / 2; i++) {
    let ltr = word.substring(matches[len - i], matches[len - i] + 1);
    let removed = wordCopy.splice(matches[i - 1], 1, ltr);
    wordCopy.splice(matches[len - i], 1, removed[0]);
    word = wordCopy.join("");
  }
  return word;
};

log(process("javascript"));
log(process("hello"));

// Option 2,

function process1(str) {
  let index = [];
  let vocals = [];
  let strArray = str.split(""); // Will be using "strArray" as final array, because revese() and splice() methods does not create a new array
  strArray.map((el, idx) => {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      index.push(idx);
      vocals.push(el);
    }
  });

  vocals.reverse(); // reversing vocals to splice in "strArray"

  for (let i = 0; i < index.length; i++) {
    strArray.splice(index[i], 1, vocals[i]);
  }
  let reverseStr = strArray.join("");
  return { original: str, vowelFlip: reverseStr };
}

log(process1("javascript"));
log(process1("hello"));
log(process1("aeiou"));
