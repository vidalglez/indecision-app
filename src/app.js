import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//options={['Servidor De Nadie', 'Blade Runner']}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax{
  constructor(){
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting(){
    return `My name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax{
  name = 'Jen';

  getGreeting = () => {
    return `My name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting; 
console.log(newGetGreeting());