/**
 * Using a single integer to represent multiple permissions
 * based on binary values using bitwise operators
 *
 *  & bitwise AND - if both the top and bottom bit are 1, result is 1
 *  | bitwise OR - if either the top and bottom bit or both are 1, result is 1
 *  ^ bitwise XOR - if only one of the bits are 1, result is 1
 * 0101
 * 0100 & =   0100
 *
 * 0100
 * 1110 | = 1110
 *
 * 0101
 * 0001 ^ = 0100
 *
 * 0 - 0000
 * 1 - 0001 x
 * 2 - 0010 x
 * 3 - 0011
 * 4 - 0100 x
 * 5 - 0101
 * 6 - 0110
 * 7 - 0111
 * 8 - 1000 x
 * 9 - 1001
 * 10 - 1010
 */

const READ = 1; //   0001
const DRINK = 2; //  0010
const SING = 4; //   0100
const DELETE = 8; // 1000

class Person {
  constructor(name, access = 0) {
    this.name = name;
    this.access = access;
  }
  getAll() {
    return {
      [READ]: !!(this.access & READ),
      [DRINK]: !!(this.access & DRINK),
      [SING]: !!(this.access & SING),
      [DELETE]: !!(this.access & DELETE),
    };
  }
  addPerm(perm) {
    this.access = this.access | perm;
  }
  removePerm(perm) {
    if (this.getAll()[perm]) {
      this.access = this.access ^ perm;
    }
  }
}

let steve = new Person("Steve", 5);
let joanne = new Person("Joanne");
joanne.addPerm(DRINK);
joanne.addPerm(SING);
joanne.addPerm(DELETE);
steve.addPerm(SING);

joanne.removePerm(READ);
steve.removePerm(READ);

console.log(steve.access, steve.getAll());
console.log(joanne.access, joanne.getAll());

// console.log(steve.getAll()[READ]);
// console.log(joanne.getAll()[READ]);
