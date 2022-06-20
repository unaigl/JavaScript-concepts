// Creating a template to instantiate several Counters
const myCounter = function () {
  let counter = 0;
  const add = () => {
    counter++;
    return counter;
  };
  const div = () => {
    counter--;
    return counter;
  };
  const show = () => {
    return counter;
  };
  return {
    add,
    div,
    show,
  };
};

const a = myCounter();
a.add();
a.add();
console.log(a.show()); // 2
console.log(a.counter); // undefined
console.log(myCounter().show()); // 0

// creating a clousere to instantiate one Counter, using IIFE (inmediately invoked function expression)
const myCounter2 = (function () {
  let counter = 0;
  const add = () => {
    counter++;
    return counter;
  };
  const div = () => {
    counter--;
    return counter;
  };
  const show = () => {
    return counter;
  };
  return {
    add,
    div,
    show,
  };
})();

myCounter2.add();
myCounter2.add();
console.log(myCounter2.show());

// is not allowed to instantiate a IIFE -> TypeError: myCounter2 is not a function
// const b2 = myCounter2();
// b2.add();
// console.log(b2.show());
