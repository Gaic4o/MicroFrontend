// const {add, addAndMultiply} = require("./functions/add");
const {add: addNumbers, subtract} = require('./functions');

function add() {
    console.log("helow");
}

const output = addNumbers(1, 2, 3);
add();

console.log(output);