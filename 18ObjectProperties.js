/**
 * What will the output from the console.log be and why?
 */
let box = {};
let bag = {
  prop: "bag",
  can: "box",
};
let can = {
  prop: "can",
  bag: "box",
};
box[bag] = "Monday"; // is looking for 'bag' variable, and as it is an object, it will define 'key' as '[object Object]'
box[can] = "Tuesday"; // Same case

console.log(box); // { '[object Object]': 'Tuesday' } // Has stringfy object as key as '[object Object]'

can = "CAN";
box[can] = "Tuesday"; // If we declare can to a value, we can use it to create a new property key = can, value = "Tuesday"
console.log(box); // { '[object Object]': 'Tuesday', CAN: 'Tuesday' }
