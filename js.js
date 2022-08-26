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
