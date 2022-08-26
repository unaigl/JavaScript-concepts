//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

let r1 = ["1", "7", "11"].map(parseInt); //returns [1, NaN, 3]

// PROBLEM
// parseInt(num, radix); // default radix 10
// myArray.map((val, idx, arr) => { })
let r2 = ["1", "7", "11"].map(parseInt); //returns [1, NaN, 3]
// '1' , 0 - deafult 10 radix
// '7', 1 - Nan
// '11', 2 - binary as radix, 11 -> 3

// SOLUTION
let result = ["1", "7", "11"].map((val) => parseInt(val)); //returns [1, NaN, 3]

console.log(result);
