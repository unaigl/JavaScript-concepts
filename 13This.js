// Using `this` inside an object
// The object has functions created three different ways
// What will be the result of the three log statements?

const circle = {
  radius: 10,
  circumference: function () {
    return 2 * Math.PI * this.radius; // 2 * Math.PI * 10
  },
  diameter() {
    return this.radius * 2; // 10 * 2
  },
  area: () => {
    return Math.PI * Math.PI * this.radius; // NaN
  },
};
console.log(circle.area()); // Arrow function -> lexical scoping -> Is going to find "radius" in global scope (which does not exist)
console.log(circle.diameter());
console.log(circle.circumference());

// --------------------------------------------------

//1. new F() - `this` is the returned object
//2. explicit binding with call, apply, bind
//3. implicit binding based on context object
//4. default binding with "use strict" - no global object binding
//5. default binding
//6. Arrow functions use lexical scope and ignore explicit & implicit binding
//      and cannot be used as constructors
//7. Event listeners in the browser

// ("use strict");

let F = function () {
  // function f(){}
  console.log(this);
};
// F();
//let fObj = new F();
//console.log(fObj);

//call(context, a, a, a, a, a)
//apply(context, [a, a, a])
//bind - same as call except returns a copy of the function with the context
let objEx = {
  a: "a1",
};
let objEx2 = {
  a: "a2",
};
let Fex = function (a, b) {
  // function f(){}
  console.log(a, b); //1, 2
  console.log(this.a); //a1
};
// Fex.call(objEx, 1, 2);
let f2 = Fex.bind(objEx2);
// f2(4, 5);

//Implicit
let obj = {
  a: 1,
  f: function () {
    console.log(this);
  },
  g() {
    console.log(this);
  },
};
// obj.f(); //obj
let f3 = obj.f;
// f3(); //direct reference to function f. - Window

function addOne() {
  this.count++;
}
window.count = 8;
addOne.count = 0;
// addOne();
// addOne();
// addOne();
// console.log(addOne.count); // 0
// console.log(window.count); // 11

function f4() {
  console.log(this.a);
}
let obj1 = {
  a: 1,
  f4: f4, // direct reference to f()
};
let obj2 = {
  a: 2,
  obj1: obj1,
};
let obj3 = {
  a: 3,
  f4: obj1.f4, // direct reference to f()
};
// obj1.f4(); // value is 1 - implicit binding
// obj2.obj1.f4(); // value is 1 - implicit binding
// obj3.f4(); // value is 3 - implicit binding lost

//Arrow functions
let f5 = () => {
  //where is the function written
  console.log(this);
};
// f5.call(obj1);

function f6() {
  //f6.call(obj1) means the context HERE is obj1
  return () => {
    console.log(this.a);
  };
}
// let x = f6.call(obj1);
// x(); // obj1.a  1
// x.call(obj2); //ignores the obj2 explicit binding
// Arrow functions cannot be used as constructors

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("main>p").forEach((p) => {
    p.addEventListener("click", clickHandler);
  });
});
let clickHandler = function (ev) {
  //when a paragraph gets clicked
  //console.log(ev.currentTarget);
  console.log(this);
};
