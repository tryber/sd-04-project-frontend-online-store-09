import React, { Component } from 'react';
import Link from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

export default Home;
