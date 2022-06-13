let func = function (a, b) {};

func(1);
func(1, 2);
func(1, 2, 3);
//determine if the function received the number of params it expected

let f = function (a, b) {
  if (arguments.length === f.length) {
    console.log("Has received the number of params it expected");
  } else {
    console.log("Has received less or more params than it expected");
  }
};
