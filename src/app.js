import substract, {add, square} from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js'

console.log('app.js is running!!');

console.log(add(34, 23));
console.log(square(9));
console.log(substract(143, 23));

const age = 17;

console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(66));