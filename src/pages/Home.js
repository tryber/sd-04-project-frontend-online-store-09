import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryPanel from '../components/CategoryPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: '' };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <CategoryPanel setCategory={this.setCategory} />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

export default Home;
