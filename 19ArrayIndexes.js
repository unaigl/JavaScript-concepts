/**
 * What will the output of the following two loops be?
 */
const numbers = [1, 2, 3];
numbers[10] = 11;
numbers[9] = false;
numbers[9] = null;
numbers[9] = 0;

for (let i = 0; i < numbers.length; i++) {
  // iterates although values are undefined
  console.log(i, numbers[i]);
  /* 0 1
    1 2
    2 3
    3 undefined
    4 undefined
    5 undefined
    6 undefined
    7 undefined
    8 undefined
    9 undefined
    10 11 */
}
numbers.forEach((num, idx) => {
  // only iterates if num has a value
  console.log(idx, num);
  /* 0 1
    1 2
    2 3
    10 11 */
});

// forEach, map ... is not going to iterate with undefined values.
// But, are goingo to iterate with null values.

numbers.map((num, idx) => {
  // only iterates if num has a value
  console.log(idx, num);
  /* 0 1
    1 2
    2 3
    10 11 */
});
