import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {
  render() {
    const { product, addItemToCart } = this.props;
    const { available_quantity: availableQuantity } = product;
    const { id, title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <div>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <h4 data-testid="product-detail-name">{title}</h4>
          <h5>{id}</h5>
          <h5>{`R$ ${price}`}</h5>
          <Link
            data-testid="product-detail-link"
            to={{ pathname: `${id}/details/`, state: { product } }}
          >
            Detalhes
          </Link>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <button
              className="product-card-btn"
              type="button"
              data-testid="product-add-to-cart"
              onClick={() => addItemToCart({ id, title, thumbnail, price, availableQuantity }, 1)}
            >
              Adicionar ao Carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductCard;
