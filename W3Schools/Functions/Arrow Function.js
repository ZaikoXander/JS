"use strict";

let myFunction = (a, b) => a * b;
console.log(myFunction(4, 5));

/* Antes:
var hello;
hello = function() {
    return 'Hello World!';
} */

/* Depois */
var hello;
hello = () => {
    return "Hello World!";
}
console.log(hello());