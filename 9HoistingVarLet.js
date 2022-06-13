//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
  // name;
  // area = undefined;

  console.log("var", area); // undefined

  try {
    console.log(name); // X error
  } catch (error) {
    console.log("let", name); // ReferenceError: name is not defined
  }

  let name = "Bert";
  var area = "Geology";
}
f();
