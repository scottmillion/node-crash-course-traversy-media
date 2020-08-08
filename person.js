/*
    Note that we have a Module Wrapper Function with these functions available to us by default.
    (function (exports, require, module, __filename, __dirname) {

    })

*/

// showing that we can access __filename and __dirname
console.log("---------");
console.log("Filename: " + __filename);
console.log("Directory: " + __dirname);
console.log("---------");

const person = {
  name: "John Doe",
  age: 30,
};

module.exports = person; // exports for use in other files

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
