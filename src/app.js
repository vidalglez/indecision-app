console.log('App.js is running!');

const app = {
    title: 'Blade Runner',
    subtitle: 'The emotion continue',
    options: ['One', 'Two']
};

const template = (
  <div>
    <h3>{app.title}</h3>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <ul>Item one</ul>
      <ul>Item two</ul>
    </ol>
  </div>
); 

const addOne = function(){
  count++;  
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();  
}

const reset = () => {
  count = 0;
  renderCounterApp();  
}

let count = 0;
const appRoute = document.getElementById('app');

const renderCounterApp = () => {
   const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button id="my-id" onClick={addOne} className="button">+1</button>
      <button id="minBtn" onClick={minusOne}>-1</button>
      <button id="resetBtn" onClick={reset}>reset</button>
    </div>
  );
  
  ReactDOM.render(template2, appRoute);
};

renderCounterApp();