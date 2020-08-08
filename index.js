/* Why not use 'import' instead of require like the below?

---run in this file---
import app from "./app.js";
app();
---

---run in app.js file---
export default function foo() {
  console.log("This works");
}
---

Note: you'd also have to add "type": "module" to the package.json file and append --experimental-modules when you run node filename in the terminal. Also, your requires wouldn't work anymore.

import is/was the last feature of ES6 that hasn't been implemented yet
But it should be soon
*/

const person = require("./person"); // imports from person.js using 'common javascript' (before es6)
console.log(person);
console.log(person.name);

const Person = require("./person");
let sarah = new Person("Sarah", 14);
sarah.greeting();
