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

let count = 0;
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" className="button">+1</button>
  </div>
);
const appRoute = document.getElementById('app');
ReactDOM.render(template2, appRoute);