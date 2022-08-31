/****************************************
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
{Object} => Iterator => Generator
****************************************/

let log = console.log;
let characters = ["Finn", "Poe", "Rey", "Kylo", "Luke", "Leia"];

function* genny() {
  let i = 0;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
  i++;
  yield characters[i];
}

//let iter = genny();
//log(iter)
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());

/* 
    we can create our own iterator using a generator function as "genny". To be able to iterate the object
    generators works as a wrap of an iterator object to simplify code (as we have seen in previous "genny" function)
 */

let starwars8 = {
  title: "The Last Jedi",
  director: "Rian Johnson",
  year: 2017,
  boxOffice: "1.3B",
};

let count = -1;
let SW8 = {
  [Symbol.iterator]: function (obj) {
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: obj.title,
              done: false,
            };
          case 1:
            return {
              value: obj.year,
              done: false,
            };
          case 2:
            return {
              value: obj.director,
              done: false,
            };
          case 3:
            return { value: undefined, done: true };
          default:
            return { value: undefined, done: true };
        }
      },
    };
  },
};

let data = SW8[Symbol.iterator](starwars8);
log(data.next());
log(data.next());
log(data.next());
log(data.next());
log(data.next());

//
//for(let p of starwars8){
//    for of loops are using the .next( ) method behind the scenes
//}

// objects has not buil-in a iterator
// But, we can still use "entries" to  convert in an array and iterate
let can = {
  prop: "can",
  bag: "box",
};
Object.entries(can).map((item) => {
  console.log(item);
});
