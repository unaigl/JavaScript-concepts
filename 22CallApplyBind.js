// the difference between call( ) apply( ) and bind( )
// without strict mode "this" will default to the Global/Window obj
//'use strict';

let bob = function (num, str) {
  console.log("bob", num, str);
  return true;
};
let bill = {
  name: "Bill Murray",
  movie: "Lost in Translation",
  myMethod: function (fn) {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    fn(args);
    // fn.apply(bill, args);
    //fn.call(bill, n, s);
  },
};

// calling bob from bill
bob(1, "hello");
bill.myMethod(bob, 2, "a"); // TODO esta pasando los parametros no con parentesis, sino como parametros

// usgin call, we set a context and arguments
bob.call(bill, 2, "goodbye");
let arr = [3, "hi"];
// Same as call, difference is that arguments are passed in an array
bob.apply(bill, arr);
bill.myMethod(bob, 4, "ciao");

// Using "bind" we have to declare first and later call the function
let fred = bob.bind(bill, 5, "hasta la vista");
fred("x");
