class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleShowDetails(){
        this.setState( (prevState) => {            
                return {
                    visibility: !prevState.visibility 
                }
            }            
        );
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>                
                <button onClick={this.handleShowDetails}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));