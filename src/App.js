import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import CheckOut from './pages/CheckOut';
import './App.css';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: JSON.parse(localStorage.getItem('cart')) || [] };
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  componentWillUnmount() {
    const { shoppingCart } = this.state;
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }

  addItemToCart(item, qty) {
    const { shoppingCart } = this.state;
    const isItemThere = shoppingCart.findIndex((e) => e.item.id === item.id);
    if (isItemThere >= 0) {
      const cart = [...shoppingCart];
      cart[isItemThere].qty += qty;
      this.setState({ shoppingCart: cart });
    } else {
      let qtd;
      if (qty === 0) { qtd = 1; } else { qtd = qty; }

      this.setState({ shoppingCart: [...shoppingCart, { item, qty: qtd }] });
    }
  }


  renderShoppingCart() {
    const { shoppingCart } = this.state;
    return (
      <Route
        path="/shopping-cart"
        render={() => (
          <ShoppingCart
            shoppingCart={shoppingCart}
            addItemToCart={this.addItemToCart}
          />
        )}
      />
    );
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          {this.renderShoppingCart()}
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/:pID/details" component={ProductDetails} />
          <Route exact path="/" render={() => <Home addItemToCart={this.addItemToCart} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
