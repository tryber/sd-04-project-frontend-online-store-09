import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Link from 'react-router-dom';

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
