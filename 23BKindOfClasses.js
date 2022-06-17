/******************************************
 Intro to Classes in JS
 ******  JAVASCRIPT STILL USES PROTOTYPES  ******
 All the prototyoes's logic is wraped to give the following "key names" to make easier to those who came from c#, java...
 /******************************************
class // function
extends
constructor 
super
get
set
static
******************************************/
class Vehicle {
  // "constructor" will be call using "new". As in java, c#...
  constructor(_wheels) {
    this.numWheels = _wheels;
  }
  // Js normal functions
  get wheels() {
    // exist in prototype of Vehicle
    return this.numWheels;
  }
  set wheels(_wheels) {
    this.numWheels = _wheels;
  }
  // "static" functions in js real sintax will be a object.prototype.method
  static accelerate() {
    console.log("go faster");
  }
  static decelerate() {
    console.log("go slower");
  }
  // Js normal functions
  justAMethod() {
    //like a function
  }
}

let car = new Vehicle(4);
let car1 = new Vehicle(2);
let car2 = new Vehicle(6);

console.log("getPrototypeOf", Object.getPrototypeOf(car));

car.wheels = 7;
console.log(car.wheels);
Vehicle.accelerate();

class Car extends Vehicle {
  constructor(_wheels, _make, _model, _year) {
    super(_wheels);
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }

  info() {
    console.log(
      "The",
      this.make,
      this.model,
      "was made in",
      this.year,
      "and has",
      this.wheels,
      "wheels"
    );
  }
}

let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
ferrari.info();
Car.accelerate();
