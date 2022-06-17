/**
 * Finish the following script to extends the built-in
 * JavaScript String Object
 * so it has a method which will reverse the order of
 * characters in a string and return the resulting reversed string.
 * It should run with code provided.
 *
 * Bonus marks if it ignores punctuation at the end of the String.
 */

String.prototypes.flip = function () {
  let str = this;
  let end;
  let punctuation = /[?.!]/;
  let matches = str.match(punctuation);
  if (matches) {
    end = matches[0];
    str = str.replace(end, "");
  }
  return str.split("").reverse().join("") + end;
};

let str = "Can I use Google during the interview?";
console.log(str.flip());
