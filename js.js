function palindrome2(str) {
  const str1 = str.split("");
  if (!str1.length % 2) {
    var strA1 = [];
    var strA2 = [];
    for (let i = 0; i < str1.length / 2; i++) {
      strA1[i] = str1[i];
      strA2[i] = str1[str1.length - 1 - i];
    }
    return strA1.join("") === strA2.join("");
  } else {
    const lengthArr2 = (str1.length - 1) / 2;
    var strB1 = [];
    var strB2 = [];
    for (let i = 0; i < lengthArr2; i++) {
      strB1[i] = str1[i];
      strB2[i] = str1[str1.length - 1 - i];
    }
    return strB1.join("") === strB2.join("");
  }
}

console.log(palindrome2("radar")); //true
console.log(palindrome2("redder")); //true
console.log(palindrome2("windows")); //false
