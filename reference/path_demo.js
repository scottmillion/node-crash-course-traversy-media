const path = require("path"); // note this is a core module found at https://nodejs.org/dist/latest-v12.x/docs/api/path.html so there's no package to install or ./ necessary.

console.log("---");

//Full path
console.log("Full path: " + __filename);
console.log("---");

//Base file name from our path import
console.log("Filename: " + path.basename(__filename));
console.log("---");

//Directory
console.log("Dir Name: " + path.dirname(__filename));
console.log("---");

//File extension
console.log("Ext Name: " + path.extname(__filename));
console.log("---");

//Create path object
console.log("Create path object:");
console.log(path.parse(__filename));
console.log("Create path object base:");
console.log(path.parse(__filename).base);
console.log("---");

//Concatenate paths
console.log("Concatenate paths:");
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
console.log("---");
