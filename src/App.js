import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

api.getCategories().then((categories) => {
  console.log(categories);
});

api.getProductsFromCategoryAndQuery().then((categoryId, query) => {
  console.log(categoryId, query);
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
