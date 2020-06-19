import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryPanel from '../components/CategoryPanel';
import ProductList from '../components/ProductList';
import '../styles/home.css';

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
    const { selectedCategory } = this.state;
    return (
      <div className="homepage">
        <CategoryPanel setCategory={this.setCategory} />
        <ProductList selectedCategory={selectedCategory} />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

export default Home;
