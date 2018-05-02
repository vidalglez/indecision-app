let visible = false;

const onShowDetails = () => {
    visible = !visible;
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
        <button onClick={onShowDetails}>
          {visible ? 'Hide details' : 'Show details'}
        </button>
        </div>
    );
  ReactDOM.render(visibilityTemplate, appId);
}

renderPage();