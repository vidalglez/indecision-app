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
  }
}

const template = (
  <div>
    <h3>{app.title}</h3>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <ol>
      <ul>Item one</ul>
      <ul>Item two</ul>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
  </div>
); 

const appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);