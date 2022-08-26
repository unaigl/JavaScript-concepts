// Parent function
function parent() {
  // Local variable of the parent function
  const prefix = "I am a ";

  // Child function
  return function (noun) {
    // The child function depends on the variables of the parent function.
    return prefix + noun;
  };
}

console.log(parent()); // [Function (anonymous)]
const a = parent();
console.log(a("developer")); // I am a developer
console.log(parent().prefix); // undefined

// @NOTICE
// In this case, prefix is still usable by the child function even after it has been garbage collected because the child
// function created its own closure. A closure is like a "snapshot" of the environment a function is in when it is executed.
// Its closure is its own internal copy of the environment.

// When the parent function finished executing, the prefix variable is scheduled to be deleted.
// However, before that can be done, the child function "takes a snapshot" of its current environment
// (which includes all of the variables of the parent function it depends on).
// The child function now has its own copy of the prefix variable that it can access and manipulate.
// This is what closures are in its most basic use case.

// INSTEAD
// If we define with "this" our prefix variable and return undefined.
// We create an object with prefix property --> Works as a class

// Parent function
function Parent() {
  // Local variable of the parent function
  this.prefix = "I am a developer";

  // // Child function
  // return function (noun) {
  //   // The child function depends on the variables of the parent function.
  //   return prefix + noun;
  // };
  return;
}

const parentInstance = new Parent();
console.log(parentInstance); // undefined
console.log(parentInstance.prefix); // I am a developer
