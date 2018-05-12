import {add, square} from './utils.js';
import {isAdult, canDrink} from './person.js'

console.log('app.js is running!!');

console.log(add(34, 23));
console.log(square(9));

const age = 17;

console.log(isAdult(age));
console.log(canDrink(age));