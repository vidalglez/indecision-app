class IndecisionApp extends React.Component { 
  
  render(){
    const title = 'Indecision App';
    const subtitle = 'Decide what you want to do today';
    const options = ['Option 1', 'Option 2', 'Option 3'];
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  
  render() {   
    return (      
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) =>  <Option key={option} optionText={option} />)
        }
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
        {this.props.optionText}
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));