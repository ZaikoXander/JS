"use strict";

// Exemplo:
let myFunction = (a, b) => a * b;
console.log(myFunction(4, 5));

/* Antes:
var hello;
hello = function() {
    return 'Hello World!';
} */

// Depois:
var hello;
hello = () => {
    return "Hello World!";
}
console.log(hello());

hello = () => "Ola mundo!";
console.log(hello());

// Arrow Functions com parâmetros:
hello = (val) => `Hello ${val}`;

// Quando há apenas um parâmetro é possível desconsiderar os parênteses
hello = val => `Hello ${val}`;