let objStart = (function () {
  let objInstanceStart; //private variable
  function create() {
    //private function to create methods and properties
  }
  return {};
})();

/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    let _isRuning;
    let start = () => {
      _isRuning = true;
    };
    let stop = () => {
      _isRuning = false;
    };
    let currentState = () => {
      return _isRuning;
    };
    return {
      start,
      stop,
      currentState,
    };
  }
  return {
    getInstance: function () {
      if (!objInstance) {
        objInstance = create();
      }
      return objInstance;
    },
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
obj2.start();
console.log(obj1.currentState());
obj2.stop();
console.log(obj1.currentState());
