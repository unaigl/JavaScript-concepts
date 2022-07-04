// Objetive is to achieve 0,1,2 values

function f() {
  // using var is not working as expected
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i); // 3, 3, 3
    }, 1000 * i);
  }
  // var i still exists here and it's value is 3
}

// Solution 1, using let
function f1() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i); // 0,1,2
    }, 1000 * i);
  }
}

// Solution 2, using bind
function f2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      function (x) {
        console.log(x); // 0, 1, 2
      }.bind(null, i),
      1000 * i
    );
  }
  // var i still exists here and it's value is 3
}

console.log(f());
