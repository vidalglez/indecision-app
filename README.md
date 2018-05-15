# indecision-app
React application for practicing purposes

To install yarn globally in your machine after installing node and npm: $ npm install -g yarn

To install live server in your local machine: $ yarn global add live-server

in case of failure execute: npm install -g live-server 

To run locally: $ live-server public

To install babel in you local machine to compile jsx: npm install -g babel-cli@6.24.1 

To create a project from scratch: $ yarn init

To run babel and refresh automatically:
babel src/playgorund/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

To remove bable and live server use: $ yarn global remove babel-cli live-server
if npm was used to install it, run: $ npm uninstall -g babel-cli live-server

To install it live server and babel inside your project: $ yarn add live-server babel-cli@6.24.1

To install webpack: $ yarn add webpack@3.1.0

To run the project: $ yarn run build

To run live server after build: $ yarn run serve

To install a new library: $ yarn add validator@8.0.0

To install react adn react-dom: $ yarn add react@16.0.0 react-dom@16.0.0

To install babel-core and run it from weback (different from babe-cli whhich allows running command line): $ yarn add babel-core@6.25.0

To install babel loader: yarn add babel-loader@7.1.1

To install webpack dev server: $ yarn add webpack-dev-server@2.5.1
