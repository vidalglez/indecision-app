class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  
  getGreeting() {  
    return `Hi I am ${this.name}.`;
  }
  
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'Undecided') {
    super(name, age);
    this.major = major;
  }
  
  hasMajor(){
    return !!this.major;
  }
  
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
        description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'Unknown') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()) {
        greeting += ` I'm visting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student('Servidor de Nadie', 32, 'Computer Science');
console.log(me.getDescription());

const traveler = new Traveler('Cerati', 55, 'Buenos Aires');
console.log(traveler.getGreeting());