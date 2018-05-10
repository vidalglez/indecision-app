class  Counter extends React.Component{   

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
  
    componentDidMount(){      
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
      console.log('count' + count);
      if (!isNaN(count)) {
        this.setState(() => ({count}));
      }
      
    }
    
    componentDidUpdate(prevProps, prevState){       
      if (prevState.count !== this.state.count) {
       // const json = JSON.stringify(this.state.count);
        //console.log('componentDidUpdate' + json);
        //const count = localStorage.setItem('count', json);        
        const count = localStorage.setItem('count', this.state.count);
      }
    }

    handleAddOne(){
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne(){
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        this.setState( () => {
            return {
                count: 0
            }
        });
    }

    render(){
        return(
        <div>
            <h2>Counter {this.state.count}</h2>
            <button onClick={this.handleAddOne}>1+</button>
            <button onClick={this.handleMinusOne}>1-</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }
}

/*Counter.defaultProps = {
    count: 0
};*/
//count={9}
ReactDOM.render(<Counter  />, document.getElementById('app'));