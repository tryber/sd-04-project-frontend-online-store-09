import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import CheckOut from './pages/CheckOut';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/product/:pID" component={ProductDetails} />
          <Route path="/checkout" component={CheckOut} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
