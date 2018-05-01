console.log('App.js is running!');

const app = {
    title: 'Blade Runner',
    subtitle: 'The emotion continue',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = ''; 
    renderTemplate();
  }
};

const onRemoveAll = () => {
   // e.preventDefault();
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(randomNum);
};

const appRoute = document.getElementById('app');

const renderTemplate = () => {

  const template = (
    <div>
      <h3>{app.title}</h3>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>     
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>     
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>  )        
        }        
      </ol>      
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  ); 

  
  ReactDOM.render(template, appRoute);
}

renderTemplate();

