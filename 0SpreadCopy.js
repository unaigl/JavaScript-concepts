const obj1 = {
  name: "J",
  age: (a) => {
    console.log(a + 5);
  },
};
const obj2 = {
  surname: {
    b: "JJ",
    c: "JJJ",
  },
};
const arr1 = ["J", "JJ"];
const arr2 = [
  [["f"], "J", "JJ"],
  (a) => {
    console.log(a + 5);
  },
];
const objSpread = { ...obj1, ...obj2 }; // Properties inside "obj2.surname" are Shadow copys in "objSpread"
console.log("objSpread", objSpread);
obj1.name = "H";
obj1.age = "H";
obj2.surname.b = "HH";
console.log("objSpread", objSpread);

const arrSpread = [...arr1, ...arr2]; // Value inside "arr2[0][0]" is a Shadow copy in "arrSpread"
console.log("arrSpread", arrSpread);
arr1[0] = "H";
arr2[0][1] = "HH";
arr2[1] = "HH";
console.log("arr2", arr2);
console.log("arrSpread", arrSpread);

arr2[0][0] = [1];
console.log("arrSpread", arrSpread);
arr2[0] = [1]; // changing all values inside "arr2[0]" is not going to affect to "arrSpread[0]"
console.log("arr2", arr2);
console.log("arrSpread", arrSpread);
