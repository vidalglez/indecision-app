class IndecisionApp extends React.Component { 
  
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    }
  }

  handleDeleteOptions(){
    this.setState( () => {
      return {
        options: []
      };
    });
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }


  render(){
    const title = 'Indecision App';
    const subtitle = 'Decide what you want to do today';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions} 
        />
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
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
     
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions} >Remove all</button>
        {
          this.props.options.map((option) =>  <Option key={option} optionText={option} />)
        }
        <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  
  handleAddOption(e){
    e.preventDefault();
    alert(e.target.elements.option.value);
    e.target.elements.option.value = '';
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
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