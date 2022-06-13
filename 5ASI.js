// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?

let a = {
  a: 123,
}[a].forEach(function (x) {
  console.log(x);
});

// how would you fix it?

let b = {
  b: 123,
};
[b].forEach(function (x) {
  console.log(x);
});
