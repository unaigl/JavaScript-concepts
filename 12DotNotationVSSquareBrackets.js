// Differences between dot notation and square bracket syntax

let sam = {
  castiel: "mary",
};
let dean = {
  john: "crowley",
  mary: "chuck",
};

//which, if any, of these three log statements will work?
console.log(dean[sam.castiel]); // chuck
console.log(dean.sam.castiel); // fail
console.log(dean[sam["castiel"]]); // chuck
console.log(dean[sam[castiel]]); // fail

dean[sam[castiel]] = "a";
console.log(dean[sam[castiel]]); // fail
