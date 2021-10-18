let path = require("path");


let dir = __dirname;
let file = __filename;

console.log(dir);
console.log(file);

let fullPath = path.join(dir, "server.js");

console.log(fullPath);