//
// When this functions returns "undefined", will create an object with the following properties:
function Vehicle(_wheels) {
  // Different reference for each created Vehicle instances (different values)
  this.numWheels = _wheels;
  this.velocity = 40;

  // not a reference for each created Vehicle
  this.justAMethod = function () {
    return `I'vee ${this.numWheels} wheels`;
  };
  return;
}

// In js real sintax will be a object.prototype.method
Vehicle.prototype.protoWheels = 12;
// Those defined using "Vehicle.prototype." will be same value for every instance created using Vehicle (a reference will be createds)
Vehicle.prototype.setVelocity = function (vel) {
  this.velocity = vel;
  return this.velocity;
};

const a = new Vehicle(4);
const b = new Vehicle(6);

console.log("getPrototypeOf", Object.getPrototypeOf(a)); //  { protoWheels: 12, setVelocity: [Function (anonymous)] }
console.log(a);
a.setVelocity(4);
b.setVelocity(6);
console.log(a.velocity);
console.log(b.velocity);

function BMW(_wheels, _model, _year) {
  this.model = _model;
  this.year = _year;
  // we have to define previous values "numWheels"
  this.numWheels = _wheels;
  this.velocity = 50;
}
// we define from which prototype inherit, we've to defined before using vehicle.prototype values
BMW.prototype = new Vehicle();

const x5 = new BMW(10, "X5", 2019);

// we can define a a prototype value after instances are created
BMW.prototype.type = "type BMW";
console.log(x5.type);

// We have access to Vehicle properties
console.log(x5.velocity);

// Vehivle.prototype.numWheels IS NOT taking from parent. We have to declare usign this inside BMW
console.log(x5.numWheels);
// Instead we have acces to the Vehicle.prototype value
console.log(x5.protoWheels);

// Vehivle.prototype.justAMethod IS taking from parent
console.log(x5.justAMethod()); // NOT working, is looking "numWheels" inside vehicle.prototype

// Velocity property will be created inside x5
console.log(x5.setVelocity(10));

console.log("getPrototypeOf", Object.getPrototypeOf(x5));

function AUDI(_wheels, _model, _year) {
  // using to call parent constructor
  Vehicle.call(this, _wheels); // will also declare velocity and justAMethod
  this.model = _model;
  this.year = _year;
}
// we define from which prototype inherit, we've to defined before using vehicle.prototype values
AUDI.prototype = new Vehicle();

const a5 = new AUDI(20, "A5", 2012);

console.log("getPrototypeOf", Object.getPrototypeOf(a5));

// BRIEF

// Calling parent Constructors
// Inside AUDI Vehicle.call(this, _wheels);

// We have to declare ""BMW.prototype = new Vehicle();"" before using Vehicle.prototype properties
// We can create an instance and later define more properties using Vehicle.prototype

// Inside BMW we hace acces to "properties" declared in Vehicle using this
// Properties of Vehicle will be override by BMW
// We also have access to Vehicle.prototype properties
