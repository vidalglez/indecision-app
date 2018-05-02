class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Decide what you want to do today</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        Option Component here
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));