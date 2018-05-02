const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
}

const newarrow = (x) => x * x;

console.log(square(8))

console.log(squareArrow(9));

console.log(newarrow(7));
/*
const firstName = function(fullName){
  return fullName.split(' ')[0];
}
*/
const firstName = (fullName) => fullName.split(' ')[0];

console.log('Arrow function result: ' + firstName('Mike Garza'));

const op = (a, b) => {
    let res = a + b;
    return res * 5;
}

console.log(op(5, 2));

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  //printPlacesLived: function(){
  printPlacesLived(){
    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city)
    });
  }
};

user.printPlacesLived();

const multiplier = {
  numbers: [2,4,6],
  multipliedBy: 2,
  multiply(){
    return this.numbers.map( number =>  this.multipliedBy * number);
  } 
};

console.log(multiplier.multiply()); 
            
