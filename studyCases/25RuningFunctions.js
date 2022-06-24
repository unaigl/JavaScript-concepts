// HOW TO MAKE A FUNCTION RUN

function rick() {
  //function declaration
  console.log("Let's get Schwifty!");
}
let morty = function () {
  //function expression
  //console.log("I don't think that this is such a good idea Rick.");
  console.log(this);
};
let summer = (f1) => {
  //arrow function
  console.log("About to call another function");
  f1(); // f1.call(), f1.apply()
};

//morty(); //1. parentheses make it run

// rick.call(null);  //2. using call, apply, bind
// rick.apply(global);
let o = {};
let m = morty.bind(o);
// m();

//summer(m); //3. passing along function references as parameters

function Meeseeks() {
  //constructor function
  console.log("I'm Mr. Meeseeks.");
  this.hello = function () {
    console.log("hello");
  };
  this.goodbye = () => {};
}
Meeseeks.prototype.help = function () {
  //objects of type Meeseeks will be able to use this function
  console.log("Look at me.");
};
// let me = new Meeseeks(); //4. call a constructor using new
// console.log(me);
// me.help(); //5. call a method on the prototype of an object
// me.hello(); //6. call a method on an object

// 7.
//NodeJs version with EventEmitter and listener to call a function
// const EventEmitter = require("events");
// const Schwift = new EventEmitter();
// Schwift.on("schwifty", msg => {
//   console.log("SCHWIFTY:", msg);
// });
// setTimeout(function() {
//   Schwift.emit("schwifty", "we got schwifty");
// }, 1000);

//Browser version with Event Listener to call a function
let Schwift = new CustomEvent("schwifty");
class MyObj extends EventTarget {
  //allowed to receive / listen for events
  constructor() {
    super();
  }
  log(ev) {
    console.log("EVENT", ev); // Schwift Event object
  }
}
let obj = new MyObj();
obj.addEventListener("schwifty", obj.log);
obj.addEventListener("schwifty", (ev) => console.log(ev.type)); //"schwifty"
setTimeout(function () {
  obj.dispatchEvent(Schwift); //trigger the two event listeners for "schwift"
}, 1000);
