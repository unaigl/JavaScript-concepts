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
