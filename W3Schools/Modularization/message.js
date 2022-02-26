import {name, age} from "./person.js";

const message = () => {
    const name = 'Jesse';
    const age = 40;
    return `${name} is ${age} years old.`;
};

console.log(`My name is ${name}, and I'm ${age} years old.`);

export default message;