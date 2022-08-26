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

// @Notice
// In JavaScript, when a function finishes executing, any variables declared within its body is "garbage collected".
// In other words, it is deleted from memory. This is why local variables are possible in JavaScript.
// This is why variables inside functions cannot be accessed outside.

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

// The one place where I never particularly liked this method personally is where the type of the object is also relevant - with your factory,
// each object is it's own thing, not using any sort of prototypical inheritance or the like.

// For the times where I find it necessary to actually use truly private variables and still take advantage of JavaScript's
// built-in inheritance, there's also the WeakMap:

let NamedThing = (function () {
  const Private = new WeakMap();
  return class NamedThing {
    constructor(name) {
      // Yes, we're only storing one value in the "private object".
      // Of course, the example is a bit contrived.
      Private.set(this, { name });
    }

    // For comparison to the original. I'd use 'get name()' and
    // 'set name(name)' instead, personally, but that I think is more
    // a matter of personal preference.
    getName() {
      return Private.get(this).name;
    }
    setName(name) {
      Private.get(this).name = name;
    }
  };
})();

let Animal = (function (NamedThing) {
  const Private = new WeakMap();
  return class Animal extends NamedThing {
    constructor(name, job) {
      super(name);
      Private.set(this, { job });
    }
    getJob() {
      return Private.get(this).job;
    }
    setJob(job) {
      Private.get(this).job = job;
    }

    // Just for exposition: this should always return undefined,
    // since NamedThing has it's own WeakMap, separate from this one
    getNameFromHere() {
      return Private.get(this).name;
    }
  };
})(NamedThing);

const presto = new Animal("Presto", "Digger");
console.log(presto instanceof NamedThing); // true
console.log(presto.getName()); // Presto
console.log(presto.name); // undefined
console.log(presto.getNameFromHere()); // undefined
console.log(presto instanceof Animal); // true
console.log(presto.getJob()); // Digger
presto.setJob("Bone Finder");
console.log(presto.getJob()); // Bone Finder
