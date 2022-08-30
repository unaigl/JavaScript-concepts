/**
 * What will be the value stored in the variable n?
 *
 */

let n = ((x = 1), (y = 2), (z = 3)); // n =3 // only last value will defines n

if (((x = 1), (y = 2), (z = 3))) {
  // only last value will define if it is true
  console.log("Last value");
} else {
  ("Put false as last vaue");
}
