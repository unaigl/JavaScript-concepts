/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
  let one, two;
  try {
    throw new Error(321);
  } catch (one) {
    (one = 123), (two = 321); // JS is soft typed, JS looks first "one" value in local scope
    console.log(one); // First, 123
  }
  console.log(one); // Second, undefined
  console.log(two); // Third, 321
})();
