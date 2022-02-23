"use strict";

const x = function (a, b) {return a * b};
let z = x(4, 3);
console.log(z);

let NomeCompleto = function (Nome, Sobrenome) {return `${Nome} ${Sobrenome}`};
let MeuNome = NomeCompleto('Alex', 'Daniel de Lima');
console.log(MeuNome);