let visible = false;

const onShowDetails = () => {
    if(visible){
        visible = false;
    }
    else {
        visible = true;
    }
  renderPage();
}
const appId = document.getElementById('app');
const renderPage = () => {
    const visibilityTemplate = (
        <div>
          <h1>Visibility Toggle</h1>
          { 
            visible && <p>Hey, this text is visible!</p> 
          }
        <button onClick={onShowDetails}>Show details</button>
        </div>
    );
  ReactDOM.render(visibilityTemplate, appId);
}

renderPage();