import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import * as api from './services/api';

api.getCategories().then((categories) => {
  console.log(categories);
});

api.getProductsFromCategoryAndQuery().then((categoryId, query) => {
  console.log(categoryId, query);
});


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
